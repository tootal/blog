'use strict';

// 导入hexo输出工具类
const logger = require('hexo-log')();
const webp = require('webp-converter');
const path = require('path');
const fs = require('hexo-fs');

// 使用html标签包裹公式
function math_wrap(s) {
    var n = s.length;
    var t = s[0];
    var mathFlag = false;
    var lineMath = false;
    for (var i = 1; i < n; i++) {
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
            // 转义\\ (仅转义行内公式)
            if (lineMath && s[i] === '\\' && i + 1 < n && s[i+1] === '\\') {
                t += '\\\\';
            }
            t += s[i];
        }
    }
    return t;
}

hexo.extend.filter.register('before_post_render', function (data) {
    data.content = math_wrap(data.content);
    return data;
});