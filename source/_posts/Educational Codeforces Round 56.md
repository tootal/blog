---
title: Educational Codeforces Round 56
urlname: cf-1093
categories:
  - 计算机
  - 算法竞赛
tags:
  - ACM
date: 2018-12-16 21:10:21
updated: 2018-12-16 21:10:21
---
[题目](https://codeforces.com/contest/1093)

# A


```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
	int t;
	cin>>t;
	while(t--){
		int n;
		cin>>n;
		if(n&1)cout<<(n-3)/2+1<<endl;
		else cout<<n/2<<endl;
	}
	return 0;
}
```
# B


```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
	int n;
	cin>>n;
	while(n--){
		char s[1005];
		int c[305]={0};
		cin>>s;
		int len=strlen(s);
		for(int i=0;i<len;i++){
			c[s[i]]++;
		}
		int count=0;
		for(int i=0;i<305;i++){
			if(c[i]>0)count++;
		}
		if(count==1)cout<<"-1\n";
		else{
			for(int i=0;i<305;i++){
				if(c[i]>0){
					for(int j=0;j<c[i];j++){
						cout<<char(i);
					}
				}
			}
			cout<<endl;
		}
	}
	return 0;
}
```
# C


```cpp
#include <bits/stdc++.h>
using namespace std;
const int N=200005;
const long long INF=(long long)(1e18+1);
long long a[N];
int main(){
	//cout<<(long long)1e18<<endl;
	//freopen("input.txt","r",stdin);
	//freopen("output.txt","w",stdout);
	int n;
	cin>>n;
	int n2=n/2;
	for(int i=1;i<=n2;i++){
		cin>>a[n-i+1];
		//printf("a[%d]=%lld\n",n-i+1,a[n-i+1]);
	}
	a[0]=-1;a[n+1]=INF;
	for(int i=1;i<=n2;i++){
		if(a[i]>=a[i-1]&&a[n-i+1]<=a[n-i+2])continue;
		long long temp=max(a[i-1]-a[i],a[n-i+1]-a[n-i+2]);
		a[i]+=temp;
		a[n-i+1]-=temp;
		if(a[i]>a[n-i+1])swap(a[i],a[n-i+1]);
	}
	for(int i=1;i<=n;i++){
		cout<<a[i]<<' ';
	}
	cout<<endl;
	return 0;
}
```
# D
**memset改成手动清零**

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N=300005;
const int M=998244353;
vector<int> G[N];
int vis[N],col[N],deg[N];
int cnt[2];
int kpow(int x,int y){
	int ans=1;
	while(y){
		if(y&1)ans=(1ll*ans*x)%M;
		x=(1ll*x*x)%M;
		y>>=1;
	}
	return ans;
}
int dfs(int x,int p=0){
	//printf("when dfs(%d):\n",x);
	vis[x]=1;
	col[x]=p;
	cnt[p]++;
	for(auto i:G[x]){
		int f=1;
		if(vis[i]&&col[i]==col[x])return 0;
		if(!vis[i])f=dfs(i,!p);
		if(f==0)return 0;
	}
	return 1;
}
int main(){
	//freopen("input.txt","r",stdin);
	//freopen("output.txt","w",stdout);
	int t;
	scanf("%d",&t);
	while(t--){
		int n,m;
		scanf("%d%d",&n,&m);
		for(int i=1;i<=n;i++){
			G[i].clear();
			vis[i]=col[i]=deg[i]=0;
		}
		//memset(vis,0,sizeof(vis));
		//memset(col,0,sizeof(col));
		//memset(deg,0,sizeof(deg));
		for(int i=1;i<=m;i++){
			int u,v;
			scanf("%d%d",&u,&v);
			G[u].push_back(v);
			G[v].push_back(u);
			deg[u]++,deg[v]++;
		}
		int f=1,ans=1;
		for(int i=1;i<=n;i++){
			if(deg[i]==0){
				ans=(ans*3ll)%M;
				continue;
			}
			if(!vis[i]){
				cnt[0]=cnt[1]=0;
				if(!dfs(i))f=0;
				else{
					//printf("count[0]=%d,count[1]=%d\n",cnt[0],cnt[1]);
					ans=(1ll*ans*(kpow(2,cnt[0])+kpow(2,cnt[1])))%M;
				}
			}
			if(f==0)break;
		}
		if(f==0)puts("0");
		else printf("%d\n",ans);
	}
	return 0;
}
```
# E


# F


# G


