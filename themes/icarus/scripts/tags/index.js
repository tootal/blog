/* global hexo */

'use strict';

const fs = require('hexo-fs');
const path = require('path')

// auto load all tags
fs.readdirSync(__dirname)
  .filter((t) => t !== 'index.js' && t.endsWith('.js'))
  .map((t) => {
    const tagname = path.basename(t, '.js');
    const tag = require('./' + tagname);
    const tagnames = tag.names || [tagname];
    const func = tag(hexo);
    for (let name of tagnames) {
      func.tagname = name;
      hexo.extend.tag.register(name, func, func.length === 2);
    }
  });
