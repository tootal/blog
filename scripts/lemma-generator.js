'use strict';

// 生成定理
const logger = require('hexo-log')();
const fs = require('hexo-fs');

function generate_lemma(data) {
    let all_lemma = [];
    const rTHEO = /\{%\s*lemma (.*?)\s*%\}([\w\W\s\S]*?)\{% endlemma %\}/g;
    data.content = data.content.replace(rTHEO, function(full, lem, content) {
        let lemma = lem.trim();
        if (lemma === '') {
            logger.error(`Empty lemma id: ${cites[0]}`);
            process.exit(-1);
        }
        if (lemma in all_lemma) {
            logger.error(`Duplicated lemma id: ${lemma}`);
            process.exit(-1);
        }
        all_lemma.push(lemma);
        return `<div class="lemma" id="lem:${lemma}">`
        + `LEMMA ${all_lemma.length}. ${content}</div>`;
    });
    const rTHM = /\{% lem (.*?) %\}/g;
    data.content = data.content.replace(rTHM, function(full, lem) {
        let lem_id = all_lemma.indexOf(lem.trim());
        if (lem_id === -1) {
            logger.error('Can not found lemma ', lem.trim());
            process.exit(-1);
        }
        return `<a class="lemma" href="#lem:${all_lemma[lem_id]}">Theorem ${lem_id+1}</a>`;
    });
}

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.tagplugins && (data.tagplugins.lemma || data.tagplugins.default === 'lemma'
        || data.tagplugins.default.indexOf('lemma') !== -1)) {
        generate_lemma(data);
    }
    return data;
});