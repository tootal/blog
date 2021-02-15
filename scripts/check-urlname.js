'use strict';

const logger = require('hexo-log')();

hexo.extend.filter.register('before_post_render', function (data) {
    // 检查urlname
    if (!data.source.endsWith('.md')) return data;
    if (data.layout === 'page') return data;
    if (data.urlname === undefined || (data.urlname === null)) {
        if (data.title) {
            logger.error('文章: 《' + data.title + '》没有设置urlname');
        } else {
            console.log(data.source);
        }
        process.exit(-1);
    }
    return data;
});