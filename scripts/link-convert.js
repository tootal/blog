'use strict';

// 导入hexo输出工具类
const logger = require('hexo-log')();
const path = require('path');
const fs = require('hexo-fs');

// 将Markdown的相对链接转换为绝对链接

hexo.extend.filter.register('before_post_render', function (data) {
    data.content = data.content.replace(/\]\(\.\.\/(.*?)\)/g, function(full, c) {
        let res = `](/${c})`;
        // console.log(`replace ${full} with ${res}`);
        return res;
    });
    return data;
});