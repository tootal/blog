'use strict';

/**
 * {% msg [class] [no-icon] %}
 * Any content.
 * {% endmsg %}
 *
 * [class]   : Optional parameter.
 *             Supported values: dark | primary | link | info | success | warning | danger.
 * [no-icon] : Optional parameter.
 *             Disable icon in note. eg: fas-question
 *
 * All parameters are optional.
 */

module.exports = ctx => function (args, content) {
    content = ctx.render.renderSync({ text: content.trim(), engine: 'markdown' });
    content = content.trim().replace(/^<p>(.*)<\/p>$/, (o, s) => s);
    let [cls = 'dark', icon = ''] = args;
    icon = icon.trim();
    if (icon.length > 0) {
        if (icon.startsWith('fa')) { // fontawesome icon
            let p = icon.indexOf('-');
            if (p !== -1) {
                icon = `<i class="${icon.substring(0, p)} 
                        fa-${icon.substring(p+1, icon.length)} mr-2"></i>`;
            } else {
                icon = `<i class="${icon} mr-2"></i>`;
            }
        } else {
            icon = `<i class="${icon} mr-2"></i>`;
        }
    }
    return `<article class="message message-immersive is-${cls}">
<div class="message-body">
${icon}${content}
</div>
</article>`;
};