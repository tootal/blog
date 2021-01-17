'use strict';

// 生成定理
const logger = require('hexo-log')();
const fs = require('hexo-fs');

function generate_theorem(data) {
    let all_theorem = [];
    const rTHEO = /\{%\s*theorem (.*?)\s*%\}([\w\W\s\S]*?)\{% endtheorem %\}/g;
    data.content = data.content.replace(rTHEO, function(full, thm, content) {
        let theorem = thm.trim();
        if (theorem === '') {
            logger.error(`Empty theorem id: ${cites[0]}`);
            process.exit(-1);
        }
        if (theorem in all_theorem) {
            logger.error(`Duplicated theorem id: ${theorem}`);
            process.exit(-1);
        }
        all_theorem.push(theorem);
        return `<div class="theorem" id="thm:${theorem}">`
        + `THEOREM ${all_theorem.length}. ${content}</div>`;
    });
    const rTHM = /\{% thm (.*?) %\}/g;
    data.content = data.content.replace(rTHM, function(full, thm) {
        let thm_id = all_theorem.indexOf(thm.trim());
        if (thm_id === -1) {
            logger.error('Can not found theorem ', thm.trim());
            process.exit(-1);
        }
        return `<a class="theorem" href="#thm:${all_theorem[thm_id]}">Theorem ${thm_id+1}</a>`;
    });
}

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.tagplugins && (data.tagplugins.theorem || data.tagplugins.default === 'theorem'
        || data.tagplugins.default.indexOf('theorem') !== -1)) {
        generate_theorem(data);
    }
    return data;
});