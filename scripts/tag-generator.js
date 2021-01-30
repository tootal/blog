'use strict';

const logger = require('hexo-log')();
const fs = require('fs')
const path = require('path')

// 从同目录下的_vnote.json文件中生成tag
hexo.extend.filter.register('before_post_render', function (data) {
    if ([
        '404.md'
    ].indexOf(data.source) !== -1) return data;
    if (data.tag) {
        logger.warn('Please use _vnote.json file to record tag', data.source);
    } else {
        let vnote = JSON.parse(fs.readFileSync(path.resolve(data.full_source, '..', '_vnote.json')));
        let flag = false;
        for (let file of vnote["files"]) {
            if (file["name"] === path.basename(data.source)) {
                flag = true;
                data.tag = file["tags"];
                break;
            }
        }
        if (flag) {
            logger.info("Add tags", data.tag, "to", data.source, "from _vnote.json");
        } else {
            logger.error("Can not found file", data.source);
        }
    }
    return data;
});