'use strict';

/**
 * {% msg [class] [no-icon] %}
 * Any content.
 * {% endmsg %}
 *
 * [class]   : Optional parameter.
 *             Supported values: dark | primary | link | info | success | warning | danger.
 * [no-icon] : Optional parameter.
 *             Disable icon in note.
 *
 * All parameters are optional.
 */

module.exports = ctx => function(args, content) {
  content = ctx.render.renderSync({ text: content.trim(), engine: 'markdown' });
  content = content.trim().replace(/^<p>(.*)<\/p>$/, (o, s) => s);
  let icon = args[1] ? `<i class="fas fa-${args[1]} mr-2"></i>` : '';
  return `<article class="message message-immersive is-${args[0] || 'dark'}">
<div class="message-body">
${icon}${content}
</div>
</article>`;
};