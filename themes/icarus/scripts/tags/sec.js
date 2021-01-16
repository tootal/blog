'use strict';

module.exports = ctx => function(args) {
  const sec = args.join('-');
  return `<a href="#sec:${sec}">§${sec}</a>`;
};