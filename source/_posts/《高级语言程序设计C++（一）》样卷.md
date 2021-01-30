---
title: 《高级语言程序设计C++（一）》样卷
urlname: cppprograming-test1
categories:
  - 大学课程
  - C++程序设计
tags:
  - C++
date: 2018-12-17 16:35:23
updated: 2018-12-17 16:35:23
---
答案不一定正确，水平有限。
仅用于自己记录整理。

# 一.  单项选择题

ADB<font color=red>A</font>B DCCAD DABBD CDBDB

注：**13题AB选项均错误**，但个人觉得B错的更明显。
<!--more-->

# 二．分析程序，写输出结果
1.

```
2
1
3
1
0

```

2.

```
i=0    s=0
i=1    s=1
i=2    s=3
i=3    s=5
i=4    s=7

```

3.

```
t1=200,*t2=50,*rt=200
c=200,p=200,*q=50

```
按理应该是*p=200.....

4.

```
a
afcfdbd

```

5.

```
  1  2  0  0  0
  0  3  4  0  0
  0  0  5  6  0
  0  0  0  7  8
  0  0  0  0  9
  
```

6.

```
#
#****##
#*******

```

# 三．根据程序功能填空

1.
```
 (1) n % 10
 (2) n >= 10 或 n/10 != 0
 (3) n / 10
```
2.
```
 (4) pa[j] = &classOne[j]  
 (5) pa[j+1]->score < pa[j]->score
 (6) temp = pa[j+1]
 (7) pa[j+1] = pa[j]
 (8) pa[j] = temp
```
题意有点混乱。。
3.
```
 (9) head==NULL
 (10) s->data < head->data
 (11) q->next = s
 (12) s->next = p
 (13) p = head
```
# 四．程序设计

1.(1)


```cpp
#include <iostream>
using namespace std;
int main(){
    int a[3][4],b[3][4];
    for(int i=0;i<3;i++){
        for(int j=0;j<4;j++){
            cin>>a[i][j];
        }
    }
    for(int i=0;i<3;i++){
        for(int j=0;j<4;j++){
            cin>>b[i][j];
        }
    }
    int count=0;
    for(int i=0;i<3;i++){
        for(int j=0;j<4;j++){
            if(a[i][j]==b[i][j])count++;
        }
    }
    cout<<count<<endl;
    return 0;
}

```

(2)

```cpp
int int_to_str(int num,char *str){
    if(num<10){
        str[0]=num+'0';
        return 1;
    }
    int count=int_to_str(num/10,str);
    str[count]=num%10+'0';
    return count+1;
}

```

2.

```cpp
#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;
int isPrime(int x){
    for(int i=2;i<int(sqrt(x))+1;i++){
        if(x%i==0)return 0;
    }
    return 1;
}
int main(){
    int n;
    cin>>n;
    int *f=new int[n];
    f[0]=0,f[1]=1;
    for(int i=2;i<n;i++){
        f[i]=f[i-1]+f[i-2];
    }
    int count=0;
    for(int i=0;i<n;i++){
        if(isPrime(f[i])){
            count++;
            cout<<setw(10)<<f[i];
            if(count%5==0)cout<<endl;
        }
    }
    return 0;
}

```



