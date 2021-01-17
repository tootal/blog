'use strict';

// same特殊标签，这些标签无法单独处理
// 例如cite，fig等标签需要进行统一编号
// 原样返回，后续使用过滤器统一处理页面内所有标签
module.exports = function(ctx) {
  return function(args) {
    return `{% ${this.tagname} ${args.join(' ')} %}`
  }
};
module.exports.names = ['cite', 'fig', 'thm', 'lem', 'step', 'tab'];