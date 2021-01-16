'use strict';

module.exports = ctx => function(args, content) {
  content = ctx.render.renderSync({ text: content, engine: 'markdown' });
  return `<div class="proof-container">
            <div class="proof-content">${content}</div>
            <div class="proof-qed"><div class="proof-qed-icon"></div></div>
          </div>`;
};