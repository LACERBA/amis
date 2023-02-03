amis.define('docs/zh-CN/components/timeline.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Timeline 时间轴",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Timeline",
    "icon": null,
    "order": 73,
    "html": "<div class=\"markdown-body\"><p>时间轴组件</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"timeline\",\n      \"items\": [\n        {\n          \"time\": \"2019-02-07\",\n          \"title\": \"节点数据\",\n          \"detail\": \"error\",\n        },\n        {\n          \"time\": \"2019-02-08\",\n          \"title\": \"节点数据\",\n          \"detail\": \"success\",\n        },\n        {\n          \"time\": \"2019-02-09\",\n          \"title\": \"节点数据\",\n          \"detail\": \"error\",\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%97%B6%E9%97%B4%E8%BD%B4%E8%8A%82%E7%82%B9%E9%A2%9C%E8%89%B2%E8%AE%BE%E7%BD%AE\" href=\"#%E6%97%B6%E9%97%B4%E8%BD%B4%E8%8A%82%E7%82%B9%E9%A2%9C%E8%89%B2%E8%AE%BE%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>时间轴节点颜色设置</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"timeline\",\n      \"items\": [\n        {\n          \"time\": \"2019-02-07\",\n          \"title\": \"节点数据\",\n          \"color\": \"#ffb200\",\n        },\n        {\n          \"time\": \"2019-02-08\",\n          \"title\": \"节点数据\",\n          \"color\": \"#4F86F4\",\n        },\n        {\n          \"time\": \"2019-02-09\",\n          \"title\": \"节点数据\",\n          \"color\": \"success\",\n        },\n        {\n          \"time\": \"2019-02-09\",\n          \"title\": \"节点数据\",\n          \"color\": \"warning\",\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%97%B6%E9%97%B4%E8%BD%B4%E8%8A%82%E7%82%B9%E5%9B%BE%E6%A0%87%E8%AE%BE%E7%BD%AE\" href=\"#%E6%97%B6%E9%97%B4%E8%BD%B4%E8%8A%82%E7%82%B9%E5%9B%BE%E6%A0%87%E8%AE%BE%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>时间轴节点图标设置</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"data\": {\n    \"image\": \"https://suda.cdn.bcebos.com/images%2F2021-01%2Fsearch.svg\"\n  },\n  \"body\": [\n    {\n      \"type\": \"timeline\",\n      \"items\": [\n        {\n          \"time\": \"2019-02-07\",\n          \"title\": \"节点数据error\",\n          \"detail\": \"error\",\n          \"icon\": \"fail\"\n        },\n        {\n          \"time\": \"2019-02-08\",\n          \"title\": \"节点数据success\",\n          \"detail\": \"success\",\n          \"icon\": \"success\"\n        },\n        {\n          \"time\": \"2019-02-09\",\n          \"title\": \"节点数据(自定义图片)\",\n          \"detail\": \"warning\",\n          \"icon\": \"${image}\"\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%8A%82%E7%82%B9%E6%A0%87%E9%A2%98%E8%87%AA%E5%AE%9A%E4%B9%89\" href=\"#%E8%8A%82%E7%82%B9%E6%A0%87%E9%A2%98%E8%87%AA%E5%AE%9A%E4%B9%89\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>节点标题自定义</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"timeline\",\n      \"items\": [\n        {\n          \"time\": \"2019-02-07\",\n          \"title\": [\n            {\n              \"type\": \"text\",\n              \"value\": \"2019年02月7日\"\n            },\n            {\n              \"type\": \"button\",\n              \"label\": \"查看\",\n              \"actionType\": \"dialog\",\n              \"level\": \"link\",\n              \"dialog\": {\n                \"title\": \"查看详情\",\n                \"body\": \"这是详细内容。\"\n              }\n            },\n            {\n              \"type\": \"button\",\n              \"label\": \"删除\",\n              \"level\": \"link\",\n              \"actionType\": \"dialog\",\n              \"dialog\": {\n                \"title\": \"删除\",\n                \"body\": \"确认删除吗？\"\n              }\n            }\n          ]\n        },\n        {\n          \"time\": \"2019-02-10\",\n          \"title\": [\n            {\n              \"type\": \"text\",\n              \"value\": \"2019年02月10日\"\n            },\n            {\n              \"type\": \"button\",\n              \"label\": \"查看\",\n              \"actionType\": \"dialog\",\n              \"level\": \"link\",\n              \"dialog\": {\n                \"title\": \"查看详情\",\n                \"body\": \"这是详细内容。\"\n              }\n            },\n            {\n              \"type\": \"button\",\n              \"label\": \"删除\",\n              \"level\": \"link\",\n              \"actionType\": \"dialog\",\n              \"dialog\": {\n                \"title\": \"删除\",\n                \"body\": \"确认删除吗？\"\n              }\n            }\n          ]\n        },\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%AE%BE%E7%BD%AE%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AE%E5%80%92%E5%BA%8F\" href=\"#%E8%AE%BE%E7%BD%AE%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AE%E5%80%92%E5%BA%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>设置节点数据倒序</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"timeline\",\n      direction: \"vertical\",\n      reverse: true,\n      \"items\": [\n        {\n          \"time\": \"2019-02-07\",\n          \"title\": \"节点数据\",\n        },\n        {\n          \"time\": \"2019-02-08\",\n          \"title\": \"节点数据\",\n        },\n        {\n          \"time\": \"2019-02-09\",\n          \"title\": \"节点数据\",\n        },\n        {\n          \"time\": \"2019-02-10\",\n          \"title\": \"节点数据\",\n        },\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%AE%BE%E7%BD%AE%E6%97%B6%E9%97%B4%E8%BD%B4%E6%96%B9%E5%90%91\" href=\"#%E8%AE%BE%E7%BD%AE%E6%97%B6%E9%97%B4%E8%BD%B4%E6%96%B9%E5%90%91\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>设置时间轴方向</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"timeline\",\n      direction: \"horizontal\",\n      \"items\": [\n        {\n          \"time\": \"2019-02-07\",\n          \"title\": \"节点数据\",\n        },\n        {\n          \"time\": \"2019-02-08\",\n          \"title\": \"节点数据\",\n        },\n        {\n          \"time\": \"2019-02-09\",\n          \"title\": \"节点数据\",\n        },\n        {\n          \"time\": \"2019-02-10\",\n          \"title\": \"节点数据\",\n        },\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%AE%BE%E7%BD%AE%E6%96%87%E5%AD%97%E7%9B%B8%E5%AF%B9%E6%97%B6%E9%97%B4%E8%BD%B4%E6%96%B9%E5%90%91-%E6%97%B6%E9%97%B4%E8%BD%B4%E6%A8%AA%E5%90%91%E6%97%B6%E4%B8%8D%E6%94%AF%E6%8C%81-\" href=\"#%E8%AE%BE%E7%BD%AE%E6%96%87%E5%AD%97%E7%9B%B8%E5%AF%B9%E6%97%B6%E9%97%B4%E8%BD%B4%E6%96%B9%E5%90%91-%E6%97%B6%E9%97%B4%E8%BD%B4%E6%A8%AA%E5%90%91%E6%97%B6%E4%B8%8D%E6%94%AF%E6%8C%81-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>设置文字相对时间轴方向（时间轴横向时不支持）</h2><h3><a class=\"anchor\" name=\"%E6%96%87%E5%AD%97%E4%BD%8D%E4%BA%8E%E6%97%B6%E9%97%B4%E8%BD%B4%E5%B7%A6%E4%BE%A7\" href=\"#%E6%96%87%E5%AD%97%E4%BD%8D%E4%BA%8E%E6%97%B6%E9%97%B4%E8%BD%B4%E5%B7%A6%E4%BE%A7\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>文字位于时间轴左侧</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"timeline\",\n      \"mode\": \"left\",\n      \"items\": [\n        {\n          \"time\": \"2019-02-07\",\n          \"title\": \"节点数据\",\n          \"detail\": \"error\",\n        },\n        {\n          \"time\": \"2019-02-08\",\n          \"title\": \"节点数据\",\n          \"detail\": \"success\",\n        }\n      ]\n    },\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%96%87%E5%AD%97%E4%BA%A4%E6%9B%BF%E4%BD%8D%E4%BA%8E%E6%97%B6%E9%97%B4%E8%BD%B4%E4%B8%A4%E4%BE%A7\" href=\"#%E6%96%87%E5%AD%97%E4%BA%A4%E6%9B%BF%E4%BD%8D%E4%BA%8E%E6%97%B6%E9%97%B4%E8%BD%B4%E4%B8%A4%E4%BE%A7\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>文字交替位于时间轴两侧</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"timeline\",\n      \"mode\": \"alternate\",\n      \"items\": [\n        {\n          \"time\": \"2019-02-07\",\n          \"title\": \"节点数据\",\n          \"detail\": \"error\",\n        },\n        {\n          \"time\": \"2019-02-08\",\n          \"title\": \"节点数据\",\n          \"detail\": \"success\",\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E6%96%87%E5%AD%97%E4%BD%8D%E4%BA%8E%E6%97%B6%E9%97%B4%E8%BD%B4%E5%8F%B3%E4%BE%A7\" href=\"#%E6%96%87%E5%AD%97%E4%BD%8D%E4%BA%8E%E6%97%B6%E9%97%B4%E8%BD%B4%E5%8F%B3%E4%BE%A7\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>文字位于时间轴右侧</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"timeline\",\n      \"mode\": \"right\",\n      \"items\": [\n        {\n          \"time\": \"2019-02-07\",\n          \"title\": \"节点数据\",\n          \"detail\": \"error\",\n        },\n        {\n          \"time\": \"2019-02-08\",\n          \"title\": \"节点数据\",\n          \"detail\": \"success\",\n        }\n      ]\n    },\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%BF%9C%E7%A8%8B%E6%95%B0%E6%8D%AE\" href=\"#%E8%BF%9C%E7%A8%8B%E6%95%B0%E6%8D%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>远程数据</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"timeline\",\n      \"source\": {\n        \"method\": \"get\",\n        \"url\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/timeline/timelineItems\"\n      }\n\n\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>&quot;source&quot;: &quot;/api/mock2/timeline/timelineItems&quot;,</p>\n<p>远程拉取接口时，返回的数据结构除了需要满足 amis 接口要求的基本数据结构 以外，必须用&quot;items&quot;作为时间轴数据的 key 值，如下：</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"status\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"msg\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"data\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"items\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"time\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-07\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"数据开发\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"detail\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-07detail\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"color\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"#ffb200\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"icon\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"close\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span><span class=\"token property\">\"time\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-08\"</span><span class=\"token punctuation\">,</span> <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"管理中心\"</span><span class=\"token punctuation\">,</span> <span class=\"token property\">\"detail\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-08detail\"</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"time\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-09\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"SQL语句\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"detail\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-09detail\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"color\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"warning\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"time\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-10\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"一键部署\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"detail\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-10detail\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"icon\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"compress-alt\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span><span class=\"token property\">\"time\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-10\"</span><span class=\"token punctuation\">,</span> <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"一键部署\"</span><span class=\"token punctuation\">,</span> <span class=\"token property\">\"detail\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-11detail\"</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"time\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-10\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"一键部署\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"detail\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-12detail\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"icon\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"close\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span><span class=\"token property\">\"time\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-10\"</span><span class=\"token punctuation\">,</span> <span class=\"token property\">\"title\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"一键部署\"</span><span class=\"token punctuation\">,</span> <span class=\"token property\">\"detail\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"2019-02-13detail\"</span><span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>| 属性名    | 类型                                  | 默认值     | 说明                                                        |\n| --------- | ------------------------------------- | ---------- | ----------------------------------------------------------- | --- |\n| type      | <code>string</code>                              |            | <code>&quot;timeline&quot;</code> 指定为 时间轴 渲染器                           |\n| items     | Array&lt;<a href=\"#timeline-item\">timelineItem</a>&gt; | []         | 配置节点数据                                                |\n| source    | <a href=\"../../../docs/types/api\">API</a>        |            | 数据源，可通过数据映射获取当前数据域变量、或者配置 API 对象 |\n| mode      | <code>left</code> | <code>right</code> | <code>alternate</code>      | <code>right</code>    | 指定文字相对于时间轴的位置，仅 direction=vertical 时支持    |\n| direction | <code>vertical</code> | <code>horizontal</code>            | <code>vertical</code> | 时间轴方向                                                  |     |\n| reverse   | <code>boolean</code>                             | <code>false</code>    | 根据时间倒序显示                                            |</p>\n<h3><a class=\"anchor\" name=\"timeline-item\" href=\"#timeline-item\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>timeline.item</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>time</td>\n<td><code>string </code></td>\n<td></td>\n<td>节点时间</td>\n</tr>\n<tr>\n<td>title</td>\n<td><code>string | [SchemaNode](../../docs/types/schemanode)</code></td>\n<td></td>\n<td>节点标题</td>\n</tr>\n<tr>\n<td>detail</td>\n<td><code>string</code></td>\n<td></td>\n<td>节点详细描述（折叠）</td>\n</tr>\n<tr>\n<td>detailCollapsedText</td>\n<td><code>string</code></td>\n<td><code>展开</code></td>\n<td>详细内容折叠时按钮文案</td>\n</tr>\n<tr>\n<td>detailExpandedText</td>\n<td><code>string</code></td>\n<td><code>折叠</code></td>\n<td>详细内容展开时按钮文案</td>\n</tr>\n<tr>\n<td>color</td>\n<td><code>string | level样式（info、success、warning、danger）</code></td>\n<td><code>#DADBDD</code></td>\n<td>时间轴节点颜色</td>\n</tr>\n<tr>\n<td>icon</td>\n<td><code>string</code></td>\n<td></td>\n<td>icon 名，支持 fontawesome v4 或使用 url（优先级高于 color）</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "时间轴节点颜色设置",
          "fragment": "%E6%97%B6%E9%97%B4%E8%BD%B4%E8%8A%82%E7%82%B9%E9%A2%9C%E8%89%B2%E8%AE%BE%E7%BD%AE",
          "fullPath": "#%E6%97%B6%E9%97%B4%E8%BD%B4%E8%8A%82%E7%82%B9%E9%A2%9C%E8%89%B2%E8%AE%BE%E7%BD%AE",
          "level": 2
        },
        {
          "label": "时间轴节点图标设置",
          "fragment": "%E6%97%B6%E9%97%B4%E8%BD%B4%E8%8A%82%E7%82%B9%E5%9B%BE%E6%A0%87%E8%AE%BE%E7%BD%AE",
          "fullPath": "#%E6%97%B6%E9%97%B4%E8%BD%B4%E8%8A%82%E7%82%B9%E5%9B%BE%E6%A0%87%E8%AE%BE%E7%BD%AE",
          "level": 2
        },
        {
          "label": "节点标题自定义",
          "fragment": "%E8%8A%82%E7%82%B9%E6%A0%87%E9%A2%98%E8%87%AA%E5%AE%9A%E4%B9%89",
          "fullPath": "#%E8%8A%82%E7%82%B9%E6%A0%87%E9%A2%98%E8%87%AA%E5%AE%9A%E4%B9%89",
          "level": 2
        },
        {
          "label": "设置节点数据倒序",
          "fragment": "%E8%AE%BE%E7%BD%AE%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AE%E5%80%92%E5%BA%8F",
          "fullPath": "#%E8%AE%BE%E7%BD%AE%E8%8A%82%E7%82%B9%E6%95%B0%E6%8D%AE%E5%80%92%E5%BA%8F",
          "level": 2
        },
        {
          "label": "设置时间轴方向",
          "fragment": "%E8%AE%BE%E7%BD%AE%E6%97%B6%E9%97%B4%E8%BD%B4%E6%96%B9%E5%90%91",
          "fullPath": "#%E8%AE%BE%E7%BD%AE%E6%97%B6%E9%97%B4%E8%BD%B4%E6%96%B9%E5%90%91",
          "level": 2
        },
        {
          "label": "设置文字相对时间轴方向（时间轴横向时不支持）",
          "fragment": "%E8%AE%BE%E7%BD%AE%E6%96%87%E5%AD%97%E7%9B%B8%E5%AF%B9%E6%97%B6%E9%97%B4%E8%BD%B4%E6%96%B9%E5%90%91-%E6%97%B6%E9%97%B4%E8%BD%B4%E6%A8%AA%E5%90%91%E6%97%B6%E4%B8%8D%E6%94%AF%E6%8C%81-",
          "fullPath": "#%E8%AE%BE%E7%BD%AE%E6%96%87%E5%AD%97%E7%9B%B8%E5%AF%B9%E6%97%B6%E9%97%B4%E8%BD%B4%E6%96%B9%E5%90%91-%E6%97%B6%E9%97%B4%E8%BD%B4%E6%A8%AA%E5%90%91%E6%97%B6%E4%B8%8D%E6%94%AF%E6%8C%81-",
          "level": 2,
          "children": [
            {
              "label": "文字位于时间轴左侧",
              "fragment": "%E6%96%87%E5%AD%97%E4%BD%8D%E4%BA%8E%E6%97%B6%E9%97%B4%E8%BD%B4%E5%B7%A6%E4%BE%A7",
              "fullPath": "#%E6%96%87%E5%AD%97%E4%BD%8D%E4%BA%8E%E6%97%B6%E9%97%B4%E8%BD%B4%E5%B7%A6%E4%BE%A7",
              "level": 3
            },
            {
              "label": "文字交替位于时间轴两侧",
              "fragment": "%E6%96%87%E5%AD%97%E4%BA%A4%E6%9B%BF%E4%BD%8D%E4%BA%8E%E6%97%B6%E9%97%B4%E8%BD%B4%E4%B8%A4%E4%BE%A7",
              "fullPath": "#%E6%96%87%E5%AD%97%E4%BA%A4%E6%9B%BF%E4%BD%8D%E4%BA%8E%E6%97%B6%E9%97%B4%E8%BD%B4%E4%B8%A4%E4%BE%A7",
              "level": 3
            },
            {
              "label": "文字位于时间轴右侧",
              "fragment": "%E6%96%87%E5%AD%97%E4%BD%8D%E4%BA%8E%E6%97%B6%E9%97%B4%E8%BD%B4%E5%8F%B3%E4%BE%A7",
              "fullPath": "#%E6%96%87%E5%AD%97%E4%BD%8D%E4%BA%8E%E6%97%B6%E9%97%B4%E8%BD%B4%E5%8F%B3%E4%BE%A7",
              "level": 3
            }
          ]
        },
        {
          "label": "远程数据",
          "fragment": "%E8%BF%9C%E7%A8%8B%E6%95%B0%E6%8D%AE",
          "fullPath": "#%E8%BF%9C%E7%A8%8B%E6%95%B0%E6%8D%AE",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "timeline.item",
              "fragment": "timeline-item",
              "fullPath": "#timeline-item",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});