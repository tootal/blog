'use strict';

module.exports = ctx => function(args) {
  const cites = args.join(' ').split(',');
  let s = '';
  for (let cite of cites) {
    let c = cite.trim();
    s += `<span id="cite-${c}">[0]</span>`
  }
  return s;
};