const path = require('path');
const { parse, stringify } = require('hexo-front-matter');
const fs = require('hexo-fs');
const logger = require('hexo-log')()

let svnote = JSON.parse(fs.readFileSync('source/_vnote.json'));
for (let dir of svnote["sub_directories"]) {
    let vnote = JSON.parse(fs.readFileSync(`source/${dir["name"]}/_vnote.json`));
    for (let file of vnote["files"]) {
        let tags = file["tags"];
        let fm = parse(fs.readFileSync(`source/${dir["name"]}/${file["name"]}`));
        if (!tags.equals(fm.tags)) {
            logger.info('Override front matter tag', fm.tags, "with", tags);
            fm.tags = tags;
            let content = `---\n${stringify(fm)}`;
            fs.writeFileSync(`source/${dir["name"]}/${file["name"]}`, content);
        }
    }
}
