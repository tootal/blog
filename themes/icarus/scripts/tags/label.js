'use strict';

module.exports = ctx => function(args) {
  const label_id = args.join('-');

  if (!label_id) ctx.log.warn('Label id must be defined!');

  return `<div id="${label_id.trim()}"></div>`;
};