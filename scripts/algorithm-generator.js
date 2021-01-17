'use strict';

// 生成算法及步骤
// 算法用法：
// {% algorithm %}
// algorithm head (option)
// <!-- begin -->
// algorithm body
// <!-- end -->
// algorithm foot (option)
// {% endalgorithm %}

// algorithm body会自动处理换行与空格

// 步骤用法
// {% step step_id %}
// 在指定步骤处使用(算法内)
// {% label step:step_id %}

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
    let all_steps = [];
    const rTHEO = /\{% algorithm %\}([\w\W\s\S]*?)\{% endalgorithm %\}/g;
    data.content = data.content.replace(rTHEO, function(full, content) {
        algo_id++;
        // 处理算法
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
                let line = body[i];
                let indent = count_lead_space(line);
                line = line.trim();
                // 处理步骤
                const rSTEP = /{% label step:(.*?) %}/g;
                let this_step_id = null; // 将该步的标号定位到行号位置
                line = line.replace(rSTEP, function(full, step_id) {
                    all_steps.push({id: step_id, line: i+1});
                    if (this_step_id !== null) {
                        logger.error(`Multi step id in line ${i+1} at algorithm ${algo_id}`);
                        process.exit(-1);
                    }
                    this_step_id = step_id;
                    return '';
                });
                line =  hexo.render.renderSync({ text: line, engine: 'markdown' });
                let lineid = this_step_id ? `id="step:${this_step_id}"` : '';
                code += `<tr><td><span ${lineid} class="line">${i+1}</span></td>`
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
    const rSTEP = /\{% step (.*?) %\}/g;
    data.content = data.content.replace(rSTEP, function(full, step_id) {
        let i = 0; 
        while (i < all_steps.length && all_steps[i].id != step_id) i++;
        if (i === all_steps.length) {
            logger.error('Can not find step id: ', step_id);
            process.exit(-1);
        }
        return `<a href="#step:${step_id}">Step ${all_steps[i].line}</a>`;
    });
}

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.tagplugins && (data.tagplugins.algorithm || data.tagplugins.default === 'algorithm'
        || data.tagplugins.default.indexOf('algorithm') !== -1)) {
        generate_algorithm(data);
    }
    return data;
});