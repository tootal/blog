const path = require('path');
const { parse, stringify } = require('hexo-front-matter');
const fs = require('hexo-fs');
const logger = require('hexo-log')()

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

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
