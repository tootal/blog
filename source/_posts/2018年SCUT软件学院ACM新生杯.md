---
title: 2018年SCUT软件学院ACM新生杯
urlname: scutpc2018-newcup
categories:
  - 计算机
  - 算法竞赛
tags:
  - ACM
date: 2018-11-11 22:53:25
updated: 2018-11-11 22:53:25
---
难度非常友好！！
就是我打炸了。奖品只有气球。。。
<!--more-->

# A
[人类的本质](http://110.64.92.219/problem/2001)
```c
#include <cstdio>
int main(){
	int t;
	scanf("%d",&t);
	for(int T=1;T<=t;T++){
		int n;
		scanf("%d",&n);
		for(int i=1;i<=n;i++){
			printf("\"LJJnb!!!!!!!\'\'\n");
		}
		if(T!=t)printf("\n");
	}
	return 0;
}

```

# B
[CYC的公倍数](http://110.64.92.219/problem/2002)
注意到$1 \le d_{min} \le 1000$，枚举$d_{min}$即可。

```c
#include <iostream>
using namespace std;
const int N=1005;
int a[N];
int main(){
	int T;
	cin>>T;
	for(int t=1;t<=T;t++){
		int n,k;
		cin>>n>>k;
		for(int i=1;i<=n;i++){
			cin>>a[i];
		}
		int d;
		for(d=1;d<=1000;d++){
			int count=0;
			for(int i=1;i<=n;i++){
				if(d%a[i]==0)count++;
				if(count>=k)break;
			}
			if(count>=k)break;
		}
		cout<<d<<'\n';
	}
	return 0;
}
```


# C
[CYC的计算几何](http://110.64.92.219/problem/2003)
容易推出$S=|EF| \times |AE|$

```c
#include <iostream>
using namespace std;
int main(){
	int n;
	cin>>n;
	for(int i=1;i<=n;i++){
		int a,b;
		cin>>a>>b;
		cout<<(a*b)%10017<<'\n';
	}
	return 0;
}

```
# D
时空裂隙(参考题目pdf）
这题有些不严谨，而且OJ题库里也没找到这题。就姑且自己分析一波吧。
比赛时，我以为第k大的数要去除重复的，后来才发现不用，这个可能是我理解有问题。
但，官方题解给的是暴力！！而范围内明显暴力可能会超时！
**此题给出的程序不一定正确**

## 官方题解

```cpp
#include<iostream>
#include<cstdio>
#include<algorithm>
#include <cmath>
using namespace std;
const int Maxn=10010;
int n,k;
int num[Maxn];
int main()
{
	freopen("input.txt","r",stdin);
	freopen("output.txt","w",stdout);
	scanf("%d",&n);
	for (int i=1;i<=n;i++) scanf("%d",&num[i]);
	sort(num+1,num+n+1);
	for (int k=1;k<=(n+1)/2;k++)
	{
		int a=num[k],b=num[n-k+1];
		int number=b-a;
		bool bj=true;
		for (int i=2;i<=sqrt(number);i++)
		{
			if (number%i==0)
			{
				bj=false;
				break;
			}
		}
		if (bj) {printf("%d\n",k);return 0;}
	}
	printf("GG\n");
	return 0;
}

```

## hack数据生成程序
2147483353是范围内需要判定次数最多的合数。利用这一点可以让上面程序超时。
数据类似这样：
10
1 1 1 1 1 2147483354 2147483382 2147483382 2147483382 2147483382

```cpp
#include <cstdio>
#include <cmath>
#include <iostream>
using namespace std;
//const int N=10;
int N;
int Min=1;
int Max=(1<<31)-1;
int i,j,k;
int main(){
	freopen("input.txt","w",stdout);
	//printf("%d\n",Max);return 0;
	//scanf("%d",&N);
	N=10000;
	printf("%d\n",N);
	int M=N>>1;
	for(i=1;i<=M-1;i++){
		printf("%d ",Min);
	}
	//int maxi,maxn=0;
	/*
	for(i=2147483381;i>2147483381-10000;i--){
		int j=int(sqrt(i));
		int flag=1;
		for(k=2;k<=j;k++){
			if(i%k==0){
				//printf("\ni=%d\nk=%d\n",i,k);
				if(k>maxn){
					maxn=k;
					maxi=i;
				}
				flag=0;
				break;
			}
		}
		if(flag){
			printf("get one:%d\n",i);
			break;
		}
	}*/
	//printf("\nmaxi=%d\nmaxn=%d\n",maxi,maxn);
	//maxi=2147483381
	//maxn=46271
	//2147483381=46271*46411
	//18 2147483647
	//2147483647-18=2147483629
	//get one:2147483353
	printf("%d %d ",1,2147483354);
	Max=2147483381+1;
	for(i=1;i<=M-1;i++){
		printf("%d",Max);
		if(i==M-1)printf("\n");
		else printf(" ");
	}
	return 0;
}

```

## Miller-Rabin随机性素数测试
貌似只有这种方法了，经测试是不会超时的，这个就先当模版。。
原理以后再学。。

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N=10005;
int A[N];
typedef long long LL;
LL muti_mod(LL a,LL b,LL c){     //return (a*b) mod c,a,b,c<2^63
    a%=c;
    b%=c;
    LL ret=0;
    while(b){
        if(b&1){
            ret+=a;
            if(ret>=c)ret-=c;
        }
        a<<=1;
        if(a>=c)a-=c;
        b>>=1;
    }
    return ret;
}
LL pow_mod(LL x,LL n,LL mod){   //return x^n mod c
    if(n==1) return x%mod;
    int bit[90],k=0;
    while(n){
        bit[k++]=n&1;
        n>>=1;
    }
    LL ret=1;
    for(k=k-1;k>=0;k--){
        ret=muti_mod(ret,ret,mod);
        if(bit[k]==1) ret=muti_mod(ret,x,mod);
    }
    return ret;
}
bool check(LL a,LL n,LL x,LL t){
    LL ret=pow_mod(a,x,n),last=ret;
    for(int i=1; i<=t; i++){
        ret=muti_mod(ret,ret,n);
        if(ret==1&&last!=1 && last!=n-1) return 1;
        last=ret;
    }
    if(ret!=1) return 1;
    return 0;
}
bool miller(LL n,int S=50){
	if(n<=1)return 0;
    LL x=n-1,t=0;
    while ((x&1)==0) x>>=1,t++;
    bool flag=1;
    if (t>=1 && (x&1)==1){
        for (int k=0; k<S; k++){
            LL a=rand()%(n-1)+1;
            if (check(a,n,x,t)){
                flag=1;
                break;
            }
            flag=0;
        }
    }
    if (!flag || n==2) return 1;
    return 0;
}
int check(int x){
	if(x<=1)return 0;
	if(x==2||x==3)return 1;
	for(int i=2;i<=int(sqrt(1.0*x)+1);i++){
		if(x%i==0)return 0;
	}
	return 1;
}
int main(){
	freopen("input.txt","r",stdin);
	freopen("output.txt","w",stdout);
	srand((unsigned)time(NULL));
	int n;
	scanf("%d",&n);
	/*for(int i=0;i<n;i++){
		//printf("check(%d)=%d\n",i,check(i));
		//printf("miller(%d)=%d\n",i,miller(i));
		if(check(i)!=miller(i))printf("%d\n",i);
	}
	return 0;*/
	for(int i=0;i<n;i++){
		scanf("%d",&A[i]);
	}
	sort(A,A+n);
	//for(int i=0;i<n;i++)printf("A[%d]=%d\n",i,A[i]);
	//return 0;
	int flag=0;
	int tn=(n>>1)+1;
	for(int k=1;k<=tn;k++){
		if(miller(A[n-k]-A[k-1])){
		//if(check(a[n-k]-a[k-1])){
			flag=k;
			break;
		}
	}
	if(flag){
		printf("%d\n",flag);
	}else{
		printf("GG\n");
	}
	return 0;
}

```

# E
[yang12138的快乐炉石](http://110.64.92.219/problem/2005)

```c
#include <iostream>
using namespace std;
int main(){
	int T;
	cin>>T;
	for(int t=1;t<=T;t++){
		int n;
		cin>>n;
		int count=0;
		while(n!=1){
			if(n&1){
				n=(n-1)>>1;
			}else{
				n=n>>1;
			}
			count++;
		}
		cout<<count<<'\n';
	}
	return 0;
}


```
# F
[yang1238的激烈炉石](http://110.64.92.219/problem/2006)
注意到$\sqrt{1}=1$即可。

```c
#include <iostream>
#include <cmath>
using namespace std;
const int N=100005;
int a[N][9];
int main(){
	int n,m;
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>a[i][0];
		for(int j=1;j<9;j++){
			a[i][j]=int(sqrt(1.0*a[i][j-1]));
		}
	}
	for(int j=1;j<=m;j++){
		if(j>=9)cout<<n<<'\n';
		else{
			int sum=0;
			for(int i=1;i<=n;i++){
				sum=sum+a[i][j-1];
			}
			cout<<sum<<'\n';
		}
	}
	return 0;
}


```
# G
[yang12138的妹子](http://110.64.92.219/problem/2007)
容易推出

$$
ans=\sum_{i=m}^nC_n^i
$$

```c
#include <iostream>
using namespace std;
int com(int n,int r){
	if(n-r>r)r=n-r;
	int i,j,s=1;
	for(i=0,j=1;i<r;i++){
		s*=(n-i);
		for(;j<=r&&s%j==0;j++)s/=j;
	}
	return s;
}
int main(){
	int T;
	cin>>T;
	for(int t=1;t<=T;t++){
		int n,m;
		cin>>n>>m;
		int ans=1;
		for(int i=m;i<n;i++){
			ans=ans+com(n,i);
		}
		cout<<ans<<'\n';
	}
	return 0;
}


```
# H
[yang12138的随机炉石](http://110.64.92.219/problem/2008)
简单的dp。

```c
#include <cstdio>
#include <iostream>
using namespace std;
const int N=105;
int a[N],b[N];
double f[N][N];
int main(){
	for(int i=0;i<N;i++){
		for(int j=0;j<N;j++){
			if(i==0)f[i][j]=0;
			else if(j==0)f[i][j]=1.0;
			else f[i][j]=0.5*f[i-1][j]+0.5*f[i][j-1];
		}
	}
	int T;
	cin>>T;
	for(int t=1;t<=T;t++){
		int hp1,hp2,n,m;
		cin>>hp1>>hp2>>n>>m;
		for(int i=1;i<=n;i++){
			cin>>a[i];
		}
		for(int j=1;j<=m;j++){
			cin>>b[j];
		}
		if(hp1%10==0)hp1--;
		if(hp2%10==0)hp2--;
		hp1=hp1/10+1;
		hp2=hp2/10+1;
		printf("%.5lf\n",f[hp1][hp2]);
	}
	return 0;
}

```
# I
[HOOCCOOH的大模拟](http://110.64.92.219/problem/2009)
真是大模拟，按题意处理即可。

```c
#include <iostream>
#include <cstring>
#include <cstdio>
using namespace std;
const int N=200005;
char base[]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
int rebase[305];
char s[N];
int change(char *p){
	char a=rebase[int(*(p))],b=rebase[int(*(p+1))],c,d;
	if(*(p+2)=='=')c=0;
	else c=rebase[int(*(p+2))];
	if(*(p+3)=='=')d=0;
	else d=rebase[int(*(p+3))];
	int ta=(a<<2)+(b>>4),tb=((b&15)<<4)+(c>>2),tc=((c&3)<<6)+(d);
	//printf("\nta=%d\ntb=%d\ntc=%d\n",ta,tb,tc);
	if(ta>=32&&ta<=126)printf("%c",ta);
	if(tb>=32&&tb<=126)printf("%c",tb);
	if(tc>=32&&tc<=126)printf("%c",tc);
}
int main(){
	//freopen("input.txt","r",stdin);
	//freopen("output.txt","w",stdout);
	for(int i=0;i<64;i++){
		rebase[base[i]]=i;
	}
	while(~scanf("%s",s)){
		int len=strlen(s);
		/*for(int i=0;i<len;i++){
			printf("%c:%d\n",s[i],rebase[s[i]]);
		}*/
		for(int i=0;i<len;i+=4)
			change(s+i);
		printf("\n");
	}
	return 0;
}

```
# J
[BPM的签到题](http://110.64.92.219/problem/2010)
发现自己分析能力好弱。。尤其是做这种构造题。
从左往右逐个贪心选取，能选取的条件是后面能补回来。
每个位只可能出现三种情况，逐个判断即可。

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N=100005;
char a[N],b[N];
int main(){
	int n;
	scanf("%d",&n);
	while(n--){
		scanf(" %s %s",a,b);
		int len=strlen(a);
		int d=0;
		for(int i=0;i<len;i++){
			if(a[i]==b[i]){
				printf("a");
				continue;
			}
			int t[3]={a[i],b[i],'a'};
			while(t[2]==a[i]||t[2]==b[i])t[2]++;
			for(int ii=0;ii<2;ii++){
				for(int jj=ii+1;jj<3;jj++){
					if(t[ii]>t[jj])swap(t[ii],t[jj]);
				}
			}
			/*for(int ii=0;ii<3;ii++){
				printf("\ntest:t[%d]=%c\n",ii,t[ii]);
			}*/
			for(int ii=0;ii<3;ii++){
				if(t[ii]!=a[i]&&t[ii]!=b[i]&&d==0){
					printf("%c",t[ii]);
					break;
				}
				int td=d;
				if(t[ii]!=a[i])d++;
				if(t[ii]!=b[i])d--;
				int count=0;
				for(int jj=i+1;jj<len;jj++){
					if(a[jj]!=b[jj])count++;
					if(count>=abs(d))break;
				}
				//printf("\nii=%d,d=%d,count=%d\n",ii,d,count);
				if(count>=abs(d)){
					printf("%c",t[ii]);
					break;
				}else{
					d=td;
				}
			}
		}
		puts("");
	}
	return 0;
}

```
# K
[BPM种南瓜](http://110.64.92.219/problem/2011)
n个区间里面选k个，要求这k个区间的连续公共长度最大。
先对左端点排序，依次选取。

```cpp
#include <bits/stdc++.h>
using namespace std;
struct seg{
	int l,r;
	seg(int l,int r):l(l),r(r){}
};
bool cmp1(seg a,seg b){
	return a.l<b.l;
}
struct cmp2{
	bool operator()(seg a,seg b){
		return a.r>b.r;
	}
};
vector<seg>V;
priority_queue<seg,vector<seg>,cmp2> Q;
int main(){
	int n,k;
	scanf("%d%d",&n,&k);
	for(int i=1;i<=n;i++){
		int l,r;
		scanf("%d%d",&l,&r);
		V.push_back(seg(l,r));
	}
	sort(V.begin(),V.end(),cmp1);
	int ans=0;
	for(auto i:V){
		//printf("test:V=(%d,%d)\n",i.l,i.r);
		if(Q.size()<k){
			Q.push(i);
			if(Q.size()==k){
				ans=max(ans,Q.top().r-i.l);
			}
			continue;
		}
		//printf("Q.top=(%d,%d)\n",Q.top().l,Q.top().r);
		Q.push(i);
		seg temp=Q.top();
		Q.pop();
		if(temp.r!=i.r)ans=max(ans,Q.top().r-i.l);
	}
	printf("%d\n",ans);
	return 0;
}

```
# L
[小南瓜爱旅游](http://110.64.92.219/problem/2012)
