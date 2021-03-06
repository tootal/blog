---
title: Markdown学习
urlname: learn-markdown
toc: true
categories:
  - 计算机
  - 技术
tags:
  - Markdown
date: 2020-02-14 11:44:58
updated: 2020-02-14 11:44:58
---
![](../asset/learn-markdown.cover.webp)

## Markdown与标记语言介绍
Markdown是一种轻量级标记语言。那么什么是标记语言（Markup Language）呢？记得以前在课本上看到关键句子的时候，我通常会用黑笔在句子下面划线，比如下面这样：

> 当代大学生要坚定理想信念，自觉做中国特色社会主义共同理想的坚定信仰者、忠诚实践者。为此，就要深入学习马克思主义基本原理及马克思主义中国化的理论成果，特别是学习习近平新时代中国特色社会主义思想，让真理武装我们的头脑，让真理指引我们的理想，让真理坚定我们的信仰。要坚持学而信、学而用、学而行，把学习成果转化为不可撼动的理想信念，转化为正确的世界观、人生观、价值观，<span style="border-bottom: 2px solid black">用理想之光照亮奋斗之路，用信仰之力开创美好未来。</span>当代青年要积极投身新时代中国特色社会主义事业，勇做担当中华民族伟大复兴大任的时代新人。要以勇于担当的精神，做走在新时代前列的奋进者、开拓者、奉献者，以执着的信念、优良的品德、丰富的知识、过硬的本领，同人民群众一道，担负起历史赋予的重任，在实现中华民族伟大复兴中国梦的生动实践中放飞青春梦想。

<!-- more -->

显然，在标记出重点之后，一眼就能看出大段文字中的关键之处。那么如何表达这种标记呢？用word的同学可能会告诉我：“很简单啊，先用鼠标选中需要标记的文字，然后点一下菜单上的下划线按钮就好了。”word的功能确实很强大，甚至有点臃肿了，而且安装起来不是很方便。更进一步的，word是如何保存这种标记的呢？用压缩软件打开一个word文档，你会发现里面有很多xml文件，而xml的全称是可扩展标记语言（Extensible Markup Language）。也就是说，word实际上也是通过一种标记语言来保存这些标记信息的。

