'use strict';

// 绘图、绘子图
// 
module.exports = ctx => function(args, content) {
  const fig_id = args.join('-');
  content = ctx.render.renderSync({ text: content, engine: 'markdown' });
  return `<div id="fig:${fig_id.trim()}"></div>
          <div class="figure">${content}</div>`;
}
module.exports.names = ['figure', 'subfigure'];