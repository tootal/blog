'use strict';

const logger = require('hexo-log')();
const fs = require('fs')
const path = require('path')

hexo.extend.filter.register('before_post_render', function (data) {
    // 未指定cover，则检查文章开头是否为图片
    // 若是则将其作为cover并在文章中删除。
    if (data.cover === undefined || data.cover === null) {
        let lines = data.content.trim().split('\n');
        // 图片路径必须是以 ../asset/ 开头的！
        let match = lines[0].match(/^!\[(.*?)\]\(..\/asset\/(.*?)\)$/);
        if (match) {
            data.cover = `/asset/${match[2]}`;
            logger.info('Add the front picture as cover: ', data.cover);
            data.content = lines.slice(1, lines.length).join('\n');
        }
    }
    // 未指定thumbnail，若存在cover则自动将其作为thumbnail
    if (data.cover && (data.thumbnail === undefined || data.thumbnail === null)) {
        data.thumbnail = data.cover;
        logger.info("Use cover as thumbnail", data.cover);
    }
    return data;
});