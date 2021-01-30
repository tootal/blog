---
title: hello world
urlname: hello-world
categories:
  - 计算机
  - 技术
tags:
  - 编程
date: 2019-01-23 18:44:33
updated: 2019-01-23 18:44:33
---

![93aeb1c3ly1fzgx1tyq10j20ix0ch75a](../asset/20210130134328911_29475.jpg)

最近上午下午都在搞ACM，晚上实在不想做题，就打起了其他编程语言的主意。虽然编程的水平不能用通晓的编程语言数目来衡量，但多接触一些其他类型的编程语言也可以增长见识，开阔视野，了解一下计算机语言的发展进程。  

<!--more-->  
初步打算是利用helloworld这个著名的程序来体验一下，各种语言的helloworld程序也比较容易查询，更难的其实是编程环境的配置。  
# 工具软件  
## 编辑器：  
  
* SublimeText3，通过更改SublimeText3中的build系统实现多种语言的快速编译。    
  
## 编译器：  
目前实现的有：（点击可跳转到实现部分）  
[C](#c)、[C++](#cpp)、[Pascal](#pascal)、[Markdown](#markdown)、[LaTeX](#latex)、[Html](#html)、[JavaScript](#javascript)、[PHP](#php)、[Java](#java)、[Python](#python)、[Batch](#batch)、[Shell](#shell)、[R](#r)、[Ruby](#ruby)、[Perl](#perl)、[Lua](#lua)、[Ada](#ada)、[Fortran](#fortran)、[Lisp](#lisp)  
  
* C 和 C++ ：mingw-w64  
[mingw-w64下载链接](https://sourceforge.net/projects/mingw-w64/files/mingw-w64/)  
* HTML：任何网页浏览器即可打开。  
[Firefox 火狐浏览器](https://download-ssl.firefox.com.cn/releases-sha2/full/64.0/zh-CN/Firefox-full-latest-win64.exe)  
* JAVA：jdk和jre，jre为运行环境，jdk为开发环境  
[Java SE Runtime Environment 8 Downloads](https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)  
[Java SE Development Kit 8 Downloads](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)  
点击Accept License Agreement后即可下载。  
* Markdown：找单独的渲染器实在麻烦，采用SublimeText3插件运行  
编辑：[MarkdownEditing](https://github.com/SublimeText-Markdown/MarkdownEditing)  
预览（转换为Html）：[OmniMarkupPreviewer](https://github.com/timonwong/OmniMarkupPreviewer)  
* LaTeX：texlive  
[Acquiring TeX Live as an ISO image](http://ctan.mirrors.hoobly.com/systems/texlive/Images/texlive.iso)  
* Pascal：Free Pascal  
[fpc-3.0.4.i386-win32.exe](https://sourceforge.net/projects/freepascal/files/Win32/3.0.4/fpc-3.0.4.i386-win32.exe/download)  
* Python：Python2和Python3  
[Python 3.7.2](https://www.python.org/ftp/python/3.7.2/python-3.7.2.exe)  
[Python 2.7.15 Windows x86-64 MSI installer](https://www.python.org/ftp/python/2.7.15/python-2.7.15.amd64.msi)  
* Batch：cmd  
windows系统自带  
* Shell：git bash  
[Git for Windows  (2.20.1) 64-bit version](https://github.com/git-for-windows/git/releases/download/v2.20.1.windows.1/Git-2.20.1-64-bit.exe)  
* JavaScript：Node.js  
[nodejs LTS10.15.0 长期支持版](https://nodejs.org/dist/v10.15.0/node-v10.15.0-x64.msi)  
* Fortran：G95 compiler  
[g95-Mingw_2012120](http://www.fortran.com/blog/wp-content/uploads/2013/05/g95-Mingw_201210.exe)  
* Ada：Mingw gnatlink（C++安装的即可编译）  
* Lua：Lua for Windows  
[Lua for Windows v5.1.5-52 Released](https://github.com/rjpcomputing/luaforwindows/releases/download/v5.1.5-52/LuaForWindows_v5.1.5-52.exe)  
* Ruby： RubyInstallers   
[Ruby+Devkit 2.5.3-1 (x64) ](https://github.com/oneclick/rubyinstaller2/releases/download/rubyinstaller-2.5.3-1/rubyinstaller-devkit-2.5.3-1-x64.exe)  
* Perl：Strawberry Perl  
[Strawberry Perl 5.28.1.1 (64bit)](http://strawberryperl.com/download/5.28.1.1/strawberry-perl-5.28.1.1-64bit.msi)  
* PHP：为了方便使用了wnmp安装包  
[Windows, Nginx, MariaDB & PHP(Wnmp)](https://sourceforge.net/projects/wnmp-env/files/latest/download)  
* R  
[R-3.5.2 for Windows (32/64 bit)](https://mirrors.tuna.tsinghua.edu.cn/CRAN/bin/windows/base/R-3.5.2-win.exe)  
* Lisp： CLisp  
[CLISP - an ANSI Common Lisp](https://sourceforge.net/projects/clisp/files/clisp/2.38/clisp-2.38-win32.zip/download?use_mirror=master&download=)  
  
# 实现  
能实现读入功能的语言就实现读入一个整数`n`，输出`n`行`hello world!`，其余就展示`hello world!`。  
命令的执行一般都需要把可执行文件添加到环境变量PATH中。  
  
<span id="c"></span>  
## C  
非常常见，使用广泛，能进行底层开发，操作系统内核基本都是用C语言写的。C语言接近汇编，可以通过指针操控内存，因此速度非常快，可移植性也好。缺点在于初学往往不知道学了能干嘛，很难用C语言写出一个漂亮的程序界面，但用来学习算法和数据结构非常好。  
![C](http://wx4.sinaimg.cn/large/93aeb1c3ly1fzgwq3lipcj20dw073dgj.jpg)  
**hello.c**

```c
#include <stdio.h>  
int main(){  
	int i,n;  
	scanf("%d",&n);  
	for(i=0;i<n;i++){  
		printf("hello world!\n");  
	}  
	return 0;  
}
```

编译运行命令：`gcc hello.c -o hello & hello`  
  
<span id="cpp"></span>  
## C++  
C语言的一个超集，在C语言的基础上添加了许多功能，最主要的就是面向对象的支持，功能繁杂全面。学习C++有一定难度，但C++在编程语言中非常有代表性。这也是我目前唯一比较了解的编程语言。（C++最强，不接受反驳）  
![C++](http://wx4.sinaimg.cn/large/93aeb1c3ly1fzgwokmgecj20q00q0tdw.jpg)  
  
**hello.cpp**  
```cpp
#include <iostream>  
using namespace std;  
int main(){  
	int n;  
	cin>>n;  
	for(int i=0;i<n;i++){  
		cout<<"hello world!"<<endl;  
	}  
	return 0;  
}  
```
编译运行命令：`g++ hello.c -o hello & hello`  
  
<span id="pascal"></span>  
## Pascal  
我第一个学习的语言，当时用的是Turbo Pascal。Pascal的主要特点就是结构比较严谨，Pascal主要是一个教学向的语言，或许由于C等语言的流行或是其他一些原因，已经很少有人用了。  
![无法忘记的Lazarus](https://www.freepascal.org/pic/logo.gif)  
**hello.pas**  

```pas
program hello;  
var  
	i,n:integer;  
begin  
	readln(n);  
	for i:=1 to n do  
	begin  
		writeln('hello world!');  
	end;  
end.  
```

编译运行命令：`fpc hello.pas & hello`  
  
<span id="markdown"></span>  
## Markdown  
一种非常简单的标记语言，常用在博客，笔记，留言，帮助文档中，可以用少量的语法来进行文字排版标记，这篇博客也是用Markdown写的。我认为Markdown主要是用来简化html的繁琐标记，使得可读性更强。  
![Markdown](https://justyy.com/wp-content/uploads/2016/01/markdown-syntax-language.png)  
**hello.md**  
```md
# hello world  
```
  
<span id="latex"></span>  
## LaTeX  
专业的排版系统，尤其是对于复杂的数学公式，使用也很广泛，学术论文排版经常用到。  
![Latex](https://www.latex-project.org/img/latex-project-logo.svg)  
**hello.tex**  

```text
\documentclass{article}  
\begin{document}  
hello world!  
\end{document}  
```
  
<span id="html"></span>  
## Html  
超文本标记语言，一般的网页所呈现的效果就是浏览器渲染html文件形成的。  
![Html5 Logo](https://www.w3.org/html/logo/img/html5-topper.png)  
**hello.html**  
  
```html
<!DOCTYPE html>  
<html>  
<head>  
	<title>hello</title>  
</head>  
<body>  
hello world!  
</body>  
</html>  
```
  
用浏览器打开即可。  
  
<span id="javascript"></span>  
## JavaScript  
网络脚本语言，一般内嵌在html里用来实现网页的动态内容，也可单独执行。常常用来写网页脚本，一般运行在浏览器里。这里利用nodejs直接运行。  
![JavaScript](https://zyl.me/content/images/blog/cover/js/35453355.jpg)  
**hello.js**  
  
```js
process.stdin.on('readable', () => {  
  n=process.stdin.read();  
  for(var i=1;i<=n;i++){  
  	console.log("hello world!");  
  	if(i==n)process.stdin.emit('end');  
  }  
});  
```
  
运行命令：`node hello.js`  
  
<span id="php"></span>  
## PHP  
同样是脚本语言，不过一般运行在服务器，许多入侵服务器都是利用的PHP语言的漏洞，比如一句话木马：`<?php @eval($_POST[value]);?>`  
![PHP](http://wx4.sinaimg.cn/large/93aeb1c3ly1fzgwe4avbtj20qo0myabc.jpg)  
**hello.php**  
  
```php
<?php  
$n=fgets(STDIN);  
for($i=0;$i<$n;$i++){  
	echo "hello world!\n";  
}  
?>  
```
  
运行命令：`php hello.php`  
  
<span id="java"></span>  
## Java  
许多企业用的开发语言，C++改造而来，更强化了面向对象的概念，C++实质还是和C一样，用函数组织程序，而Java直接改用对象组织程序。  
![Java](https://www.java.com/ga/images/javamagbanner-575x150.jpg)  
  
**hello.java**  
  
```java
import java.util.Scanner;  
public class hello{  
	public static void main(String[] args){  
		Scanner input=new Scanner(System.in);  
		int n=input.nextInt();  
		for(int i=0;i<n;i++){  
			System.out.println("hello world!");	  
		}  
	}  
}  
```
  
编译运行命令：`javac hello.java & java hello`  
  
<span id="python"></span>  
## Python  
非常流行的一种编程语言，简单易学又功能强大，可供调用的包很多。因此往往很短的代码就能实现很高级的功能。但我感觉Python不利于理解程序底层原理，而且运行速度慢，但确实很实用。目前我有时用Python写一写数据生成器来对拍（主要是其他高级的功能也不会）。  
![Python](https://visualstudio.microsoft.com/wp-content/uploads/2016/06/python-1-562x309@2x-op-1200x606.png)  
**hello.py**  
  
```py
n=int(input())  
for i in range(n):  
	print('hello world!')  
```
  
运行命令：`python hello.py`  
  
  
<span id="batch"></span>  
## Batch  
其实就是windows下的批处理文件，功能虽说比不上C等编程语言，但用来处理windows相关的问题非常好用，如删除文件夹内所有exe文件：`del /s *.exe`,从文件输入输出：`program.exe < input.txt > output.txt`。目前偶尔用来写对拍程序。  
![Batch](http://wx3.sinaimg.cn/large/93aeb1c3ly1fzgw8cn0k2j20j808ejrg.jpg)  
  
**hello.bat**  
```bat
@echo off  
set /p n=  
for /L %%i in (1,1,%n%) do echo hello world!  
```
  
运行命令：`hello.bat`  
  
<span id="shell"></span>  
## Shell  
linux下的批处理，常用的解释器有bash，由于在windows下运行，就不加`#!/bin/bash`了。  
![Shell](https://dn-linuxcn.qbox.me/data/attachment/album/201409/16/143729b0qmspapdfhqaqb3.png)  
**hello.sh**  
```sh
read n  
for((i=1;i<=$n;i++));  
do  
	echo "hello world!"  
done  
```
运行命令：`bash hello.sh`  
  
<span id="r"></span>  
## R  
多用于统计分析绘图。由于一些其妙的问题，读入只能暂时先放在源代码里了。  
![R](http://www.raincent.com/uploadfile/2017/0810/20170810040405452.jpg)  
**hello.r**  
  
```r
n<-scan(what=integer(0))  
5  
  
for(i in 1:n){  
	cat('hello world!\n')  
}  
  
```
  
运行命令：`rscript hello.r`  
  
<span id="ruby"></span>  
## Ruby  
完全面向对象的脚本语言。  
![Ruby](http://wx3.sinaimg.cn/large/93aeb1c3ly1fzgw44vfilj20ce0e8q4a.jpg)  
  
**hello.ruby**  
  
```ruby
n=gets.to_i  
for i in 1..n  
	puts "hello world"  
end  
```
  
运行命令：`ruby hello.ruby`  
  
<span id="perl"></span>  
## Perl  
特点是内部集成了正则表达式，想来擅长字符串处理？  
![Perl的骆驼](http://photocdn.sohu.com/20151112/mp41374516_1447316306128_16.jpeg)  
**hello.pl**  
  
```perl
$n=<STDIN>;  
for($i=1;$i<=$n;$i++){  
	print "hello world!\n";  
}  
```
  
运行命令：`perl hello.pl`  
  
<span id="lua"></span>  
## Lua  
速度快、小巧的脚本语言，很容易嵌入其他语言中使用。  
![愤怒的小鸟--Lua开发](https://www1.pconline.com.cn/download/images/soft/tpyzt1/2015527193217.jpg)  
**hello.lua**  
  
```lua
n=io.read("*n")  
for i=1,n do  
	print("hello world!")  
end  
```
  
运行命令：`lua hello.lua`  
  
<span id="ada"></span>  
## Ada  
第一次听说Ada是在一场CTF比赛中把最佳女生奖称为Ada奖。这才知道世界上第一位程序员是Ada Lovelace，而且是女性。~~以后Ada就是我女神~~  
![Ada Lovelace](http://wx4.sinaimg.cn/large/93aeb1c3ly1fzgvjiqll3j20m80vx0u8.jpg)  
为了纪念她，美国国防部花费巨资研制出用于军事系统开发的Ada语言，据称是迄今为止最复杂，最完备的软件工具。  
资料实在缺乏，故没有写读入。  
[Ada Reference](http://www.ada-auth.org/standards/12rm/html/RM-TOC.html)  
  
**hello.adb**  
  
```ada
with Ada.Text_IO;   
use Ada.Text_IO;  
procedure hello is  
begin  
   Put_Line("hello world!");  
end hello;  
```
  
编译运行命令：`gnatmake hello.adb & hello`  
  
<span id="fortran"></span>  
## Fortran  
世界上第一种高级编程语言，至今仍然活跃在科学计算等领域中。  
采用古老的固定格式写法，空六格真是经典。  
![1956年10月的首个 Fortran 编程手册文档](https://static.oschina.net/uploads/space/2013/0922/081024_lmKk_12.jpg)  
**hello.for**  
注意代码前有6个半角空格，这里为了显示用了3个全角空格。
```for
　　　PROGRAM HELLO  
　　　READ *,n  
　　　DO i=1,n  
　　　WRITE(*,'(A)') "hello world!"  
　　　END DO  
　　　END PROGRAM HELLO  
```
  
编译运行命令：`gfortran hello.for -o hello & hello`  
  
<span id="lisp"></span>  
## Lisp  
超奇妙古怪古老神秘自由非凡的一种语言，貌似用在人工智能领域。    
  
![可以创造语言的Lisp语言](https://gss0.bdstatic.com/7LsWdDW5_xN3otebn9fN2DJv/doc/pic/item/9a504fc2d5628535c958b5ab99ef76c6a6ef63fb.jpg)  
  
**hello.lisp**  
```lisp
(defun hello ()  
	(let (n (read))  
	(loop for i from 1 to n  
		(print("hello world!"))  
	)  
)  
  
```
放到最后就是压轴的。    
~~其实是还没搞好编译运行问题~~    
