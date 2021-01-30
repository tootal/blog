---
title: Avito Cool Challenge 2018
urlname: cf-1081
categories:
  - 计算机
  - 算法竞赛
tags:
  - ACM
  - Codeforces
date: 2018-12-18 12:46:33
updated: 2018-12-18 12:46:33
---
[题目](https://codeforces.com/contest/1081)
# A
[A. Definite Game](https://codeforces.com/contest/1081/problem/A)

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
	int n;
	cin>>n;
	if(n==2)cout<<2<<endl;
	else cout<<1<<endl;
	return 0;
}
```

# B
[B. Farewell Party](https://codeforces.com/contest/1081/problem/B)

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N=100005;
int a[N],b[N];
int main(){
	int n;
	scanf("%d",&n);
	for(int i=1;i<=n;i++){
		scanf("%d",&a[i]);
		a[i]=n-a[i];
	}
	int f=1;
	for(int i=1;i<=n;i++){
		if(b[i]>0)continue;
		b[i]=f;
		int count=a[i]-1;
		for(int j=i+1;j<=n;j++){
			if(count==0)break;
			if(b[j]>0)continue;
			if(a[j]==a[i]){
				b[j]=b[i];
				count--;
			}
		}
		if(count>0)f=0;
		if(f==0)break;
		f++;
	}
	if(f==0)puts("Impossible");
	else{
		puts("Possible");
		for(int i=1;i<=n;i++){
			printf("%d ",b[i]);
		}
		puts("");
	}
	return 0;
}
```

# C
[C. Colorful Bricks](https://codeforces.com/contest/1081/problem/C)
he found there are k bricks with a color different from the color of the brick on its left.
n个方块，m种颜色，存在k个方块与左边相邻方块颜色不同，求涂色方案数.
排列组合问题.

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N=2005;
const int MOD=998244353;
int Comn[N][N];
int Com(int n,int m){
	for(int i=0;i<=n;i++){
		Comn[i][0]=Comn[i][i]=1;
		for(int j=1;j<i;j++){
			Comn[i][j]=(1ll*Comn[i-1][j]+Comn[i-1][j-1])%MOD;
		}
	}
	return Comn[n][m];
}
int Qpow(int x,int y){
	int ans=1;
	while(y){
		if(y&1)ans=(1ll*ans*x)%MOD;
		x=(1ll*x*x)%MOD;
		y>>=1;
	}
	return ans;
}
int main(){
	int n,m,k;
	//cout<<Com(2,1)<<endl;
	cin>>n>>m>>k;
	//printf("Com=%d,Qpow=%d\n",Com(n-1,k),Qpow(m-1,k));
	cout<<(1ll*Com(n-1,k)*m%MOD*Qpow(m-1,k))%MOD<<endl;
	return 0;
}

```
# D
[D. Maximum Distance](https://codeforces.com/contest/1081/problem/D)

# E
[E. Missing Numbers](https://codeforces.com/contest/1081/problem/E)
依次尝试平方数。long long真是恶心。

```cpp
#include <bits/stdc++.h>
#define check(x) ((long long)(sqrt(x))*(long long)(sqrt(x))==(x))
using namespace std;
const int N=100005;
const long long M=10000000000000ll;
long long a[N];
int main(){
	//freopen("input.txt","r",stdin);
	//freopen("output.txt","w",stdout);
	int n;
	scanf("%d",&n);
	for(int i=2;i<=n;i+=2){
		scanf("%lld",&a[i]);
	}
	long long s=0,k=1,f=1;
	for(int i=1;i<=n;i+=2){
		while(1){
			//printf("when k=%lld,s=%lld,check(%lld)=%d\n",k,s,k*k+a[i+1],check(k*k+a[i+1]));
			if(k*k>s&&check(k*k+a[i+1])){
				a[i]=k*k-s;
				s=k*k+a[i+1];
				k++;
				break;
			}
			k++;
			if(k>1000000){
				f=0;
				break;
			}
		}
		if(f==0)break;
	}
	if(f==0)puts("No");
	else{
		puts("Yes");
		for(int i=1;i<=n;i++){
			printf("%lld ",a[i]);
		}
		puts("");
	}
	return 0;
}

```
# F
[F. Tricky Interactor](https://codeforces.com/contest/1081/problem/F)

# G
[G. Mergesort Strikes Back](https://codeforces.com/contest/1081/problem/G)

# H
[H. Palindromic Magic](https://codeforces.com/contest/1081/problem/H)
