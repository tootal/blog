const path = require('path');
const { parse, stringify } = require('hexo-front-matter');
const fs = require('hexo-fs');
const logger = require('hexo-log')()

let svnote = JSON.parse(fs.readFileSync('source/_vnote.json'));
for (let dir of svnote["sub_directories"]) {
    let vnote = JSON.parse(fs.readFileSync(`source/${dir["name"]}/_vnote.json`));
    for (let file of vnote["files"]) {
        let fm = parse(fs.readFileSync(`source/${dir["name"]}/${file["name"]}`));
        if (!fm.date || !fm.updated) {
            logger.info(`No date or updated in ${file["name"]}`);
            process.exit(-1);
        }
        logger.info(`Override ${file["name"]} created_time ${file["created_time"]} with ${fm.date.toISOString()}.`);
        file["created_time"] = fm.date.toISOString();
        logger.info(`Override ${file["name"]} modified_time ${file["modified_time"]} with ${fm.updated.toISOString()}.`);
        file["modified_time"] = fm.updated.toISOString();
    }
    fs.writeFileSync(`source/${dir["name"]}/_vnote.json`, JSON.stringify(vnote, null, 4));
}
