'use strict';

const logger = require('hexo-log')();
const fs = require('fs')
const path = require('path')

function checkExist(name, suffix) {
    var pwd = path.resolve('source', '_posts', 'assets');
    var coverPath = path.resolve(pwd, name + '.cover.' + suffix);
    return fs.existsSync(coverPath);
}

hexo.extend.filter.register('before_post_render', function (data) {
    // 未指定cover，则检查文件夹下是否存在cover图片文件
    // 若存在则添加上cover
    if (data.cover === undefined || data.cover === null) {
        for (var s of ['webp', 'png', 'jpg']) {
            if (checkExist(String(data.urlname), s)) {
                data.cover = '/posts/assets/' + data.urlname + '.cover.' + s;
                break;
            }
        }
    }
    // 未指定thumbnail，若存在cover则自动将其作为thumbnail
    if (data.thumbnail === undefined || data.thumbnail === null) {
        data.thumbnail = data.cover;
    }
    return data;
});