// 将所有 source/_posts 下的文件夹中的内容
// 迁移到 source/_posts/images

const fs = require('fs');
const path = require('path');
const root = 'source/_posts';

// 移动文件夹from及其子文件夹下的文件到to
function moveFilesTo(from, to) {
    for (let file of fs.readdirSync(from)) {
        let filePath = path.join(from, file);
        let toName = file;
        if (file.startsWith("cover.")) {
            toName = path.basename(from) + "." + file;
        }
        let toPath = path.join(to, toName);
        console.log('正在复制文件', filePath, toPath);
        fs.writeFileSync(toPath, fs.readFileSync(filePath));
    }
}

let entrys = fs.readdirSync(root);
for (let entry of entrys) {
    let entryPath = path.join(root, entry);
    let stat = fs.statSync(entryPath);
    if (stat.isDirectory()) { // 文件夹
        let files = fs.readdirSync(entryPath);
        if (files.length === 0) { // 空文件夹
            console.log('删除空文件夹', entryPath);
            fs.rmdirSync(entryPath);
        } else { // 非空文件夹
            moveFilesTo(entryPath, path.join('source', 'images'));
        }
    }
}