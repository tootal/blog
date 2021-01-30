# 头头博客
[Github部署仓库](https://github.com/tootal/tootal.github.io)
[Gitee部署仓库](https://gitee.com/tootal/tootal)

## 初始化配置
```
hexo init blog
cd blog
git init
```

因为要对主题进行修改，所以采用git子模块的方式添加主题。

```
PS C:\Users\tootal\Documents\blog4> git submodule add https://github.com/tootal/hexo-theme-icarus themes/icarus
Cloning into 'C:/Users/tootal/Documents/blog4/themes/icarus'...
remote: Enumerating objects: 5793, done.
remote: Total 5793 (delta 0), reused 0 (delta 0), pack-reused 5793 
Receiving objects: 100% (5793/5793), 25.47 MiB | 29.00 KiB/s, done.
Resolving deltas: 100% (3242/3242), done.
warning: LF will be replaced by CRLF in .gitmodules.
The file will have its original line endings in your working directory
```

下载完成后修改主题为icarus，然后根据提示安装依赖。

```
PS C:\Users\tootal\Documents\blog4> hexo s    
INFO  Validating config
INFO  =======================================
 ██╗ ██████╗ █████╗ ██████╗ ██╗   ██╗███████╗
 ██║██╔════╝██╔══██╗██╔══██╗██║   ██║██╔════╝
 ██║██║     ███████║██████╔╝██║   ██║███████╗
 ██║██║     ██╔══██║██╔══██╗██║   ██║╚════██║
=============================================
INFO  === Checking package dependencies ===
ERROR Package bulma-stylus is not installed.
ERROR Package hexo-renderer-inferno is not installed.
ERROR Package hexo-component-inferno is not installed.
ERROR Package inferno is not installed.
ERROR Package inferno-create-element is not installed.
ERROR Please install the missing dependencies your Hexo site root directory:
ERROR npm install --save bulma-stylus@0.8.0 hexo-renderer-inferno@^0.1.3 hexo-component-inferno@^0.10.1 inferno@^7.3.3 inferno-create-element@^7.3.3
ERROR or:
ERROR yarn add bulma-stylus@0.8.0 hexo-renderer-inferno@^0.1.3 hexo-component-inferno@^0.10.1 inferno@^7.3.3 inferno-create-element@^7.3.3
PS C:\Users\tootal\Documents\blog4> npm install --save bulma-stylus@0.8.0 hexo-renderer-inferno@^0.1.3 hexo-component-inferno@^0.10.1 inferno@^7.3.3 inferno-create-element@^7.3.3

> inferno@7.4.6 postinstall C:\Users\tootal\Documents\blog4\node_modules\inferno-server\node_modules\inferno
> opencollective-postinstall

Thank you for using inferno!
If you rely on this package, please consider supporting our open collective:
> https://opencollective.com/inferno/donate


> inferno@7.3.3 postinstall C:\Users\tootal\Documents\blog4\node_modules\inferno     
> opencollective-postinstall

Thank you for using inferno!
If you rely on this package, please consider supporting our open collective:
> https://opencollective.com/inferno/donate

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ inferno-create-element@7.3.3
+ hexo-component-inferno@0.10.1
+ inferno@7.3.3
+ hexo-renderer-inferno@0.1.3
+ bulma-stylus@0.8.0
added 187 packages from 84 contributors and audited 377 packages in 69.011s

24 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

再次尝试运行服务器，成功。配置文件已经自动生成了。

```
PS C:\Users\tootal\Documents\blog4> hexo s
INFO  Validating config
Inferno is in development mode.
Inferno is in development mode.
INFO  =======================================
 ██╗ ██████╗ █████╗ ██████╗ ██╗   ██╗███████╗
 ██║██╔════╝██╔══██╗██╔══██╗██║   ██║██╔════╝
 ██║██║     ███████║██████╔╝██║   ██║███████╗
 ██║██║     ██╔══██║██╔══██╗██║   ██║╚════██║
 ██║╚██████╗██║  ██║██║  ██║╚██████╔╝███████║
 ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
=============================================
INFO  === Checking package dependencies ===
INFO  === Checking theme configurations ===
WARN  None of the following configuration files is found:
WARN  - C:\Users\tootal\Documents\blog4\_config.icarus.yml
WARN  - C:\Users\tootal\Documents\blog4\themes\icarus\_config.yml
INFO  Generating theme configuration file...
INFO  C:\Users\tootal\Documents\blog4\_config.icarus.yml created successfully.
INFO  To skip configuration generation, use "--icarus-dont-generate-config".
INFO  === Registering Hexo extensions ===
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```

## hexo配置
hexo的配置文件为[_config.yml](_config.yml)。

几个关键的配置点：

```
permalink: :year/:month/:day/:title/
```

这个影响所有文章的URL。

我采用的方法是手动配置每篇文章的url。

```
permalink: posts/:urlname/
```

然后是`skip_render`，这个选项可以跳过不需要被渲染的文件。

先使用注释：

```
skip_render:
  # - 'README.md'
  # - 'about/**'
  # - 'html/**'
  # - 'css/**'
  # - 'js/**'
  # - 'images/*.json'

```

可以使用[glob表达式](https://github.com/micromatch/micromatch#extended-globbing)进行匹配。


然后是`updated_option: 'date'`，这个最好改成`mtime`，否则容易混乱更新时间。

## icarus主题配置

首先就是网站logo，`logo: /img/logo.svg`。这个文件在哪里呢?
在[logo.svg](themes/icarus/source/img/logo.svg)，我决定不该这个配置。而是参照这个文件的大小自己制作一个logo。

这是一个svg文件，内容如下：

```svg

<svg
    xmlns="http://www.w3.org/2000/svg" version="1.1" width="949" height="256" viewbox="0 0 949 256">
    <path fill="#2366d1" d="M110.85125168440814 128L221.70250336881628 192L110.85125168440814 256L0 192Z"/>
    <path fill="#609dff" d="M110.85125168440814 64L221.70250336881628 128L110.85125168440814 192L0 128Z"/>
    <path fill="#a4c7ff" d="M110.85125168440814 0L221.70250336881628 64L110.85125168440814 128L0 64Z"/>
    <g transform="translate(300, 55.695), scale(0.7)" fill="#333">
        <path d="M 613.888 10.24 （省略部分）L 458.24 107.776 Z" vector-effect="non-scaling-stroke"/>
    </g>
</svg>
```

发现[菜鸟SVG在线编辑器](https://c.runoob.com/more/svgeditor/)挺好用的，可以直接导入图片。

啊，放弃了，感觉这样不太好。svg里面嵌入png。直接修改主题的代码就好了。

在logo旁边再加上网站名。

定位到文件[navbar.jsx](themes/icarus/layout/common/navbar.jsx)。

```jsx
let navbarLogo = '';
if (logo) {
    if (logo.text) {
        navbarLogo = logo.text;
    } else {
        navbarLogo = <img src={logoUrl} alt={siteTitle} height="28" />;
    }
} else {
    navbarLogo = siteTitle;
}
```

看这一段的逻辑发现是可以设置文字logo的，但是不能文字和图标同时设置。

将其改成支持同时设置文字的图片。

配置文件[_config.icarus.yml](_config.icarus.yml)改成：

```yml
# Path or URL to the website's logo
logo:
    text: 头头世界
    icon: /asset/logo.png
```

图标在前，文字在后。

算了，就使用文字logo吧。

完成评论系统，支持了twikoo。

## 内容测试

终于到了这一步了，准备把之前的几篇博客合并了。

顺便解决一下访问量显示的问题。

主要用busuanzi吧，twikoo用于备用方案吧。

我屈服了，使用asset folder来管理图片吧。

想想还是挺合理的，毕竟有些文章不需要附件的。

OK，开始博客迁移。

## 数学公式

这个是非常难搞了，利用脚本差不多解决了。

一个特别难受的就是Katex不支持[equation](https://github.com/KaTeX/KaTeX/issues/445)环境。

不过利用aligned也差不多了。


放弃子模块了。

## 七牛云操作

### 上传

```cmd
@echo off
hexo clean
hexo g
qshell qupload2 --overwrite --log-file upload.log --src-dir C:\Users\tootal\Documents\blog\public --bucket tootalblog --skip-fixed-strings .git --check-exists --check-size --rescan-local --skip-suffixes .vswp --thread-count 100
qshell cdnrefresh --dirs -i refresh_url.txt
```

### 删除所有文件

```cmd
qshell listbucket tootalblog -o tootalblog.list.txt
qshell batchdelete --force tootalblog -i tootalblog.list.txt
del tootalblog.list.txt
```