'use strict';

// 生成算法
// 用法：
// {% algorithm %}
// algorithm head (option)
// <!-- begin -->
// algorithm body
// <!-- end -->
// algorithm foot (option)
// {% endalgorithm %}

// algorithm body会自动处理换行与空格

const logger = require('hexo-log')();
const fs = require('hexo-fs');

function count_lead_space(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') return i;
    }
    return s.length;
}

function generate_algorithm(data) {
    let algo_id = 0;
    const rTHEO = /\{% algorithm %\}([\w\W\s\S]*?)\{% endalgorithm %\}/g;
    data.content = data.content.replace(rTHEO, function(full, content) {
        algo_id++;
        const rBODY = /([\w\W\s\S]*?)<!-- begin -->([\w\W\s\S]*?)<!-- end -->([\w\W\s\S]*)/g;
        content = content.replace(rBODY, function(full, head, body, foot) {
            let s = `<table class="algorithm" id="algo:${algo_id}">`;
            head = head.trim();
            body = body.trim();
            foot = foot.trim();
            if (head !== '') {
                head = hexo.render.renderSync({ text: head, engine: 'markdown' });
                s += `<thead><tr><th colspan="2">${head}</th></tr></thead>`;
            }
            // 按行分隔body
            body = body.split('\n');
            // body = hexo.render.renderSync({ text: body, engine: 'markdown' });
            let code = '';
            for (let i = 0; i < body.length; i++) {
                let indent = count_lead_space(body[i]);
                let line =  hexo.render.renderSync({ text: body[i].trim(), engine: 'markdown' });
                code += `<tr><td><span class="line">${i+1}</span></td>`
                + `<td style="padding-left: ${0.5*indent}em">${line}</td></tr>`;
            }
            s += `<tbody>${code}</tbody>`;
            if (foot !== '') {
                foot = hexo.render.renderSync({ text: foot, engine: 'markdown' });
                s += `<tfoot><tr><td colspan="2">${foot}</td></tr></tfoot>`;
            }
            s += '</table>';
            return `<div>${s}</div>`;
        });
        return content;
    });
}

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.tagplugins && (data.tagplugins.algorithm || data.tagplugins.default === 'algorithm'
        || data.tagplugins.default.indexOf('algorithm') !== -1)) {
        generate_algorithm(data);
    }
    return data;
});