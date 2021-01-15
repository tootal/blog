'use strict';

// 原样返回，使用过滤器统一处理页面内所有引用
module.exports = ctx => function(args) {
  return `{% cite ${args.join(' ')} %}`
};