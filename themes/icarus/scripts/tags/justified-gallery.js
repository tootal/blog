'use strict';

// 画廊插件 Justified Gallery

module.exports = ctx => function(args, content) {
  content = ctx.render.renderSync({ text: content, engine: 'markdown' });
  return `<div class="justified-gallery"> ${content} </div>`;
};