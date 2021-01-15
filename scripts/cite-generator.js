'use strict';

// 生成参考文献
const fs = require('hexo-fs');
const path = require('path');

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.cite) {
        fs.writeFileSync(path.join(__dirname, 'test.md'), data.content);
    }
    return data;
});