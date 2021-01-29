'use strict';

const logger = require('hexo-log')();

module.exports = ctx => function (args, content) {
    const rLink = /\[(.*?)\]\((.*?)\)/g;
    let postContent = '', match;
    while ((match = rLink.exec(content)) !== null) {
        let [caption = '', clas = ''] = match[1].split('@');
        let href = match[2];
        caption = `<span>${caption}</span>`;
        clas = clas.split(',')
        let clstr = [], icon = '';
        for (let c of clas) {
            if (c.startsWith('fa')) { // fontawesome icon
                let p;
                if ((p = c.indexOf('-')) !== -1) {
                    icon = `<i class="${c.substring(0, p)} 
                            fa-${c.substring(p+1, c.length)} mr-2"></i>`;
                } else {
                    clstr.push(c);
                }
            } else {
                clstr.push(c);
            }
        }
        if (clstr.length > 0) clstr = `class="${clstr.join(' ')}"`;
        else clstr = "";
        postContent += `<a ${clstr} href="${href}">${icon + caption}</a>`;
    }
    return `<p class="buttons ${args}"> ${postContent} </p>`;
};