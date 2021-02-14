/**
 * tabs.js | https://theme-next.js.org/docs/tag-plugins/tabs
 */

'use strict';

module.exports = ctx => function (args, content) {
    const tabBlock = /<!--\s*tab (.*?)\s*-->\n([\w\W\s\S]*?)<!--\s*endtab\s*-->/g;

    args = args.join(' ').split(',');
    const tabName = args[0];
    const tabActive = Number(args[1]) || 0;

    let match;
    let tabId = 0;
    let tabNav = '';
    let tabContent = '';

    if (!tabName) ctx.log.warn('Tabs block must have unique name!');

    while ((match = tabBlock.exec(content)) !== null) {
        let [caption = '', icon = ''] = match[1].split('@');
        let postContent = match[2];

        postContent = ctx.render.renderSync({ text: postContent, engine: 'markdown' }).trim();

        icon = icon.trim();
        if (icon.length > 0) {
            if (icon.startsWith('fa')) { // fontawesome icon
                let p;
                if ((p = icon.indexOf('-')) !== -1) {
                    icon = `<i class="${icon.substring(0, p)} 
                            fa-${icon.substring(p+1, icon.length)} mr-2"></i>`;
                } else {
                    icon = `<i class="${icon} mr-2"></i>`;
                }
            } else {
                icon = `<i class="${icon} mr-2"></i>`;
            }
        }

        caption = caption.trim();
        tabId++;
        const isFirst = (tabActive > 0 && tabActive === tabId) || (tabActive === 0 && tabId === 1);
        const isActive = isFirst ? 'is-active' : '';
        const isHidden = isFirst ? '' : 'is-hidden';
        tabNav += `<li class="tab ${isActive}">
                    <a href="#${tabName}-${caption}">
                        ${icon + caption}
                    </a>
                   </li>`;
        tabContent += `<div id="${tabName}-${caption}" class="tab-content ${isHidden}">${postContent}</div>`
    }
    tabNav = `<div class="tabs is-boxed my-3">
                <ul class="nav-tabs mx-0 my-0">${tabNav}</ul>
              </div>`;
    tabContent = `<div class="tabs-content">
                    ${tabContent}
                  </div>`;
    return tabNav + tabContent;
};