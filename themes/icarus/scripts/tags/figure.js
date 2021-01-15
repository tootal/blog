'use strict';

module.exports = ctx => function(args) {
  const fig = args.join('-');
  return `<a href="#${fig}">Fig. ${fig}</a>`;
};