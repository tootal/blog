'use strict';

/**
 * {% menulist %}
 * Any content.
 * {% endmenulist %}
 */

module.exports = ctx => function (args, content) {
    content = ctx.render.renderSync({ text: content.trim(), engine: 'markdown' });
    content = content.trim().replace(/^<p>(.*)<\/p>$/, (o, s) => s);
    return `<div class="menu-list is-size-6">
        ${content}
    </div>`;
};