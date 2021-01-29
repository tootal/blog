/**
 * tabs.js | https://theme-next.js.org/docs/tag-plugins/tabs
 */

'use strict';

module.exports = ctx => function (args, content) {
    const selectBlock = /<!--\s*option (.*?)\s*-->\n([\w\W\s\S]*?)<!--\s*endoption\s*-->/g;

    args = args.join(' ').split(',');
    const selectName = args[0].trim();
    const selectActive = Number(args[1]) || 0;

    let match;
    let selectId = 0;
    let selectNav = '';
    let selectContent = '';

    if (!selectName) ctx.log.warn('Select block must have unique name!');

    while ((match = selectBlock.exec(content)) !== null) {
        let caption = match[1].trim();
        let postContent = match[2];

        postContent = ctx.render.renderSync({ text: postContent, engine: 'markdown' }).trim();

        selectId++;
        const isFirst = (selectActive > 0 && selectActive === selectId) || (selectActive === 0 && selectId === 1);
        const isSelected = isFirst ? 'selected' : '';
        const isHidden = isFirst ? '' : 'is-hidden';
        selectNav += `<option ${isSelected} data-id="${selectName}-${caption}">
                        ${caption}
                    </option>`;
        selectContent += `<div class="select-content ${isHidden}" id="${selectName}-${caption}">
                            ${postContent}
                           </div>`
    }
    selectNav = `<div class="control">
                    <div class="select">
                        <select>
                            ${selectNav}
                        </select>
                    </div>
                </div>`;
    selectContent = `<div class="selects-content">
                        ${selectContent}
                     </div>`;
    return selectNav + selectContent;
};