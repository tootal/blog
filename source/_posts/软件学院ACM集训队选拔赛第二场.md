---
title: 软件学院ACM集训队选拔赛第二场
urlname: scutpc2018-c2
date: 2018-12-01 23:59:13
updated: 2018-12-01 23:59:13
categories:
  - 计算机
  - 算法竞赛
tags:
  - ACM
---

# A
[我，小南瓜，队列](http://110.64.92.219/problem/160)
<!--more-->

# B
[我，小南瓜，橘猫捕捉计划，启动！](http://110.64.92.219/problem/168)

# C
[我，小南瓜，某乎，启动！](http://110.64.92.219/problem/167)
stl容器荟萃。

```cpp
#include <iostream>
#include <cstdio>
#include <string>
#include <vector>
#include <set>
#include <map>
using namespace std;
const int N=105;
string tag[N];
string tags[N][N];
set<string> sset;
map<string,int> smapn;
map<int,string> nmaps;
vector<int> ans[N];
int tagn[N];
int main(){
	//freopen("input.txt","r",stdin);
	int n;
	cin>>n;cin.get();
	for(int i=0;i<n;i++){
		getline(cin,tag[i]);
		//cout<<"when i="<<i<<",tag[i]="<<tag[i]<<endl;
		//int len=tag[i].length();
		auto j=tag[i].begin();
		auto k=j;
		for(;k!=tag[i].end();){
			if(*k=='/'){
				tags[i][tagn[i]++]=string(j,k);
				k++;
				j=k;
			}else{
				k++;
			}
		}
		tags[i][tagn[i]++]=string(j,k);
	}
	for(int i=0;i<n;i++){
		for(int j=0;j<tagn[i];j++){
			//cout<<"tags["<<i<<"]["<<j<<"]="<<tags[i][j]<<endl;
			sset.insert(tags[i][j]);
		}
	}
	int num=0;
	for(auto i:sset){
		//cout<<"test_sset:"<<i<<endl;
		nmaps[num]=i;
		smapn[i]=num++;
	}
	for(int i=0;i<n;i++){
		for(int j=0;j<tagn[i];j++){
			ans[smapn[tags[i][j]]].push_back(i);
		}
	}
	for(int i=0;i<num;i++){
		cout<<nmaps[i]<<":";
		for(auto j:ans[i]){
			cout<<' '<<j+1;
		}
		cout<<endl;
	}
	return 0;
}

```

# D
[我，BPM，连连看，启动！](http://110.64.92.219/problem/166)

# E
[我，胡老师，需要梳子](http://110.64.92.219/problem/165)

# F
[我，BPM，四级没过](http://110.64.92.219/problem/164)


```cpp
//#include <bits\stdc++.h>
#include <iostream>
#include <cstdio>
using namespace std;
int M=1000000007;
long long fpow(long long x,int y){
	long long ans=1;
	while(y){
		if(y&1)ans=(ans*x)%M;
		x=(x*x)%M;
		y>>=1;
	}
	return ans;
}
int main(){
	long long m,n;
	while(~scanf("%lld%lld",&m,&n)){
		long long ans=(fpow(m-1,n)+n*fpow(m-1,n-1))%M;
		printf("%lld\n",ans);
	}
	return 0;
}

```
# G
[我，小南瓜，打钱，出原题](http://110.64.92.219/problem/163)

# H
[我，czq，H，JHSeng，猪头](http://110.64.92.219/problem/162)
线段树。。

```cpp
#include <cstdio>
#include <iostream>
using namespace std;
const int N=(1<<17)+5;
const int NN=(N<<2);
int n,m,a[N],s[NN];
void build(int p,int l,int r,int t){
	//printf("build(%d,%d,%d,%d)\n",p,l,r,t);
	if(l==r){
		s[p]=a[l];
		//printf("l==r,s[%d]=a[%d]=%d\n",p,l,a[l]);
		return;
	}
	int mid=(l+r)>>1;
	build(p<<1,l,mid,t+1);
	build(p<<1|1,mid+1,r,t+1);
	if(t&1)s[p]=s[p<<1]|s[p<<1|1];
	else s[p]=s[p<<1]^s[p<<1|1];
}
int update(int x,int y){
	//printf("update(%d,%d)\n",x,y);
	x=(1<<n)-1+x;
	//printf("x=%d\n",x);
	s[x]=y;
	x>>=1;
	//printf("x=%d\n",x);
	int t=1;
	while(x){
		if(t&1)s[x]=s[x<<1]|s[x<<1|1];
		else s[x]=s[x<<1]^s[x<<1|1];
		t++;
		x>>=1;
	}
	return s[1];
}
int main(){
	//cout<<NN;
	//freopen("input.txt","r",stdin);
	scanf("%d%d",&n,&m);
	for(int i=1;i<=(1<<n);i++){
		scanf("%d",&a[i]);
	}
	build(1,1,(1<<n),n&1);
	/*for(int i=1;i<=4*n;i++){
		printf("s[%d]=%d\n",i,s[i]);
	}*/
	for(int i=1;i<=m;i++){
		int p,q;
		scanf("%d%d",&p,&q);
		printf("%d\n",update(p,q));
	}
	return 0;
}

```

# I
[我，czq，就是喜欢英文，JHSeng，就是要出英文题！](http://110.64.92.219/problem/161)

# J
[我，小甜甜，才是正义的化身](http://110.64.92.219/problem/169)