通常来说，标记语言都是长这样的：（例子来自[菜鸟教程](https://www.runoob.com/xml/xml-intro.html)）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>
```

不用我解释你大概也能知道上面标记语言表达的意思：它描述了一封Jani 写给 Tove 的便签，标题为Reminder，内容为Don't forget me this weekend!。注意到上面的标记和我之前说的标记其实含义是不同的，这里的标记指的是内容的含义，而上面的标记指的是文字的外观。我今天准备学习的Markdown的标记就是指标记文字的外观。来看一个用标记语言描述外观的例子：

```html
<p>自三峡七百里中，两岸连山，略无<b>阙</b>处。重岩叠<b>嶂</b>，隐天蔽日，自非亭午夜分，不见<b>曦</b>月。</p>
```

可以发现，如果不解释的话，很难看出这些标记的意思，事实上这不是标记语言的缺陷，而是为了书写方便，把段落（paragraph）缩写成p，粗体（bold）缩写成b。这样大概就能看出它的意思了，描述了一个段落，其中加粗了三个字。这个例子的标记确实可以完成标记文字外观的功能，但是他有一个缺点——不直观。在word中，加粗、下划线都可以直观的看到，而不用像上面的标记一样在脑海中想象。为了解决这个问题，一种轻量级标记语言诞生了。

先来看看一个非常简单的Markdown的例子：

```md
至于夏水**襄陵**，沿**溯**阻绝。或王命急宣，有时朝发白帝，暮到江陵，其间千二百里，虽乘奔御风，不以疾也。

```

这和上面的标记语言的功能是类似的，同样是描述一个段落、加粗几个字。可以发现Markdown的语法非常直观，甚至你都没有感受到它用了Markdown的段落语法（空行）。

## 使用Markdown的方式
由于简单的标记语法，你甚至可以直接使用系统自带的记事本软件来编写Markdown文档。但我并不推荐这样做，就像不推荐用记事本写C++代码一样。如果你对代码比较感兴趣，更喜欢手动编辑修改代码的话，我推荐使用左右分栏的预览模式，例如[Cmd Markdown编辑阅读器](https://www.zybuluo.com/mdeditor)，[MarkdownEditor](http://jbt.github.io/markdown-editor/)、[马克飞象](https://maxiang.io/)以及[Editor.md](https://pandao.github.io/editor.md/)，当然利用编辑模式和阅读模式区分的[VNote](https://tamlok.gitee.io/vnote/zh_cn/)也是一个不错的选择，能让你更加专注于写作。如果你比较厌烦这些标记，那么在原地渲染、隐藏标记的[Typora](https://www.typora.io/)，以及类似的网页端[Writing Different](https://wtdf.io/)也不错。另外，直接用现代的代码编辑器如[Visual Studio Code](https://code.visualstudio.com/)、[Sublime Text](http://www.sublimetext.com/)、[Atom](https://github.com/atom/atom)来编写Markdown也非常不错。网页端和本地客户端各有各的使用场景，选择适合自己的就好。另外，实现一个简单的Markdown编辑器并不难，难的是如何找到写作与排版二者的平衡，找到Markdown最合适的应用场景（如Github的README文件）。

## Markdown语法指南
事实上Markdown并没有一个标准的语法规则定义，各种平台所支持的Markdown标准也都大同小异。目前我看到最细致的定义可以在[CommonMark](https://commonmark.org/)找到。如果想进一步了解Markdown可以访问[Github Mastering Markdown](https://guides.github.com/features/mastering-markdown/)、[SegmentFault Markdown 编辑器语法指南](https://segmentfault.com/markdown)、[牛客网 Markdown 语法说明](https://www.nowcoder.com/discuss/179680)、少数派 Markdown 完全入门[（上）](https://sspai.com/post/36610) 、[（下）](https://sspai.com/post/36682)。

下面把我以前学习Markdown时写的一篇文档再抄一遍，就当是测试页面的渲染效果了吧。注意Markdown往往是兼容HTML的，所以如果有些效果使用Markdown无法实现可以考虑使用HTML实现。以下仅仅说明一些广泛使用，兼容性好的Markdown语法。


### 标题
```md
# 第一部
## 第一卷
### 第一回
#### 第一节
##### 第一段
###### 第一句
```
<pre>
# 第一部
## 第一卷
### 第一回
#### 第一节
##### 第一段
###### 第一句
</pre>


* `#`之后一般需要至少一个空格
* 标题应该单独占一行
* 如果上面的内容没有显示出来，通常是为了不干扰文章目录而特殊处理了
* 标题还有一些特殊写法如文字下加`---`，在此不做介绍

### 字体
```md
**粗体**和*斜体*往往用于产生强调作用，本质上是因为__粗体__和_斜体_对阅读者产生了干扰，降低了阅读者的阅读速度。因此大段的***粗斜体***，是不必要的，效果会___适得其反___。
~~删除线~~使用的范围就比较广泛了，通常用于批改审阅，团队协作，公共编辑中保留证据，或许还是~~一种娱乐方式~~？
```

**粗体**和*斜体*往往用于产生强调作用，本质上是因为 __粗体__ 和 _斜体_ 对阅读者产生了干扰，降低了阅读者的阅读速度。因此大段的 ***粗斜体***，是不必要的，效果会 ___适得其反___ 。
~~删除线~~使用的范围就比较广泛了，通常用于批改审阅，团队协作，公共编辑中保留证据，或许还是~~一种娱乐方式~~？

* 推荐使用更加通用的`*`写法
* 若出现错误可在标记前后添加一个空格
* 用删除线标记的内容并不会真的删除-_-

### 列表
**无序列表**：

常见的编程语言有：
```md
* C
* C++
* Python
    * Python2
    * Python3
* Java
* PHP
```

* C
* C++
* Python
    * Python2
    * Python3
* Java
* PHP

**有序列表**：

Windows版本历程：

```md
1. Windows 2000 （2000年-2005年）
2. Windows XP （2001年-2014年）
    1. Windows XP SP1 （2002年）
    2. Windows XP SP2 （2004年）
    3. Windows XP SP3 （2008年）
4. Windows 7 （2009年-2015年）
    1. Windows 7 SP1 （2011年）
5. Windows 8 （2012年-2018年）
6. Windows 10 （2015年至今）
```

1. Windows 2000 （2000年-2005年）
2. Windows XP （2001年-2014年）
    1. Windows XP SP1 （2002年）
    2. Windows XP SP2 （2004年）
    3. Windows XP SP3 （2008年）
4. Windows 7 （2009年-2015年）
    1. Windows 7 SP1 （2011年）
5. Windows 8 （2012年-2018年）
6. Windows 10 （2015年至今）

* 有序列表前的序号通常会被重新标注
* 使用一个空行来结束列表

### 表格

```md
linux主流发行版参考表：

|   发行版    | 评价                                |
| :--------: | :---------------------------------- |
|   Ubuntu   | Linux 新用户的完美起点                |
|   Debian   | 现代 Linux 版本的始祖                |
|    Mint    | 易于使用且功能强大,基于Ubuntu开发     |
|   Deepin   | 基于 Ubuntu 的发行版,界面简单直观     |
| Arch Linux | 为经验丰富的用户而设计的发行版         |
| Kali Linux | 渗透测试发行版                       |
|   Fedora   | 社区构建的面向日常应用的发行版         |
|  Red Hat   | Fedora的商业衍生产品，专为企业客户设计 |
|   CentOS   | 由社区重建的Red Hat企业版Linux        |
| SUSE Linux | 专为企业使用而设计                    |

```

linux主流发行版参考表：

|   发行版    | 评价                                |
| :--------: | :---------------------------------- |
|   Ubuntu   | Linux 新用户的完美起点                |
|   Debian   | 现代 Linux 版本的始祖                |
|    Mint    | 易于使用且功能强大,基于Ubuntu开发     |
|   Deepin   | 基于 Ubuntu 的发行版,界面简单直观     |
| Arch Linux | 为经验丰富的用户而设计的发行版         |
| Kali Linux | 渗透测试发行版                       |
|   Fedora   | 社区构建的面向日常应用的发行版         |
|  Red Hat   | Fedora的商业衍生产品，专为企业客户设计 |
|   CentOS   | 由社区重建的Red Hat企业版Linux        |
| SUSE Linux | 专为企业使用而设计                    |

* 可以利用冒号位置调节列的位置，如`:---:`表示居中，`:---`表示靠左。
* 一般在表格前后均添加一个空行

### 链接
```md
http://www.baidu.com
[搜狗](https://www.sogou.com/)
[Yadex](https://yandex.com/)
```

http://www.baidu.com
[Yadex](https://yandex.com/)
[Google](https://www.google.cm/)

* 部分渲染器支持将纯文本链接转化为链接（自动链接）

### 图片
```md
![黑客](../asset/hacker.webp)
![矩阵](../asset/matrix.webp "矩阵")
```

![黑客](../asset/hacker.webp)
![矩阵](../asset/matrix.webp "矩阵")

* 链接后面的说明信息会在鼠标悬停时显示

### 引用
```md
> 《前赤壁赋》 苏轼
>> 客曰：“‘月明星稀，乌鹊南飞’此非曹孟德之诗乎？西望夏口，东望武昌，山川相缪，郁乎苍苍，此非孟德之困于周郎者乎？方其破荆州，下江陵，顺流而东也，舳舻千里，旌旗蔽空，酾酒临江，横槊赋诗，固一世之雄也，而今安在哉？况吾与子渔樵于江渚之上，侣鱼虾而友麋鹿；驾一叶之扁舟，举匏樽以相属。寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。”
>>
>> 苏子曰：“客亦知夫水与月乎？逝者如斯，而未尝往也；盈虚者如彼，而卒莫消长也，盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也，而又何羡乎？且夫天地之间，物各有主，苟非吾之所有，虽一毫而莫取。惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭，是造物者之无尽藏也，而吾与子之所共适。”

```

> 《前赤壁赋》 苏轼
>> 客曰：“‘月明星稀，乌鹊南飞’此非曹孟德之诗乎？西望夏口，东望武昌，山川相缪，郁乎苍苍，此非孟德之困于周郎者乎？方其破荆州，下江陵，顺流而东也，舳舻千里，旌旗蔽空，酾酒临江，横槊赋诗，固一世之雄也，而今安在哉？况吾与子渔樵于江渚之上，侣鱼虾而友麋鹿；驾一叶之扁舟，举匏樽以相属。寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。”
>>
>> 苏子曰：“客亦知夫水与月乎？逝者如斯，而未尝往也；盈虚者如彼，而卒莫消长也，盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也，而又何羡乎？且夫天地之间，物各有主，苟非吾之所有，虽一毫而莫取。惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭，是造物者之无尽藏也，而吾与子之所共适。”

* `>`后面需要至少一个空格
* 需要一个空行来结束引用

### 分割线
```md
分割线通常是用来分割装饰文字~~凑字数~~的，它可以让文字更加美观。

！！！！！！这是一个分割线，看到这里想必也累了，可以放松一下！！！！！

上面是假的分割线，下面的才是真的！

---

----

***

****

```

分割线通常是用来分割装饰文字~~凑字数~~的，它可以让文字更加美观。

！！！！！！这是一个分割线，看到这里想必也累了，可以放松一下！！！！！

上面是假的分割线，下面的才是真的！

---

----

***

****

* 需要三个或三个以上标记
* 需要单独占据一行
* 显示效果可能会有粗细上的差别

### 行内代码
```md
有时候需要用到一些特殊符号，如`*`，`>`这些与Markdown的标记相冲突，或是想`printf("代码");`在文字中，就可以使用行内代码。这时只需用两个`` ` ``包围内容。
注意：
* `` ` `` 是反引号，通常在Esc键下方（键盘的左上方）
* 如果需要显示一个`` ` `` 那么要用两个`` ` `` 包围它
```

有时候需要用到一些特殊符号，如`*`，`>`这些与Markdown的标记相冲突，或是想`printf("代码");`在文字中，就可以使用行内代码。这时只需用两个`` ` ``包围内容。

* `` ` `` 是反引号，通常在Esc键下方（键盘的左上方）
* 如果需要显示一个`` ` `` 那么要用两个`` ` `` 包围它

### 代码块
代码块可以在文章中便捷地插入一段代码，来回顾一下经典的helloworld代码吧！

    C++版本：
    ```cpp
    #include <iostream>
    using namespace std;
    int main(){
        cout<<"hello world!"<<endl;
        return 0;
    }
    ```
    Java版本：
    ~~~java
    public class Main{
        public static void main(String[] args){
            System.out.println("hello world!");
        }
    }
    ~~~

C++版本：

```cpp
#include <iostream>
using namespace std;
int main(){
    cout<<"hello world!"<<endl;
    return 0;
}
```

Java版本：

~~~java
public class Main{
    public static void main(String[] args){
        System.out.println("hello world!");
    }
}
~~~

* 还可以简单地选中代码后按tab键来形成代码块

### 任务列表
```md
近代中国的两大历史任务：
- [x] 求得民族独立和人民解放
- [ ] 实现国家的繁荣富强和人民的共同富裕
```

近代中国的两大历史任务：
- [x] 求得民族独立和人民解放
- [ ] 实现国家的繁荣富强和人民的共同富裕

### 数学公式
Markdown本身是不支持数学公式的，通常靠其他工具的支持如[Mathjax](https://www.mathjax.org/)、[Katex](https://katex.org/)。这些工具配置、学习起来都比较麻烦。想进一步了解可以访问官网，或者查阅以下资料：

* [前端整合MathjaxJS的配置笔记](https://segmentfault.com/a/1190000008317350)
* [MathJax的一些坑](https://www.douban.com/note/534786000/)

**行内公式**

```md
在数理统计中，若$X \sim \Gamma(\frac n 2 , \frac 1 2)$，则称 $X$ 服从**自由度为** $n$ **的** $\chi^2$ **分布**，记为$X\sim \chi^2(n)$
```

在数理统计中，若 $X \sim \Gamma(\frac n 2 , \frac 1 2)$ ，则称 $X$ 服从**自由度为** $n$ **的** $\chi^2$ **分布**，记为$X\sim \chi^2(n)$

* 为了更好的兼容性，可以在`$$`外侧添加一个空格。

**块公式**

```md
$$
x=\frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$
```

<div>
$$
x=\frac{-b \pm \sqrt{b^2-4ac}}{2a}
$$
</div>

## 写在最后
写本文的目的主要是总结整理一下我了解到的关于Markdown的知识，同时顺便测试一下目前博客的渲染效果和对Markdown的支持效果。并不是推荐Markdown或者是推荐某个软件。在我看来，使用Markdown能给我一种自由的感觉，这就足够了。顺便提一句，如果你想测试一下Markdown的话，下面评论框是个不错的选择。😀
