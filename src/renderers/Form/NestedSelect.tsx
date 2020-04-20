import React from 'react';
import xorBy from 'lodash/xorBy';
import unionBy from 'lodash/unionBy';
import Overlay from '../../components/Overlay';
import Checkbox from '../../components/Checkbox';
import PopOver from '../../components/PopOver';
import {RootCloseWrapper} from 'react-overlays';
import {Icon} from '../../components/icons';
import {autobind, flattenTree, isEmpty, filterTree} from '../../utils/helper';
import {dataMapping} from '../../utils/tpl-builtin';
import {OptionsControl, OptionsControlProps} from '../Form/Options';
import {Option, Options} from '../../components/Select';
import Input from '../../components/Input';
import {findDOMNode} from 'react-dom';

export interface NestedSelectProps extends OptionsControlProps {
  cascade?: boolean;
  withChildren?: boolean;
}

export interface NestedSelectState {
  isOpened?: boolean;
  isFocused?: boolean;
  inputValue?: string;
  stack: Array<Array<Option>>;
}

export default class NestedSelectControl extends React.Component<
  NestedSelectProps,
  NestedSelectState
> {
  static defaultProps: Partial<NestedSelectProps> = {
    cascade: false,
    withChildren: false,
    searchPromptText: '输入内容进行检索'
  };
  target: any;
  input: HTMLInputElement;
  state: NestedSelectState = {
    isOpened: false,
    isFocused: false,
    inputValue: '',
    stack: []
  };

  @autobind
  domRef(ref: any) {
    this.target = ref;
  }

  @autobind
  open() {
    const {options, disabled} = this.props;
    if (!disabled) {
      this.setState({
        isOpened: true,
        stack: [options]
      });
    }
  }

  @autobind
  close() {
    this.setState({
      isOpened: false,
      stack: []
    });
  }

  renderValue() {
    const {multiple, classnames: cx, selectedOptions, labelField} = this.props;
    const len = Array.isArray(selectedOptions) ? selectedOptions.length : 0;
    return (
      <div className={cx('NestedSelect-valueWrap')} onClick={this.open}>
        {len > 0 ? (
          <div className={cx('NestedSelect-value')}>
            {multiple
              ? `已选择 ${len} 项`
              : selectedOptions[0][labelField || 'label']}
          </div>
        ) : null}
      </div>
    );
  }

  renderClear() {
    const {clearable, value, disabled, classnames: cx} = this.props;

    return clearable &&
      !disabled &&
      (Array.isArray(value) ? value.length : value) ? (
      <a onClick={this.clearValue} className={cx('NestedSelect-clear')}>
        <Icon icon="close" className="icon" />
      </a>
    ) : null;
  }

  @autobind
  clearValue() {
    const {onChange, resetValue} = this.props;

    onChange(typeof resetValue === 'undefined' ? '' : resetValue);
  }

  handleOptionClick(option: Option, e: React.MouseEvent<HTMLElement>) {
    const {
      multiple,
      onChange,
      joinValues,
      extractValue,
      valueField,
      autoFill,
      onBulkChange
    } = this.props;

    if (multiple) {
      return;
    }

    e.stopPropagation();

    const sendTo =
      !multiple &&
      autoFill &&
      !isEmpty(autoFill) &&
      dataMapping(autoFill, option);
    sendTo && onBulkChange(sendTo);

    onChange(
      joinValues
        ? option[valueField || 'value']
        : extractValue
        ? option[valueField || 'value']
        : option
    );
    !multiple && this.close();
  }

  handleCheck(option: Option | Options, index?: number) {
    const {
      onChange,
      selectedOptions,
      joinValues,
      valueField,
      delimiter,
      extractValue,
      withChildren,
      cascade,
      multiple
    } = this.props;
    const {stack} = this.state;

    if (
      !Array.isArray(option) &&
      option.children &&
      option.children.length &&
      typeof index === 'number'
    ) {
      const checked = selectedOptions.some(
        o => o.value == (option as Option).value
      );
      const uncheckable = cascade
        ? false
        : option.uncheckable || (multiple && !checked);
      const children = option.children.map(c => ({...c, uncheckable}));
      if (stack[index]) {
        stack.splice(index + 1, 1, children);
      } else {
        stack.push(children);
      }
    }

    const items = selectedOptions.concat();
    let newValue: Option | Options | string;

    // 三种情况：
    // 1.全选，option为数组
    // 2.单个选中，且有children
    // 3.单个选中，没有children

    if (Array.isArray(option)) {
      option = withChildren ? flattenTree(option) : option;
      newValue = items.length === option.length ? [] : option;
    } else if (Array.isArray(option.children)) {
      if (cascade) {
        newValue = xorBy(items, [option], valueField || 'value');
      } else if (withChildren) {
        option = flattenTree([option]);
        const fn = option.every(
          (opt: Option) => !!~items.findIndex(item => item.value === opt.value)
        )
          ? xorBy
          : unionBy;
        newValue = fn(items, option, valueField || 'value');
      } else {
        newValue = items.filter(
          item =>
            !~flattenTree([option], i => (i as Option).value).indexOf(
              item.value
            )
        );
        !~items.map(item => item.value).indexOf(option.value) &&
          newValue.push(option);
      }
    } else {
      newValue = xorBy(items, [option], valueField || 'value');
    }

    if (joinValues) {
      newValue = (newValue as Options)
        .map(item => item[valueField || 'value'])
        .join(delimiter || ',');
    } else if (extractValue) {
      newValue = (newValue as Options).map(item => item[valueField || 'value']);
    }

    onChange(newValue);
  }

  allChecked(options: Options): boolean {
    const {selectedOptions, withChildren} = this.props;
    return options.every(option => {
      if (withChildren && option.children) {
        return this.allChecked(option.children);
      }
      return selectedOptions.some(
        selectedOption => selectedOption.value == option.value
      );
    });
  }

  partialChecked(options: Options): boolean {
    const {selectedOptions, withChildren} = this.props;
    return options.some(option => {
      if (withChildren && option.children) {
        return this.partialChecked(option.children);
      }
      return selectedOptions.some(
        selectedOption => selectedOption.value == option.value
      );
    });
  }

  reload() {
    const reload = this.props.reloadOptions;
    reload && reload();
  }

  @autobind
  onFocus(e: any) {
    this.props.disabled ||
      this.state.isOpened ||
      this.setState(
        {
          isFocused: true
        },
        this.focus
      );

    this.props.onFocus && this.props.onFocus(e);
  }

  @autobind
  onBlur(e: any) {
    this.setState({
      isFocused: false
    });

    this.props.onBlur && this.props.onBlur(e);
  }

  @autobind
  focus() {
    this.input
      ? this.input.focus()
      : this.getTarget() && this.getTarget().focus();
  }

  @autobind
  blur() {
    this.input
      ? this.input.blur()
      : this.getTarget() && this.getTarget().blur();
  }

  @autobind
  getTarget() {
    if (!this.target) {
      this.target = findDOMNode(this) as HTMLElement;
    }
    return this.target as HTMLElement;
  }

  @autobind
  inputRef(ref: HTMLInputElement) {
    this.input = ref;
  }

  @autobind
  handleInputChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = evt.currentTarget.value;
    const {options, labelField, valueField} = this.props;

    const regexp = new RegExp(`${inputValue}`, 'i');

    let filtedOptions =
      inputValue && this.state.isOpened
        ? filterTree(
            options,
            option =>
              regexp.test(option[labelField || 'label']) ||
              regexp.test(option[valueField || 'value']) ||
              !!(option.children && option.children.length),
            1,
            true
          )
        : options.concat();

    this.setState({
      inputValue,
      stack: [filtedOptions]
    });
  }

  renderOptions() {
    const {
      multiple,
      selectedOptions,
      classnames: cx,
      value,
      options,
      disabled,
      searchable,
      searchPromptText
    } = this.props;

    const stack = this.state.stack;

    const searchInput = searchable ? (
      <div
        className={cx(`Select-input`, {
          'is-focused': this.state.isFocused
        })}
      >
        <Icon icon="search" className="icon" />
        <Input
          value={this.state.inputValue}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          disabled={disabled}
          placeholder={searchPromptText}
          onChange={this.handleInputChange}
          ref={this.inputRef}
        />
      </div>
    ) : null;

    let partialChecked = this.partialChecked(options);
    let allChecked = this.allChecked(options);

    return (
      <>
        {stack.map((options, index) => (
          <div
            key={index}
            className={cx('NestedSelect-menu')}
            style={{minWidth: this.target.offsetWidth}}
          >
            {index === 0 ? searchInput : null}
            {multiple && index === 0 ? (
              <div className={cx('NestedSelect-option', 'checkall')}>
                <Checkbox
                  onChange={this.handleCheck.bind(this, options)}
                  checked={partialChecked}
                  partial={partialChecked && !allChecked}
                >
                  全选
                </Checkbox>
              </div>
            ) : null}

            {options.map((option: Option, idx: number) => {
              const checked = selectedOptions.some(
                o => o.value == option.value
              );
              const selfChecked = !!option.uncheckable || checked;
              let nodeDisabled = !!option.uncheckable || !!disabled;

              return (
                <div
                  key={idx}
                  className={cx('NestedSelect-option', {
                    'is-active': value && value === option.value
                  })}
                  onClick={this.handleOptionClick.bind(this, option)}
                  onMouseEnter={this.onMouseEnter.bind(this, option, index)}
                >
                  {multiple ? (
                    <Checkbox
                      onChange={this.handleCheck.bind(this, option, index)}
                      trueValue={option.value}
                      checked={selfChecked}
                      disabled={nodeDisabled}
                    >
                      {option.label}
                    </Checkbox>
                  ) : (
                    <span>{option.label}</span>
                  )}

                  {option.children && option.children.length ? (
                    <div className={cx('NestedSelect-optionArrowRight')}>
                      <Icon icon="right-arrow" className="icon" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ))}
      </>
    );
  }

  onMouseEnter(option: Option, index: number, e: MouseEvent) {
    let {stack} = this.state;
    let {cascade, multiple, selectedOptions} = this.props;
    index = index + 1;

    if (option.children && option.children.length) {
      const checked = selectedOptions.some(o => o.value == option.value);
      const uncheckable = cascade
        ? false
        : option.uncheckable || (multiple && checked);
      const children = option.children.map(c => ({...c, uncheckable}));
      if (stack[index]) {
        stack.splice(index, 1, children);
      } else {
        stack.push(children);
      }
    } else {
      stack[index] && stack.splice(index, 1);
    }

    this.setState({stack});
  }

  renderOuter() {
    const {popOverContainer, classnames: cx} = this.props;

    let body = (
      <RootCloseWrapper
        disabled={!this.state.isOpened}
        onRootClose={this.close}
      >
        <div
          className={cx('NestedSelect-menuOuter')}
          style={{minWidth: this.target.offsetWidth}}
        >
          {this.renderOptions()}
        </div>
      </RootCloseWrapper>
    );

    return (
      <Overlay
        container={popOverContainer || this.getTarget}
        target={this.getTarget}
        show
      >
        <PopOver
          className={cx('NestedSelect-popover')}
          style={{minWidth: this.target.offsetWidth}}
        >
          {body}
        </PopOver>
      </Overlay>
    );
  }

  render() {
    const {
      className,
      disabled,
      placeholder,
      selectedOptions,
      classnames: cx
    } = this.props;

    return (
      <div className={cx('NestedSelectControl')}>
        <div
          className={cx(
            'NestedSelect',
            {
              'is-opened': this.state.isOpened,
              'is-disabled': disabled
            },
            className
          )}
          onClick={this.open}
          ref={this.domRef}
        >
          {!(selectedOptions && selectedOptions.length > 0) ? (
            <div className={cx('NestedSelect-placeholder')}>{placeholder}</div>
          ) : null}

          {this.renderValue()}
          {this.renderClear()}

          <span className={cx('Select-arrow')} />
        </div>

        {this.state.isOpened ? this.renderOuter() : null}
      </div>
    );
  }
}

@OptionsControl({
  type: 'nested-select'
})
export class NestedSelectControlRenderer extends NestedSelectControl {}
