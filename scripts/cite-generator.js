'use strict';

// 生成参考文献
const fs = require('hexo-fs');
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

function replace_special(s) {
    let rSPEC = /\{\\(['"c])\{?([a-zA-Z])\}?\}/g;
    return s.replace(rSPEC, function(full, flag, letter) {
        if (flag === 'c') {
            return `&${letter}cedil;`;
        } else if (flag === '"') {
            return `&${letter}uml;`;
        } else if (flag === "'") {
            return `&${letter}acute;`;
        }
    });
}

function parse_bibtex(s, bibtype, cite) {
    let res = {
        type: bibtype,
        key: cite
    };
    s = s.replace(/\n/g, ' ');
    let c = 0;
    let i = 0;
    while (i < s.length && s[i] !== ',') i++;
    for (i++; i < s.length; i++) {
        let p = i;
        while (i < s.length && s[i] !== '=') i++;
        let l = s.substring(p, i).trim().toLowerCase();
        i++;
        p = i;
        while (i < s.length && c >= 0 && (c !== 0 || s[i] !== ',')) {
            if (s[i] === '{') c++;
            else if (s[i] === '}') c--;
            i++;
        }
        let r = s.substring(p, i).trim();
        if (r[0] === '{' && r[r.length - 1] === '}')
            r = r.slice(1, r.length - 1).trim();
        if (r[r.length - 1] === '}')
            r = r.slice(0, r.length - 1).trim();
        r = replace_special(r);
        res[l] = r;
        if (s[i] === '}') c--;
        if (c === -1 && s[i] === '}') break;
    }
    return res;;
}

function generate_cites(data) {
    const source_path = data.source;
    let all_cites = new Set();
    const rCITE = /{% cite (.*?) %}/g;
    let match;
    while ((match = rCITE.exec(data.content)) != null) {
        for (let cite of match[1].split(',')) {
            if (!cite.trim().startsWith('@'))
                all_cites.add(cite.trim());
        }
    }
    all_cites = Array.from(all_cites);
    all_cites.sort();
    let bib_path = path.resolve('source', 'asset', data.tagplugins.cite);
    let bib = fs.readFileSync(bib_path);
    let all_cites_res = []
    for (let cite of all_cites) {
        let rcite = cite.replace('+', '\\+');
        const rBIB = new RegExp(`@(.*?){\\s*?${rcite}\\s*?,`, "m")
        const match = bib.match(rBIB);
        const begin = match.index;
        const end = find_close_bracket(bib, begin, cite);
        let bibtex = bib.substring(begin, end + 1);
        all_cites_res.push(parse_bibtex(bibtex, match[1], cite))
    }
    // console.log(all_cites);
    data.content = data.content.replace(rCITE, function(full, cites) {
        if (cites.trim().startsWith('@')) {
            let s = '<ol class="cite-list">'
            for (let i = 0; i < all_cites.length; i++) {
                let t = all_cites_res[i];
                let si = '<li class="cite-item">';
                si += `<div class="cite-label" id="cite:${all_cites[i]}">[${i+1}]</div>`;
                si += '<div class="cite-content">';
                if (t.author) si += `<span class="cite-author">${t.author}. </span>`;
                if (t.year) si += `<span class="cite-year">${t.year}. </span>`;
                if (t.title) si += `<span class="cite-title">${t.title}. </span>`;
                if (t.journal) si += `<span class="cite-journal">${t.journal} </span>`;
                if (t.volume) si += `<span class="cite-volume">${t.volume} </span>`;
                if (t.timestamp) si += `<span class="cite-timestamp">(${t.timestamp}), </span>`;
                if (t.pages) si += `<span class="cite-pages">(${t.pages})</span>`;
                si += '</div>';
                si += '</li>'
                s += si;
            }
            s += '</ol>'
            return s;
        }
        let s = '<span class="cite-container">[';
        let first = true;
        let this_cites = cites.split(',').map(x => x.trim());
        this_cites.sort();
        for (let cite of this_cites) {
            if (first) first = false;
            else s += ',';
            let cite_id = all_cites.indexOf(cite.trim());
            if (cite_id === -1) {
                logger.error('Something wrong when finding cite ', cite.trim());
                process.exit(-1);
            }
            s += `<a href="#cite:${all_cites[cite_id]}" class="cite-label">${cite_id+1}</a>`
        }
        s += "]</span>";
        return s;
    });
}

hexo.extend.filter.register('before_post_render', function (data) {
    if (data.tagplugins && data.tagplugins.cite) {
        generate_cites(data);
    }
    return data;
});