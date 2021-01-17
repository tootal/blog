'use strict';

/*
生成表格
{% table %} 
剩余内容当作描述性文字
表格支持横向扩展
每个单元格右侧的竖线数表示它的colspan
例：

| A    | B    | C    |
| ---- | ---- | ---- |
| 1    |      2     ||
| 4    | 5    | 6    |

 */

const logger = require('hexo-log')();
const fs = require('hexo-fs');

// 分隔一行，去除首尾空串
function split_line(s) {
    let t = s.trim().split('|');
    return t.slice(1, t.length-1);
}
function warpatd(s, span, align) {
    let o = 'center';
    if (align === -1) o = 'left';
    if (align === 1) o = 'right';
    let sty = `style="text-align: ${o}"`;
    s = hexo.render.renderSync({ text: s.trim(), engine: 'markdown' });
    // 去除渲染后的最外层的<p>标签
    s = s.trim().replace(/^<p>(.*)<\/p>$/, function(full, content) {
        return content;
    });
    if (span === 1) return `<td ${sty}>${s}</td>`;
    else return `<td ${sty} colspan="${span}">${s}</td>`
}

// 将一行字符串用td包裹，span为true时尝试向右扩展空元素
function warp_td(line, span, aligns) {
    let list = split_line(line);
    let s = '', n = list.length;
    for (let i = 0; i < n; i++) {
        if (span) {
            let j = i + 1;
            while (j < n && list[j] === '') j++;
            if (j - i > 1) {
                s += warpatd(list[i], j-i, aligns[i]);
                i = j - 1;
            } else {
                s += warpatd(list[i], 1, aligns[i]);
            }
        } else {
            s += warpatd(list[i], 1, aligns[i]);
        }
    }
    return s;
}
function renderTable(s) {
    s = s.trim().split('\n');
    // 获取每列的对齐方式
    let aligns = [];
    for (let i of split_line(s[1])) {
        let d = 0, x = i.trim();
        if (i[0] === ':') d--;
        if (i[i.length-1] === ':') d++;
        aligns.push(d);
    }
    // 处理剩下的行
    let tbody = '';
    for (let i = 2; i < s.length; i++) {
        tbody += `<tr>${warp_td(s[i], true, aligns)}</tr>`;
    }
    return `<table>`
    + `<thead><tr>${warp_td(s[0], false, aligns)}</tr></thead>`
    + `<tbody>${tbody}</tbody>`
    + `</table>`;
}

function generate_table(data) {
    let all_tabs = [];
    const rTHEO = /\{% table (.*?) %\}([\w\W\s\S]*?)\{% endtable %\}/g;
    data.content = data.content.replace(rTHEO, function(full, tab_id, content) {
        all_tabs.push(tab_id);
        const rMDTAB = /(\|[\w\W\s\S]*?\|)\s*\n\n/g;
        let s = '';
        content = content.replace(rMDTAB, function(full, mdtab) {
            s += renderTable(mdtab);
            return '';
        });
        content = hexo.render.renderSync({ text: content, engine: 'markdown' });
        return `<div class="table-wrap" id="tab:${tab_id}">`
        + `<div class="table-container">${s}</div>`
        + `<div class="table-info">${content}</div>`
        + `</div>`;
    });
    const rTAB = /\{% tab (.*?) %\}/g;
    data.content = data.content.replace(rTAB, function(full, tab) {
        let tab_id = all_tabs.indexOf(tab);
        if (tab_id === -1) {
            logger.error('Can not found table ', fig.trim());
            process.exit(-1);
        }
        return `<a href="#tab:${all_tabs[tab_id]}" >Tab ${tab_id+1}</a>`;
    });
}

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.tagplugins && (data.tagplugins.table || data.tagplugins.default === 'table'
        || data.tagplugins.default.indexOf('table') !== -1)) {
        generate_table(data);
    }
    return data;
});