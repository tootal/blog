'use strict';

// 引用图片
// 用法：{% fig fid_id %}
// 渲染结果：图fig_id（同时生成指向该图的超链接）
// 可点击跳转到图片位置
module.exports = ctx => function(args) {
  const fig = args.join('-');
  return `<a href="#fig:${fig}">Fig. ${fig}</a>`;
};