'use strict';

// 消除单文件的markdown换行
function remove_break(s) {
    var n = s.length;
    var t = '';
    for (var i = 0; i < n; i++) {
        if (s[i] === '\n'
            && (i - 1 >= 0 && s[i-1] !== '\n')
            && (i + 2 < n && s[i+1] !== '\n')
            && (i - 2 >= 0 && !(s[i-1] === ' ' && s[i-2] === ' '))) t += ' ';
        else
            t += s[i];
    }
    return t;
}

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.markdown && data.markdown.render && !data.markdown.render.breaks) {
        data.content = remove_break(data.content);
    }
    return data;
});