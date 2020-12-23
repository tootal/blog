# 涨知识的Markdown指南
Markdown是一种轻量级的易用的书写语法。本文是Markdown的介绍页面，在这里可以查询Markdown的各种语法，也可以测试页面的渲染是否正常。

## 基本语法
以下Markdown语法被广泛使用，兼容性好。

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

注意：
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
注意：
* 推荐使用更加通用的`*`写法
* 若出现错误可在标记前后添加一个空格
* 用删除线标记的内容并不会真的删除-_-

### 列表
#### 无序列表：
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

#### 有序列表
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

注意：
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

注意：
* 可以利用冒号位置调节列的位置，如`:---:`表示居中，`:---`表示靠左。
* 一般在表格前后均添加一个空行

### 图片和链接
```md
#### 链接
http://www.baidu.com
[搜狗](https://www.sogou.com/)
[Yadex](https://yandex.com/)
#### 图片
![黑客](https://upload.cc/i1/2019/07/10/BbhN6U.jpg)
![矩阵](https://upload.cc/i1/2019/07/10/QEzuhs.jpg "矩阵")
```

#### 链接
常见搜索引擎链接：
http://www.baidu.com
[Yadex](https://yandex.com/)
[Google](https://www.google.cm/)
#### 图片
![黑客](https://upload.cc/i1/2019/07/10/BbhN6U.jpg)
![矩阵](https://upload.cc/i1/2019/07/10/QEzuhs.jpg "矩阵")

注意：
* 部分渲染器支持将纯文本链接转化为链接
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

注意：
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

注意：
* 需要三个或三个以上标记
* 需要单独占据一行
* 显示效果可能会有粗细上的差别

### 行内代码
```md
有时候需要用到一些特殊符号，如`*`，`>`这些与Markdown的标记相冲突，或是想`printf("代码");`在文字中，就可以使用行内代码。这时只需用两个`包围内容。
注意：
* `` ` `` 是反引号，通常在Esc键下方（键盘的左上方）
* 如果需要显示一个`` ` `` 那么要用两个`` ` `` 包围它
```
有时候需要用到一些特殊符号，如`*`，`>`这些与Markdown的标记相冲突，或是想`printf("代码");`在文字中，就可以使用行内代码。这时只需用两个`包围内容。
注意：
* `` ` `` 是反引号，通常在Esc键下方（键盘的左上方）
* 如果需要显示一个`` ` `` 那么要用两个`` ` `` 包围它

### 代码块
代码块可以在文章中便捷地插入一段代码，来回顾一下经典的helloworld代码吧！
```md
C++版本：
(```)cpp
#include <iostream>
using namespace std;
int main(){
	cout<<"hello world!"<<endl;
	return 0;
}
(```)
Java版本：
(~~~)java
public class Main{
	public static void main(String[] args){
		System.out.println("hello world!");
	}
}
(~~~)
```
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

注意：
* 如果标记左右加了括号，那么括号是多余的，通常是为了避免干扰排版额外标注的，实际使用时去掉括号即可
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


## 拓展语法
伴随着Markdown的发展，出现了许多分支，很多编辑器也会添加自己的拓展语法。这里介绍其中较为通用的语法。
下面的语法不一定在所有的编辑器中均能显示，因此可能带来不良的阅读体验，请见谅。
### 数学公式
在文章中嵌入数学公式是很常见的需求，尤其在一些科普类文章中。Markdown一般通过和LaTeX结合使用来嵌入数学公式。
#### 行内公式
```md
在数理统计中，若$X \sim \Gamma(\frac n 2 , \frac 1 2)$，则称 $X$ 服从**自由度为** $n$ **的** $\chi^2$ **分布**，记为$X\sim \chi^2(n)$
```
在数理统计中，若$X \sim \Gamma(\frac n 2 , \frac 1 2)$，则称 $X$ 服从**自由度为** $n$ **的** $\chi^2$ **分布**，记为$X\sim \chi^2(n)$
#### 块公式
```md
卡方分布的分布密度函数为：
$$
f(n)=\left\{
\begin{array}{}
\frac{1}{2^n\Gamma(\frac{n}{2})}x^{\frac{n}{2}-1}e^{-x/2},  & x > 0;\\
0, &\text{其他.}\\
\end{array}
\right.
$$
```
卡方分布的分布密度函数为：

$$
f(n)=\left\{
\begin{array}{}
\frac{1}{2^n\Gamma(\frac{n}{2})}x^{\frac{n}{2}-1}e^{-x/2},  & x > 0;\\
0, &\text{其他.}\\
\end{array}
\right.
$$

以下示例部分内容建议在浏览时跳过，在必要时**查阅**。
#### 示例
##### 希腊字母
```md
$$
\alpha\beta\gamma\delta\epsilon\zeta\eta\theta\iota\kappa\lambda\mu\nu\xi\omicron\pi\rho\sigma\tau\upsilon\phi\chi\psi\omega\\
AB\Gamma\Delta EZH\Theta IK\Lambda MN\Xi O\Pi P\Sigma T\Upsilon\Phi X\Psi\Omega
$$
```

$$
\alpha\beta\gamma\delta\epsilon\zeta\eta\theta\iota\kappa\lambda\mu\nu\xi\omicron\pi\rho\sigma\tau\upsilon\phi\chi\psi\omega\\
AB\Gamma\Delta EZH\Theta IK\Lambda MN\Xi O\Pi P\Sigma T\Upsilon\Phi X\Psi\Omega
$$

##### 括号
```md
$$
()
[]
\{\}
\left(\right)
\left[\right\}\\
\left\{\right.
$$
```

$$
()
[]
\{\}
\left(\right)
\left[\right\}\\
\left\{\right.
$$

##### 大符号
```md
$$
\sum_{i=1}^{n}i=1+2+3+..+(n-1)+n\\
\int_a^b f(x)dx=F(b)-F(a)\\
\iint_a^b\\
\iint\limits_a^b\\
\iiint_a^b\\
\oint_a^b\\
\prod_{i=1}^{n}i=1*2*2..*(n-1)*n\\
A \bigcup (B \bigcap C)=(A \bigcup B) \bigcap (A \bigcup C)
$$
```

$$
\sum_{i=1}^{n}i=1+2+3+..+(n-1)+n\\
\int_a^b f(x)dx=F(b)-F(a)\\
\iint_a^b\\
\iint\limits_a^b\\
\iiint_a^b\\
\oint_a^b\\
\prod_{i=1}^{n}i=1*2*2..*(n-1)*n\\
A \bigcup (B \bigcap C)=(A \bigcup B) \bigcap (A \bigcup C)
$$

##### 分数与根式
```md
$$
\frac ab
\frac {a}{b}
\dfrac ab
\dfrac {a}{b}
\tfrac ab
\tfrac {a}{b}
\sqrt 3
\sqrt {3}
\sqrt {\dfrac {x}{y}}
\sqrt[x] {\dfrac {a}{b}}
\frac {\sqrt{3}}{2}
\dfrac {\sqrt{9}}{\sqrt[8]{x}}
$$
```

$$
\frac ab
\frac {a}{b}
\dfrac ab
\dfrac {a}{b}
\tfrac ab
\tfrac {a}{b}
{a \over b}
{ { a } \over { b } }
\sqrt 3
\sqrt {3}
\sqrt {\dfrac {x}{y}}
\sqrt[x] {\dfrac {a}{b}}
\frac {\sqrt{3}}{2}
\dfrac {\sqrt{9}}{\sqrt[8]{x}}
$$

##### 字体
```md
$$
Helloworld\\
\mathbb Helloworld\\
\Bbb Helloworld\\
\Bbb CHNQRZ\\
\mathbf Helloworld\\
\mathtt Helloworld\\
\mathrm Helloworld\\
\mathscr Helloworld\\
\mathfrak Helloworld\\
$$
```

$$
Helloworld\\
\mathbb Helloworld\\
\Bbb Helloworld\\
\Bbb CHNQRZ\\
\mathbf Helloworld\\
\mathtt Helloworld\\
\mathrm Helloworld\\
\mathscr Helloworld\\
\mathfrak Helloworld\\
$$

##### 特殊符号
```md
$$
\sin x\\
\arctan_x\\
\lim_{x\to 0}f(x)\\
\lt\gt\le\ge\neq\not\lt\not\gt\not\le\not\ge\\
\times\div\pm\mp\cdot\\
(a \pm b)^2=a^2 \pm 2ab+b^2\\
(a\pm b)^3=(a\pm b)\cdot(a^2\mp ab+b^2)\\
\cup\cap\setminus\subset\subseteq\subsetneq\supset\in\notin\emptyset\varnothing\\
\binom{n+1}{2k}{n+1 \choose 2k}\\
\to\leftarrow\rightarrow\Rightarrow\Leftarrow\mapsto\\
\land\lor\lnot\forall\exists\top\bot\vdash\vDash\\
\star\ast\oplus\circ\bullet\\
\approx\sim\cong\equiv\prec\\
\infty\aleph_o\nabla\partial\Im\Re\ell\\
a \equiv b \pmod n\\
1+2+3+\ldots+(n-1)+n\\
1+2+3+\cdots+(n-1)+n\\
\epsilon\varepsilon\phi\varphi
$$
```

$$
\sin x\\
\arctan_x\\
\lim_{x\to 0}f(x)\\
\lt\gt\le\ge\neq\not\lt\not\gt\not\le\not\ge\\
\times\div\pm\mp\cdot\\
(a \pm b)^2=a^2 \pm 2ab+b^2\\
(a\pm b)^3=(a\pm b)\cdot(a^2\mp ab+b^2)\\
\cup\cap\setminus\subset\subseteq\subsetneq\supset\in\notin\emptyset\varnothing\\
\binom{n+1}{2k}{n+1 \choose 2k}\\
\to\leftarrow\rightarrow\Rightarrow\Leftarrow\mapsto\\
\land\lor\lnot\forall\exists\top\bot\vdash\vDash\\
\star\ast\oplus\circ\bullet\\
\approx\sim\cong\equiv\prec\\
\infty\aleph_o\nabla\partial\Im\Re\ell\\
a \equiv b \pmod n\\
1+2+3+\ldots+(n-1)+n\\
1+2+3+\cdots+(n-1)+n\\
\epsilon\varepsilon\phi\varphi
$$

##### 上下标与空间
```md
$$
\hat x
\hat {xx}
\widehat {xx}\\
\overline x\\
\overline {xx}\\
\vec a
\vec {aa}
\overrightarrow a
\overrightarrow {aa}\\
\dot x\\
\dot xx\\
\dot {xx}\\
\ddot x\\
\ddot {xx}\\
\_
\&

\backslash
\verb|\|
\setminus\\
\%\\
ab\\
a b\\
a \ b\\
a \ \ b\\
a \ \ \ \ \ b\\
a \quad b\\
a \qquad b\\
\text{Hello world!}
$$
$hello
$hello$
$\$$
$\tag{hello world}$
```

$$
\hat x
\hat {xx}
\widehat {xx}\\
\overline x\\
\overline {xx}\\
\vec a
\vec {aa}
\overrightarrow a
\overrightarrow {aa}\\
\dot x\\
\dot xx\\
\dot {xx}\\
\ddot x\\
\ddot {xx}\\
\_
\&

\backslash
\verb|\|
\setminus\\
\%\\
ab\\
a b\\
a \ b\\
a \ \ b\\
a \ \ \ \ \ b\\
a \quad b\\
a \qquad b\\
\text{Hello world!}
$$

##### 表格与矩阵
```md
$$
\begin{array}{|c|c|c|clr|}
\hline
n & Left & Center & Right\\
\hline
1 & 0.24 & 1 & 125\\
\hline
2 & -1 & 189 & -8\\
\hline
3 & -20 & 2000 & 1+10i\\
\hline
\end{array}
$$

$$
\begin{matrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{matrix}\\
\left(
\begin{matrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{matrix}
\right)\\
\left\{
\begin{matrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{matrix}
\right\}\\
\begin{pmatrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{pmatrix}\\
\begin{bmatrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{bmatrix}\\
\begin{Bmatrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{Bmatrix}\\
\begin{vmatrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{vmatrix}\\
\begin{Vmatrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{Vmatrix}
$$

$$
\left(
\begin{matrix}
1 & a_1 & a_1^2 & \cdots & a_1^n\\
1 & a_2 & a_2^2 & \cdots & a_2^n\\
\vdots & \vdots & \vdots & \ddots & \vdots\\
1 & a_m & a_m^2 &  \cdots & a_m^n\\
\end{matrix}
\right)\\
$$

$$
\left[
\begin{array}{cc|c}
1 & 2 & 3\\
4 & 5 & 6\\
\end{array}
\right]\\
$$
```

$$
\begin{array}{|c|c|c|clr|}
\hline
n & Left & Center & Right\\
\hline
1 & 0.24 & 1 & 125\\
\hline
2 & -1 & 189 & -8\\
\hline
3 & -20 & 2000 & 1+10i\\
\hline
\end{array}
$$

$$
\begin{matrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{matrix}\\
\left(
\begin{matrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{matrix}
\right)\\
\left\{
\begin{matrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{matrix}
\right\}\\
\begin{pmatrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{pmatrix}\\
\begin{bmatrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{bmatrix}\\
\begin{Bmatrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{Bmatrix}\\
\begin{vmatrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{vmatrix}\\
\begin{Vmatrix}
1 & 2 & 3\\
x & y & z\\
a^2 & b_4 & \sqrt{c} \\
\end{Vmatrix}
$$

$$
\left(
\begin{matrix}
1 & a_1 & a_1^2 & \cdots & a_1^n\\
1 & a_2 & a_2^2 & \cdots & a_2^n\\
\vdots & \vdots & \vdots & \ddots & \vdots\\
1 & a_m & a_m^2 &  \cdots & a_m^n\\
\end{matrix}
\right)\\
$$

$$
\left[
\begin{array}{cc|c}
1 & 2 & 3\\
4 & 5 & 6\\
\end{array}
\right]\\
$$

##### 对齐
```md
$$
\begin{align}
\sqrt{37}&=\sqrt{\dfrac{73^2-1}{12^2}}\tag{1}\\
&=\sqrt{\dfrac{73^2}{12^2} \cdot \dfrac{73^2-1}{73^2}}\tag{2}\\
&=\dfrac{73}{12} \sqrt{1-\dfrac{1}{73^2}}\tag{3}\\
&\approx \dfrac{73}{12}\left( 1-\dfrac{1}{2 \cdot 73^2} \right)\tag{4}\\
\end{align}
$$
$$
f(n)=\left\{
\dfrac{n}{2}\\
3n+1
\right.\\
$$

$$
f(n)=\left\{
\begin{array}{}
2n,  &\text{if }n\text{ is even}\\
3n+1, &\text{if }n\text{ is odd}\\
\end{array}
\right.
$$
$$
\left\{
\begin{array}{}
\begin{aligned}
a_1x+b_1y+c_1z&=d_1+e_1\\
a_2x+b_2y&=d_2\\
a_3x+b_3y+c_3z&=d_3
\end{aligned}
\end{array}\\
\right.
$$
```
$$
\begin{align}
\sqrt{37}&=\sqrt{\dfrac{73^2-1}{12^2}}\tag{1}\\
&=\sqrt{\dfrac{73^2}{12^2} \cdot \dfrac{73^2-1}{73^2}}\tag{2}\\
&=\dfrac{73}{12} \sqrt{1-\dfrac{1}{73^2}}\tag{3}\\
&\approx \dfrac{73}{12}\left( 1-\dfrac{1}{2 \cdot 73^2} \right)\tag{4}\\
\end{align}
$$
$$
f(n)=\left\{
\dfrac{n}{2}\\
3n+1
\right.\\
$$

$$
f(n)=\left\{
\begin{array}{}
2n,  &\text{if }n\text{ is even}\\
3n+1, &\text{if }n\text{ is odd}\\
\end{array}
\right.
$$
$$
\left\{
\begin{array}{}
\begin{aligned}
a_1x+b_1y+c_1z&=d_1+e_1\\
a_2x+b_2y&=d_2\\
a_3x+b_3y+c_3z&=d_3
\end{aligned}
\end{array}\\
\right.
$$
##### 引用
```md
$$
a:=x^2-y^3\tag{2}\label{}\\
%a+y^3\stackrel{\eqref{1}}=x^2\\
$$
```
$$
a:=x^2-y^3\tag{2}\label{}\\
%a+y^3\stackrel{\eqref{1}}=x^2\\
$$

### 上标与下标
```md
还记得1^st^的化学方程式吗？
2KMnO~4~=K~2~MnO~4~+MnO~2~+O~2~ ↑
```
还记得1^st^的化学方程式吗？
2KMnO~4~=K~2~MnO~4~+MnO~2~+O~2~ ↑

### 提示信息
```md
::: alert-info
北京第三区交通委提醒您
:::

::: alert-danger
道路千万条，安全第一条。行车不规范，亲人两行泪。
:::
```
::: alert-info
北京第三区交通委提醒您
:::

::: alert-danger
道路千万条，安全第一条。行车不规范，亲人两行泪。
:::

> 可选的类型有
> alert-primary
> alert-secondary
> alert-success
> alert-info
> alert-warning
> alert-danger
> alert-light
> alert-dark

### 换行与段落
在传统的Markdown语法中，回车不是换行，是寂寞。要想显示一个换行，必须先输入两个空格再按回车。
这一相当不合理（自认为）的设计导致许多编辑器都会进行拓展，把回车转化为换行。

如果需要一个新的段落，通常的方法是插入一个空行。空行也可以用来结束块元素（如列表，代码块，块引用）。

### 表情
以下内容来自[GitHub emoj-list](https://github.com/caiyongji/emoji-list)
#### 人物

| :bowtie: `:bowtie:` | :smile: `:smile:` | :laughing: `:laughing:` |
|---|---|---|
| :blush: `:blush:` | :smiley: `:smiley:` | :relaxed: `:relaxed:` |
| :smirk: `:smirk:` | :heart_eyes: `:heart_eyes:` | :kissing_heart: `:kissing_heart:` |
| :kissing_closed_eyes: `:kissing_closed_eyes:` | :flushed: `:flushed:` | :relieved: `:relieved:` |
| :satisfied: `:satisfied:` | :grin: `:grin:` | :wink: `:wink:` |
| :stuck_out_tongue_winking_eye: `:stuck_out_tongue_winking_eye:` | :stuck_out_tongue_closed_eyes: `:stuck_out_tongue_closed_eyes:` | :grinning: `:grinning:` |
| :kissing: `:kissing:` | :kissing_smiling_eyes: `:kissing_smiling_eyes:` | :stuck_out_tongue: `:stuck_out_tongue:` |
| :sleeping: `:sleeping:` | :worried: `:worried:` | :frowning: `:frowning:` |
| :anguished: `:anguished:` | :open_mouth: `:open_mouth:` | :grimacing: `:grimacing:` |
| :confused: `:confused:` | :hushed: `:hushed:` | :expressionless: `:expressionless:` |
| :unamused: `:unamused:` | :sweat_smile: `:sweat_smile:` | :sweat: `:sweat:` |
| :disappointed_relieved: `:disappointed_relieved:` | :weary: `:weary:` | :pensive: `:pensive:` |
| :disappointed: `:disappointed:` | :confounded: `:confounded:` | :fearful: `:fearful:` |
| :cold_sweat: `:cold_sweat:` | :persevere: `:persevere:` | :cry: `:cry:` |
| :sob: `:sob:` | :joy: `:joy:` | :astonished: `:astonished:` |
| :scream: `:scream:` | :neckbeard: `:neckbeard:` | :tired_face: `:tired_face:` |
| :angry: `:angry:` | :rage: `:rage:` | :triumph: `:triumph:` |
| :sleepy: `:sleepy:` | :yum: `:yum:` | :mask: `:mask:` |
| :sunglasses: `:sunglasses:` | :dizzy_face: `:dizzy_face:` | :imp: `:imp:` |
| :smiling_imp: `:smiling_imp:` | :neutral_face: `:neutral_face:` | :no_mouth: `:no_mouth:` |
| :innocent: `:innocent:` | :alien: `:alien:` | :yellow_heart: `:yellow_heart:` |
| :blue_heart: `:blue_heart:` | :purple_heart: `:purple_heart:` | :heart: `:heart:` |
| :green_heart: `:green_heart:` | :broken_heart: `:broken_heart:` | :heartbeat: `:heartbeat:` |
| :heartpulse: `:heartpulse:` | :two_hearts: `:two_hearts:` | :revolving_hearts: `:revolving_hearts:` |
| :cupid: `:cupid:` | :sparkling_heart: `:sparkling_heart:` | :sparkles: `:sparkles:` |
| :star: `:star:` | :star2: `:star2:` | :dizzy: `:dizzy:` |
| :boom: `:boom:` | :collision: `:collision:` | :anger: `:anger:` |
| :exclamation: `:exclamation:` | :question: `:question:` | :grey_exclamation: `:grey_exclamation:` |
| :grey_question: `:grey_question:` | :zzz: `:zzz:` | :dash: `:dash:` |
| :sweat_drops: `:sweat_drops:` | :notes: `:notes:` | :musical_note: `:musical_note:` |
| :fire: `:fire:` | :hankey: `:hankey:` | :poop: `:poop:` |
| :shit: `:shit:` | :+1: `:+1:` | :thumbsup: `:thumbsup:` |
| :-1: `:-1:` | :thumbsdown: `:thumbsdown:` | :ok_hand: `:ok_hand:` |
| :punch: `:punch:` | :facepunch: `:facepunch:` | :fist: `:fist:` |
| :v: `:v:` | :wave: `:wave:` | :hand: `:hand:` |
| :raised_hand: `:raised_hand:` | :open_hands: `:open_hands:` | :point_up: `:point_up:` |
| :point_down: `:point_down:` | :point_left: `:point_left:` | :point_right: `:point_right:` |
| :raised_hands: `:raised_hands:` | :pray: `:pray:` | :point_up_2: `:point_up_2:` |
| :clap: `:clap:` | :muscle: `:muscle:` | :metal: `:metal:` |
| :fu: `:fu:` | :walking: `:walking:` | :runner: `:runner:` |
| :running: `:running:` | :couple: `:couple:` | :family: `:family:` |
| :two_men_holding_hands: `:two_men_holding_hands:` | :two_women_holding_hands: `:two_women_holding_hands:` | :dancer: `:dancer:` |
| :dancers: `:dancers:` | :ok_woman: `:ok_woman:` | :no_good: `:no_good:` |
| :information_desk_person: `:information_desk_person:` | :raising_hand: `:raising_hand:` | :bride_with_veil: `:bride_with_veil:` |
| :person_with_pouting_face: `:person_with_pouting_face:` | :person_frowning: `:person_frowning:` | :bow: `:bow:` |
| :couplekiss: `:couplekiss:` | :couple_with_heart: `:couple_with_heart:` | :massage: `:massage:` |
| :haircut: `:haircut:` | :nail_care: `:nail_care:` | :boy: `:boy:` |
| :girl: `:girl:` | :woman: `:woman:` | :man: `:man:` |
| :baby: `:baby:` | :older_woman: `:older_woman:` | :older_man: `:older_man:` |
| :person_with_blond_hair: `:person_with_blond_hair:` | :man_with_gua_pi_mao: `:man_with_gua_pi_mao:` | :man_with_turban: `:man_with_turban:` |
| :construction_worker: `:construction_worker:` | :cop: `:cop:` | :angel: `:angel:` |
| :princess: `:princess:` | :smiley_cat: `:smiley_cat:` | :smile_cat: `:smile_cat:` |
| :heart_eyes_cat: `:heart_eyes_cat:` | :kissing_cat: `:kissing_cat:` | :smirk_cat: `:smirk_cat:` |
| :scream_cat: `:scream_cat:` | :crying_cat_face: `:crying_cat_face:` | :joy_cat: `:joy_cat:` |
| :pouting_cat: `:pouting_cat:` | :japanese_ogre: `:japanese_ogre:` | :japanese_goblin: `:japanese_goblin:` |
| :see_no_evil: `:see_no_evil:` | :hear_no_evil: `:hear_no_evil:` | :speak_no_evil: `:speak_no_evil:` |
| :guardsman: `:guardsman:` | :skull: `:skull:` | :feet: `:feet:` |
| :lips: `:lips:` | :kiss: `:kiss:` | :droplet: `:droplet:` |
| :ear: `:ear:` | :eyes: `:eyes:` | :nose: `:nose:` |
| :tongue: `:tongue:` | :love_letter: `:love_letter:` | :bust_in_silhouette: `:bust_in_silhouette:` |
| :busts_in_silhouette: `:busts_in_silhouette:` | :speech_balloon: `:speech_balloon:` | :thought_balloon: `:thought_balloon:` |
| :feelsgood: `:feelsgood:` | :finnadie: `:finnadie:` | :goberserk: `:goberserk:` |
| :godmode: `:godmode:` | :hurtrealbad: `:hurtrealbad:` | :rage1: `:rage1:` |
| :rage2: `:rage2:` | :rage3: `:rage3:` | :rage4: `:rage4:` |
| :suspect: `:suspect:` | :trollface: `:trollface:` | 

#### 自然

| :sunny: `:sunny:` | :umbrella: `:umbrella:` | :cloud: `:cloud:` |
|---|---|---|
| :snowflake: `:snowflake:` | :snowman: `:snowman:` | :zap: `:zap:` |
| :cyclone: `:cyclone:` | :foggy: `:foggy:` | :ocean: `:ocean:` |
| :cat: `:cat:` | :dog: `:dog:` | :mouse: `:mouse:` |
| :hamster: `:hamster:` | :rabbit: `:rabbit:` | :wolf: `:wolf:` |
| :frog: `:frog:` | :tiger: `:tiger:` | :koala: `:koala:` |
| :bear: `:bear:` | :pig: `:pig:` | :pig_nose: `:pig_nose:` |
| :cow: `:cow:` | :boar: `:boar:` | :monkey_face: `:monkey_face:` |
| :monkey: `:monkey:` | :horse: `:horse:` | :racehorse: `:racehorse:` |
| :camel: `:camel:` | :sheep: `:sheep:` | :elephant: `:elephant:` |
| :panda_face: `:panda_face:` | :snake: `:snake:` | :bird: `:bird:` |
| :baby_chick: `:baby_chick:` | :hatched_chick: `:hatched_chick:` | :hatching_chick: `:hatching_chick:` |
| :chicken: `:chicken:` | :penguin: `:penguin:` | :turtle: `:turtle:` |
| :bug: `:bug:` | :honeybee: `:honeybee:` | :ant: `:ant:` |
| :beetle: `:beetle:` | :snail: `:snail:` | :octopus: `:octopus:` |
| :tropical_fish: `:tropical_fish:` | :fish: `:fish:` | :whale: `:whale:` |
| :whale2: `:whale2:` | :dolphin: `:dolphin:` | :cow2: `:cow2:` |
| :ram: `:ram:` | :rat: `:rat:` | :water_buffalo: `:water_buffalo:` |
| :tiger2: `:tiger2:` | :rabbit2: `:rabbit2:` | :dragon: `:dragon:` |
| :goat: `:goat:` | :rooster: `:rooster:` | :dog2: `:dog2:` |
| :pig2: `:pig2:` | :mouse2: `:mouse2:` | :ox: `:ox:` |
| :dragon_face: `:dragon_face:` | :blowfish: `:blowfish:` | :crocodile: `:crocodile:` |
| :dromedary_camel: `:dromedary_camel:` | :leopard: `:leopard:` | :cat2: `:cat2:` |
| :poodle: `:poodle:` | :paw_prints: `:paw_prints:` | :bouquet: `:bouquet:` |
| :cherry_blossom: `:cherry_blossom:` | :tulip: `:tulip:` | :four_leaf_clover: `:four_leaf_clover:` |
| :rose: `:rose:` | :sunflower: `:sunflower:` | :hibiscus: `:hibiscus:` |
| :maple_leaf: `:maple_leaf:` | :leaves: `:leaves:` | :fallen_leaf: `:fallen_leaf:` |
| :herb: `:herb:` | :mushroom: `:mushroom:` | :cactus: `:cactus:` |
| :palm_tree: `:palm_tree:` | :evergreen_tree: `:evergreen_tree:` | :deciduous_tree: `:deciduous_tree:` |
| :chestnut: `:chestnut:` | :seedling: `:seedling:` | :blossom: `:blossom:` |
| :ear_of_rice: `:ear_of_rice:` | :shell: `:shell:` | :globe_with_meridians: `:globe_with_meridians:` |
| :sun_with_face: `:sun_with_face:` | :full_moon_with_face: `:full_moon_with_face:` | :new_moon_with_face: `:new_moon_with_face:` |
| :new_moon: `:new_moon:` | :waxing_crescent_moon: `:waxing_crescent_moon:` | :first_quarter_moon: `:first_quarter_moon:` |
| :waxing_gibbous_moon: `:waxing_gibbous_moon:` | :full_moon: `:full_moon:` | :waning_gibbous_moon: `:waning_gibbous_moon:` |
| :last_quarter_moon: `:last_quarter_moon:` | :waning_crescent_moon: `:waning_crescent_moon:` | :last_quarter_moon_with_face: `:last_quarter_moon_with_face:` |
| :first_quarter_moon_with_face: `:first_quarter_moon_with_face:` | :moon: `:moon:` | :earth_africa: `:earth_africa:` |
| :earth_americas: `:earth_americas:` | :earth_asia: `:earth_asia:` | :volcano: `:volcano:` |
| :milky_way: `:milky_way:` | :partly_sunny: `:partly_sunny:` | :octocat: `:octocat:` |
| :squirrel: `:squirrel:` |

#### 事物

| :bamboo: `:bamboo:` | :gift_heart: `:gift_heart:` | :dolls: `:dolls:` |
|---|---|---|
| :school_satchel: `:school_satchel:` | :mortar_board: `:mortar_board:` | :flags: `:flags:` |
| :fireworks: `:fireworks:` | :sparkler: `:sparkler:` | :wind_chime: `:wind_chime:` |
| :rice_scene: `:rice_scene:` | :jack_o_lantern: `:jack_o_lantern:` | :ghost: `:ghost:` |
| :santa: `:santa:` | :christmas_tree: `:christmas_tree:` | :gift: `:gift:` |
| :bell: `:bell:` | :no_bell: `:no_bell:` | :tanabata_tree: `:tanabata_tree:` |
| :tada: `:tada:` | :confetti_ball: `:confetti_ball:` | :balloon: `:balloon:` |
| :crystal_ball: `:crystal_ball:` | :cd: `:cd:` | :dvd: `:dvd:` |
| :floppy_disk: `:floppy_disk:` | :camera: `:camera:` | :video_camera: `:video_camera:` |
| :movie_camera: `:movie_camera:` | :computer: `:computer:` | :tv: `:tv:` |
| :iphone: `:iphone:` | :phone: `:phone:` | :telephone: `:telephone:` |
| :telephone_receiver: `:telephone_receiver:` | :pager: `:pager:` | :fax: `:fax:` |
| :minidisc: `:minidisc:` | :vhs: `:vhs:` | :sound: `:sound:` |
| :speaker: `:speaker:` | :mute: `:mute:` | :loudspeaker: `:loudspeaker:` |
| :mega: `:mega:` | :hourglass: `:hourglass:` | :hourglass_flowing_sand: `:hourglass_flowing_sand:` |
| :alarm_clock: `:alarm_clock:` | :watch: `:watch:` | :radio: `:radio:` |
| :satellite: `:satellite:` | :loop: `:loop:` | :mag: `:mag:` |
| :mag_right: `:mag_right:` | :unlock: `:unlock:` | :lock: `:lock:` |
| :lock_with_ink_pen: `:lock_with_ink_pen:` | :closed_lock_with_key: `:closed_lock_with_key:` | :key: `:key:` |
| :bulb: `:bulb:` | :flashlight: `:flashlight:` | :high_brightness: `:high_brightness:` |
| :low_brightness: `:low_brightness:` | :electric_plug: `:electric_plug:` | :battery: `:battery:` |
| :calling: `:calling:` | :email: `:email:` | :mailbox: `:mailbox:` |
| :postbox: `:postbox:` | :bath: `:bath:` | :bathtub: `:bathtub:` |
| :shower: `:shower:` | :toilet: `:toilet:` | :wrench: `:wrench:` |
| :nut_and_bolt: `:nut_and_bolt:` | :hammer: `:hammer:` | :seat: `:seat:` |
| :moneybag: `:moneybag:` | :yen: `:yen:` | :dollar: `:dollar:` |
| :pound: `:pound:` | :euro: `:euro:` | :credit_card: `:credit_card:` |
| :money_with_wings: `:money_with_wings:` | :e-mail: `:e-mail:` | :inbox_tray: `:inbox_tray:` |
| :outbox_tray: `:outbox_tray:` | :envelope: `:envelope:` | :incoming_envelope: `:incoming_envelope:` |
| :postal_horn: `:postal_horn:` | :mailbox_closed: `:mailbox_closed:` | :mailbox_with_mail: `:mailbox_with_mail:` |
| :mailbox_with_no_mail: `:mailbox_with_no_mail:` | :door: `:door:` | :smoking: `:smoking:` |
| :bomb: `:bomb:` | :gun: `:gun:` | :hocho: `:hocho:` |
| :pill: `:pill:` | :syringe: `:syringe:` | :page_facing_up: `:page_facing_up:` |
| :page_with_curl: `:page_with_curl:` | :bookmark_tabs: `:bookmark_tabs:` | :bar_chart: `:bar_chart:` |
| :chart_with_upwards_trend: `:chart_with_upwards_trend:` | :chart_with_downwards_trend: `:chart_with_downwards_trend:` | :scroll: `:scroll:` |
| :clipboard: `:clipboard:` | :calendar: `:calendar:` | :date: `:date:` |
| :card_index: `:card_index:` | :file_folder: `:file_folder:` | :open_file_folder: `:open_file_folder:` |
| :scissors: `:scissors:` | :pushpin: `:pushpin:` | :paperclip: `:paperclip:` |
| :black_nib: `:black_nib:` | :pencil2: `:pencil2:` | :straight_ruler: `:straight_ruler:` |
| :triangular_ruler: `:triangular_ruler:` | :closed_book: `:closed_book:` | :green_book: `:green_book:` |
| :blue_book: `:blue_book:` | :orange_book: `:orange_book:` | :notebook: `:notebook:` |
| :notebook_with_decorative_cover: `:notebook_with_decorative_cover:` | :ledger: `:ledger:` | :books: `:books:` |
| :bookmark: `:bookmark:` | :name_badge: `:name_badge:` | :microscope: `:microscope:` |
| :telescope: `:telescope:` | :newspaper: `:newspaper:` | :football: `:football:` |
| :basketball: `:basketball:` | :soccer: `:soccer:` | :baseball: `:baseball:` |
| :tennis: `:tennis:` | :8ball: `:8ball:` | :rugby_football: `:rugby_football:` |
| :bowling: `:bowling:` | :golf: `:golf:` | :mountain_bicyclist: `:mountain_bicyclist:` |
| :bicyclist: `:bicyclist:` | :horse_racing: `:horse_racing:` | :snowboarder: `:snowboarder:` |
| :swimmer: `:swimmer:` | :surfer: `:surfer:` | :ski: `:ski:` |
| :spades: `:spades:` | :hearts: `:hearts:` | :clubs: `:clubs:` |
| :diamonds: `:diamonds:` | :gem: `:gem:` | :ring: `:ring:` |
| :trophy: `:trophy:` | :musical_score: `:musical_score:` | :musical_keyboard: `:musical_keyboard:` |
| :violin: `:violin:` | :space_invader: `:space_invader:` | :video_game: `:video_game:` |
| :black_joker: `:black_joker:` | :flower_playing_cards: `:flower_playing_cards:` | :game_die: `:game_die:` |
| :dart: `:dart:` | :mahjong: `:mahjong:` | :clapper: `:clapper:` |
| :memo: `:memo:` | :pencil: `:pencil:` | :book: `:book:` |
| :art: `:art:` | :microphone: `:microphone:` | :headphones: `:headphones:` |
| :trumpet: `:trumpet:` | :saxophone: `:saxophone:` | :guitar: `:guitar:` |
| :shoe: `:shoe:` | :sandal: `:sandal:` | :high_heel: `:high_heel:` |
| :lipstick: `:lipstick:` | :boot: `:boot:` | :shirt: `:shirt:` |
| :tshirt: `:tshirt:` | :necktie: `:necktie:` | :womans_clothes: `:womans_clothes:` |
| :dress: `:dress:` | :running_shirt_with_sash: `:running_shirt_with_sash:` | :jeans: `:jeans:` |
| :kimono: `:kimono:` | :bikini: `:bikini:` | :ribbon: `:ribbon:` |
| :tophat: `:tophat:` | :crown: `:crown:` | :womans_hat: `:womans_hat:` |
| :mans_shoe: `:mans_shoe:` | :closed_umbrella: `:closed_umbrella:` | :briefcase: `:briefcase:` |
| :handbag: `:handbag:` | :pouch: `:pouch:` | :purse: `:purse:` |
| :eyeglasses: `:eyeglasses:` | :fishing_pole_and_fish: `:fishing_pole_and_fish:` | :coffee: `:coffee:` |
| :tea: `:tea:` | :sake: `:sake:` | :baby_bottle: `:baby_bottle:` |
| :beer: `:beer:` | :beers: `:beers:` | :cocktail: `:cocktail:` |
| :tropical_drink: `:tropical_drink:` | :wine_glass: `:wine_glass:` | :fork_and_knife: `:fork_and_knife:` |
| :pizza: `:pizza:` | :hamburger: `:hamburger:` | :fries: `:fries:` |
| :poultry_leg: `:poultry_leg:` | :meat_on_bone: `:meat_on_bone:` | :spaghetti: `:spaghetti:` |
| :curry: `:curry:` | :fried_shrimp: `:fried_shrimp:` | :bento: `:bento:` |
| :sushi: `:sushi:` | :fish_cake: `:fish_cake:` | :rice_ball: `:rice_ball:` |
| :rice_cracker: `:rice_cracker:` | :rice: `:rice:` | :ramen: `:ramen:` |
| :stew: `:stew:` | :oden: `:oden:` | :dango: `:dango:` |
| :egg: `:egg:` | :bread: `:bread:` | :doughnut: `:doughnut:` |
| :custard: `:custard:` | :icecream: `:icecream:` | :ice_cream: `:ice_cream:` |
| :shaved_ice: `:shaved_ice:` | :birthday: `:birthday:` | :cake: `:cake:` |
| :cookie: `:cookie:` | :chocolate_bar: `:chocolate_bar:` | :candy: `:candy:` |
| :lollipop: `:lollipop:` | :honey_pot: `:honey_pot:` | :apple: `:apple:` |
| :green_apple: `:green_apple:` | :tangerine: `:tangerine:` | :lemon: `:lemon:` |
| :cherries: `:cherries:` | :grapes: `:grapes:` | :watermelon: `:watermelon:` |
| :strawberry: `:strawberry:` | :peach: `:peach:` | :melon: `:melon:` |
| :banana: `:banana:` | :pear: `:pear:` | :pineapple: `:pineapple:` |
| :sweet_potato: `:sweet_potato:` | :eggplant: `:eggplant:` | :tomato: `:tomato:` |
| :corn: `:corn:` |

#### 地点

| :house: `:house:` | :house_with_garden: `:house_with_garden:` | :school: `:school:` |
|---|---|---|
| :office: `:office:` | :post_office: `:post_office:` | :hospital: `:hospital:` |
| :bank: `:bank:` | :convenience_store: `:convenience_store:` | :love_hotel: `:love_hotel:` |
| :hotel: `:hotel:` | :wedding: `:wedding:` | :church: `:church:` |
| :department_store: `:department_store:` | :european_post_office: `:european_post_office:` | :city_sunrise: `:city_sunrise:` |
| :city_sunset: `:city_sunset:` | :japanese_castle: `:japanese_castle:` | :european_castle: `:european_castle:` |
| :tent: `:tent:` | :factory: `:factory:` | :tokyo_tower: `:tokyo_tower:` |
| :japan: `:japan:` | :mount_fuji: `:mount_fuji:` | :sunrise_over_mountains: `:sunrise_over_mountains:` |
| :sunrise: `:sunrise:` | :stars: `:stars:` | :statue_of_liberty: `:statue_of_liberty:` |
| :bridge_at_night: `:bridge_at_night:` | :carousel_horse: `:carousel_horse:` | :rainbow: `:rainbow:` |
| :ferris_wheel: `:ferris_wheel:` | :fountain: `:fountain:` | :roller_coaster: `:roller_coaster:` |
| :ship: `:ship:` | :speedboat: `:speedboat:` | :boat: `:boat:` |
| :sailboat: `:sailboat:` | :rowboat: `:rowboat:` | :anchor: `:anchor:` |
| :rocket: `:rocket:` | :airplane: `:airplane:` | :helicopter: `:helicopter:` |
| :steam_locomotive: `:steam_locomotive:` | :tram: `:tram:` | :mountain_railway: `:mountain_railway:` |
| :bike: `:bike:` | :aerial_tramway: `:aerial_tramway:` | :suspension_railway: `:suspension_railway:` |
| :mountain_cableway: `:mountain_cableway:` | :tractor: `:tractor:` | :blue_car: `:blue_car:` |
| :oncoming_automobile: `:oncoming_automobile:` | :car: `:car:` | :red_car: `:red_car:` |
| :taxi: `:taxi:` | :oncoming_taxi: `:oncoming_taxi:` | :articulated_lorry: `:articulated_lorry:` |
| :bus: `:bus:` | :oncoming_bus: `:oncoming_bus:` | :rotating_light: `:rotating_light:` |
| :police_car: `:police_car:` | :oncoming_police_car: `:oncoming_police_car:` | :fire_engine: `:fire_engine:` |
| :ambulance: `:ambulance:` | :minibus: `:minibus:` | :truck: `:truck:` |
| :train: `:train:` | :station: `:station:` | :train2: `:train2:` |
| :bullettrain_front: `:bullettrain_front:` | :bullettrain_side: `:bullettrain_side:` | :light_rail: `:light_rail:` |
| :monorail: `:monorail:` | :railway_car: `:railway_car:` | :trolleybus: `:trolleybus:` |
| :ticket: `:ticket:` | :fuelpump: `:fuelpump:` | :vertical_traffic_light: `:vertical_traffic_light:` |
| :traffic_light: `:traffic_light:` | :warning: `:warning:` | :construction: `:construction:` |
| :beginner: `:beginner:` | :atm: `:atm:` | :slot_machine: `:slot_machine:` |
| :busstop: `:busstop:` | :barber: `:barber:` | :hotsprings: `:hotsprings:` |
| :checkered_flag: `:checkered_flag:` | :crossed_flags: `:crossed_flags:` | :izakaya_lantern: `:izakaya_lantern:` |
| :moyai: `:moyai:` | :circus_tent: `:circus_tent:` | :performing_arts: `:performing_arts:` |
| :round_pushpin: `:round_pushpin:` | :triangular_flag_on_post: `:triangular_flag_on_post:` | :jp: `:jp:` |
| :kr: `:kr:` | :cn: `:cn:` | :us: `:us:` |
| :fr: `:fr:` | :es: `:es:` | :it: `:it:` |
| :ru: `:ru:` | :gb: `:gb:` | :uk: `:uk:` |
| :de: `:de:` |

#### 符号

|                             :one: `:one:`                             |                         :two: `:two:`                         |                     :three: `:three:`                     |
| --------------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------- |
| :four: `:four:`                                                       | :five: `:five:`                                               | :six: `:six:`                                             |
| :seven: `:seven:`                                                     | :eight: `:eight:`                                             | :nine: `:nine:`                                           |
| :keycap_ten: `:keycap_ten:`                                           | :1234: `:1234:`                                               | :zero: `:zero:`                                           |
| :hash: `:hash:`                                                       | :symbols: `:symbols:`                                         | :arrow_backward: `:arrow_backward:`                       |
| :arrow_down: `:arrow_down:`                                           | :arrow_forward: `:arrow_forward:`                             | :arrow_left: `:arrow_left:`                               |
| :capital_abcd: `:capital_abcd:`                                       | :abcd: `:abcd:`                                               | :abc: `:abc:`                                             |
| :arrow_lower_left: `:arrow_lower_left:`                               | :arrow_lower_right: `:arrow_lower_right:`                     | :arrow_right: `:arrow_right:`                             |
| :arrow_up: `:arrow_up:`                                               | :arrow_upper_left: `:arrow_upper_left:`                       | :arrow_upper_right: `:arrow_upper_right:`                 |
| :arrow_double_down: `:arrow_double_down:`                             | :arrow_double_up: `:arrow_double_up:`                         | :arrow_down_small: `:arrow_down_small:`                   |
| :arrow_heading_down: `:arrow_heading_down:`                           | :arrow_heading_up: `:arrow_heading_up:`                       | :leftwards_arrow_with_hook: `:leftwards_arrow_with_hook:` |
| :arrow_right_hook: `:arrow_right_hook:`                               | :left_right_arrow: `:left_right_arrow:`                       | :arrow_up_down: `:arrow_up_down:`                         |
| :arrow_up_small: `:arrow_up_small:`                                   | :arrows_clockwise: `:arrows_clockwise:`                       | :arrows_counterclockwise: `:arrows_counterclockwise:`     |
| :rewind: `:rewind:`                                                   | :fast_forward: `:fast_forward:`                               | :information_source: `:information_source:`               |
| :ok: `:ok:`                                                           | :twisted_rightwards_arrows: `:twisted_rightwards_arrows:`     | :repeat: `:repeat:`                                       |
| :repeat_one: `:repeat_one:`                                           | :new: `:new:`                                                 | :top: `:top:`                                             |
| :up: `:up:`                                                           | :cool: `:cool:`                                               | :free: `:free:`                                           |
| :ng: `:ng:`                                                           | :cinema: `:cinema:`                                           | :koko: `:koko:`                                           |
| :signal_strength: `:signal_strength:`                                 | :u5272: `:u5272:`                                             | :u5408: `:u5408:`                                         |
| :u55b6: `:u55b6:`                                                     | :u6307: `:u6307:`                                             | :u6708: `:u6708:`                                         |
| :u6709: `:u6709:`                                                     | :u6e80: `:u6e80:`                                             | :u7121: `:u7121:`                                         |
| :u7533: `:u7533:`                                                     | :u7a7a: `:u7a7a:`                                             | :u7981: `:u7981:`                                         |
| :sa: `:sa:`                                                           | :restroom: `:restroom:`                                       | :mens: `:mens:`                                           |
| :womens: `:womens:`                                                   | :baby_symbol: `:baby_symbol:`                                 | :no_smoking: `:no_smoking:`                               |
| :parking: `:parking:`                                                 | :wheelchair: `:wheelchair:`                                   | :metro: `:metro:`                                         |
| :baggage_claim: `:baggage_claim:`                                     | :accept: `:accept:`                                           | :wc: `:wc:`                                               |
| :potable_water: `:potable_water:`                                     | :put_litter_in_its_place: `:put_litter_in_its_place:`         | :secret: `:secret:`                                       |
| :congratulations: `:congratulations:`                                 | :m: `:m:`                                                     | :passport_control: `:passport_control:`                   |
| :left_luggage: `:left_luggage:`                                       | :customs: `:customs:`                                         | :ideograph_advantage: `:ideograph_advantage:`             |
| :cl: `:cl:`                                                           | :sos: `:sos:`                                                 | :id: `:id:`                                               |
| :no_entry_sign: `:no_entry_sign:`                                     | :underage: `:underage:`                                       | :no_mobile_phones: `:no_mobile_phones:`                   |
| :do_not_litter: `:do_not_litter:`                                     | :non-potable_water: `:non-potable_water:`                     | :no_bicycles: `:no_bicycles:`                             |
| :no_pedestrians: `:no_pedestrians:`                                   | :children_crossing: `:children_crossing:`                     | :no_entry: `:no_entry:`                                   |
| :eight_spoked_asterisk: `:eight_spoked_asterisk:`                     | :eight_pointed_black_star: `:eight_pointed_black_star:`       | :heart_decoration: `:heart_decoration:`                   |
| :vs: `:vs:`                                                           | :vibration_mode: `:vibration_mode:`                           | :mobile_phone_off: `:mobile_phone_off:`                   |
| :chart: `:chart:`                                                     | :currency_exchange: `:currency_exchange:`                     | :aries: `:aries:`                                         |
| :taurus: `:taurus:`                                                   | :gemini: `:gemini:`                                           | :cancer: `:cancer:`                                       |
| :leo: `:leo:`                                                         | :virgo: `:virgo:`                                             | :libra: `:libra:`                                         |
| :scorpius: `:scorpius:`                                               | :sagittarius: `:sagittarius:`                                 | :capricorn: `:capricorn:`                                 |
| :aquarius: `:aquarius:`                                               | :pisces: `:pisces:`                                           | :ophiuchus: `:ophiuchus:`                                 |
| :six_pointed_star: `:six_pointed_star:`                               | :negative_squared_cross_mark: `:negative_squared_cross_mark:` | :a: `:a:`                                                 |
| :b: `:b:`                                                             | :ab: `:ab:`                                                   | :o2: `:o2:`                                               |
| :diamond_shape_with_a_dot_inside: `:diamond_shape_with_a_dot_inside:` | :recycle: `:recycle:`                                         | :end: `:end:`                                             |
| :on: `:on:`                                                           | :soon: `:soon:`                                               | :clock1: `:clock1:`                                       |
| :clock130: `:clock130:`                                               | :clock10: `:clock10:`                                         | :clock1030: `:clock1030:`                                 |
| :clock11: `:clock11:`                                                 | :clock1130: `:clock1130:`                                     | :clock12: `:clock12:`                                     |
| :clock1230: `:clock1230:`                                             | :clock2: `:clock2:`                                           | :clock230: `:clock230:`                                   |
| :clock3: `:clock3:`                                                   | :clock330: `:clock330:`                                       | :clock4: `:clock4:`                                       |
| :clock430: `:clock430:`                                               | :clock5: `:clock5:`                                           | :clock530: `:clock530:`                                   |
| :clock6: `:clock6:`                                                   | :clock630: `:clock630:`                                       | :clock7: `:clock7:`                                       |
| :clock730: `:clock730:`                                               | :clock8: `:clock8:`                                           | :clock830: `:clock830:`                                   |
| :clock9: `:clock9:`                                                   | :clock930: `:clock930:`                                       | :heavy_dollar_sign: `:heavy_dollar_sign:`                 |
| :copyright: `:copyright:`                                             | :registered: `:registered:`                                   | :tm: `:tm:`                                               |
| :x: `:x:`                                                             | :heavy_exclamation_mark: `:heavy_exclamation_mark:`           | :bangbang: `:bangbang:`                                   |
| :interrobang: `:interrobang:`                                         | :o: `:o:`                                                     | :heavy_multiplication_x: `:heavy_multiplication_x:`       |
| :heavy_plus_sign: `:heavy_plus_sign:`                                 | :heavy_minus_sign: `:heavy_minus_sign:`                       | :heavy_division_sign: `:heavy_division_sign:`             |
| :white_flower: `:white_flower:`                                       | :100: `:100:`                                                 | :heavy_check_mark: `:heavy_check_mark:`                   |
| :ballot_box_with_check: `:ballot_box_with_check:`                     | :radio_button: `:radio_button:`                               | :link: `:link:`                                           |
| :curly_loop: `:curly_loop:`                                           | :wavy_dash: `:wavy_dash:`                                     | :part_alternation_mark: `:part_alternation_mark:`         |
| :trident: `:trident:`                                                 | :black_square: `:black_square:`                               | :white_square: `:white_square:`                           |
| :white_check_mark: `:white_check_mark:`                               | :black_square_button: `:black_square_button:`                 | :white_square_button: `:white_square_button:`             |
| :black_circle: `:black_circle:`                                       | :white_circle: `:white_circle:`                               | :red_circle: `:red_circle:`                               |
| :large_blue_circle: `:large_blue_circle:`                             | :large_blue_diamond: `:large_blue_diamond:`                   | :large_orange_diamond: `:large_orange_diamond:`           |
| :small_blue_diamond: `:small_blue_diamond:`                           | :small_orange_diamond: `:small_orange_diamond:`               | :small_red_triangle: `:small_red_triangle:`               |
| :small_red_triangle_down: `:small_red_triangle_down:`                 | :shipit: `:shipit:`                                           |                                                           |




