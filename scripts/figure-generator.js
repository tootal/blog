'use strict';

// 生成图片
// 暂时使用Justified Gallery
// {% figure %} 内的所有图片（markdown语法）会被放在一个gallery内
// 剩余内容当作描述性文字

const logger = require('hexo-log')();

function generate_figure(data) {
    let all_figures = [];
    const rTHEO = /\{%\s*figure\s*%\}([\w\W\s\S]*?)\{% endfigure %\}/g;
    data.content = data.content.replace(rTHEO, function(full, content) {
        const rMDPIC = /!\[(.*?)\]\((.*?)( "(.*?)")?\)/g;
        let figures = [];
        content = content.replace(rMDPIC, function(full, alt, path, title2, title) {
            const fig = { alt, path, title };
            figures.push(fig);
            all_figures.push(fig);
            return '';
        });
        let s = '';
        for (let i = 0; i < figures.length; i++) {
            const {alt, path, title} = figures[i];
            s += `<img src="${path}" title="${title}" alt="${title}" id="fig:${alt}" />`;
        }
        return `<div class="justified-gallery"> ${s} </div>
                <div class="figure-more"> ${content} </div>`;
    });
    const rFIG = /\{% fig (.*?) %\}/g;
    data.content = data.content.replace(rFIG, function(full, fig) {
        let fig_id = 0;
        while (fig_id < all_figures.length && all_figures[fig_id].alt != fig) fig_id++;
        if (fig_id === all_figures.lengtn) {
            logger.error('Can not found figure ', fig.trim());
            process.exit(-1);
        }
        const { alt, title } = all_figures[fig_id];
        return `<a class="figure" title="${title}" href="#fig:${alt}" >Figure ${fig_id+1}</a>`;
    });
}

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.tagplugins && (data.tagplugins.figure || data.tagplugins.default === 'figure'
        || data.tagplugins.default.indexOf('figure') !== -1)) {
        generate_figure(data);
    }
    return data;
});