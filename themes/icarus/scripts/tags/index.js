/* global hexo */

'use strict';

const fs = require('hexo-fs');
const path = require('path')

// auto load all tags
fs.readdirSync(__dirname)
  .filter((t) => t !== 'index.js' && t.endsWith('.js'))
  .map((t) => {
    const tag = path.basename(t, '.js')
    const func = require('./' + tag)(hexo);
    hexo.extend.tag.register(tag, func, func.length === 2);
  });
