'use strict';

// same2特殊标签，这些标签无法单独处理
// 例如theorem等标签需要进行统一编号
// 原样返回，后续使用过滤器统一处理页面内所有标签
module.exports = function(ctx) {
  return function(args, content) {
    return `{% ${this.tagname} ${args.join(' ')} %}${content}{% end${this.tagname} %}`;
  }
};
module.exports.names = ['figure', 'theorem', 'algorithm', 'lemma', 'table'];