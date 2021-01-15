'use strict';

// 生成参考文献
const fs = require('hexo-fs');
const { parse } = require('path');
const path = require('path');
const logger = require('hexo-log')();

function find_close_bracket(s, from, tips) {
    let c = 0;
    while (from < s.length && s[from] !== '{') from++;
    from++;
    while (from < s.length) {
        if (s[from] === '{') c++;
        else if (s[from] === '}') c--;
        if (c === -1 && s[from] === '}') return from;
        from++;
    }
    logger.error('Cite generator error: unexpected end when finding ' + tips);
    process.exit(-1);
}

function parse_bibtex(s, bibtype, cite) {
    let res = {
        Type: bibtype,
        Key: cite
    };
    s = s.replace('\n', ' ');
    let first = true;
    let c = 0;
    let i = 0;
    while (i < s.length && s[i] !== ',') i++;
    for (i++; i < s.length; i++) {
        let p = i;
        while (i < s.length && s[i] !== '=') i++;
        let l = s.substring(p, i).trim();
        i++;
        p = i;
        while (i < s.length && c === 0 && s[i] !== ',') {
            if (s[i] === '{') c++;
            else if (s[i] === '}') c--;
            i++;
        }
        let r = s.substring(p, i).trim();
        if (r[0] === '{' && r[r.length - 1] === '}')
            r = r.slice(1, r.length - 1);
        res[l] = r;
    }
    return res;;
}

function generate_cites(data) {
    const source_path = data.source;
    let all_cites = new Set();
    const rCITE = /{% cite (.*?) %}/g;
    for (let cites of data.content.matchAll(rCITE)) {
        for (let cite of cites[1].split(',')) {
            if (!cite.trim().startsWith('@'))
                all_cites.add(cite.trim());
        }
    }
    all_cites = Array.from(all_cites);
    all_cites.sort();
    console.log(all_cites);
    let bib = fs.readFileSync(path.resolve('source', path.dirname(source_path), data.cite));
    let all_cites_res = []
    for (let cite of all_cites) {
        let rcite = cite.replace('+', '\\+');
        const rBIB = new RegExp(`@(.*?){\\s*?${rcite}\\s*?,`, "m")
        console.log(cite);
        const match = bib.match(rBIB);
        const begin = match.index;
        const end = find_close_bracket(bib, begin, cite);
        let bibtex = bib.substring(begin, end + 1);
        all_cites_res.push(parse_bibtex(bibtex, match[1], cite))
    }
    data.content = data.content.replace(rCITE, function(full, cites) {
        if (cites.trim().startsWith('@')) {
            return '';
        }
        let s = '';
        for (let cite of cites[1].split(',')) {
            s += `<a class="cite-label">[${all_cites.indexOf(cites)}]</a>`
        }
        return s;
    });
}

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.cite) {
        generate_cites(data);
    }
    return data;
});