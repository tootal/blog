'use strict';

const fs = require('hexo-fs');

// 使用html标签包裹公式
function math_wrap(s) {
    var n = s.length;
    var t = s[0];
    var mathFlag = false;
    var lineMath = false;
    let codeFlag = false;
    let lineCodeFlag = false;
    for (var i = 1; i < n; i++) {
        if (s[i] === '`' // 行内代码
            && (i - 1 >= 0 && s[i - 1] !== '`')
            && (i + 1 < n && s[i + 1] !== '`')) {
                lineCodeFlag = !lineCodeFlag;
            }
        if (s[i] === '`' // 多行代码
            && (i - 1 >= 0 && s[i - 1] === '`')
            && (i + 1 < n && s[i + 1] === '`')) {
                codeFlag = !codeFlag;
            }
        if (codeFlag || lineCodeFlag) {
            t += s[i];
            continue;
        }
        if (s[i] === '$'  // 单行公式
            && (i - 1 >= 0 && s[i - 1] !== '$')
            && (i + 1 < n && s[i + 1] !== '$')) {
                mathFlag = !mathFlag;
                lineMath = !lineMath;
                t += mathFlag ? '<span role="math">$' : '$</span>';
            }
        else if (s[i] === '$'  // 多行公式
            && (i + 1 < n && s[i + 1] === '$')) {
                mathFlag = !mathFlag;
                t += mathFlag ? '<div role="math">$$' : '$$</div>';
                i++;
            }
        else {
            // 转义行内公式的\（后面跟的必须是非字母）
            // (注意渲染tag内的数学公式！默认是不渲染的）
            if (lineMath && s[i] === '\\' && i + 1 < n && !/[a-zA-Z]/.test(s[i+1])) {
                t += '\\'; // 额外加一个\
            }
            // 转义\{
            t += s[i];
        }
    }
    return t;
}

hexo.extend.filter.register('before_post_render', function (data) {
    data.content = math_wrap(data.content);
    return data;
}, 9);
// 确保math_wrap在其他过滤器前执行