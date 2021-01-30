---
title: Codeforces Round 527 (Div. 3)
urlname: cf-1092
categories:
  - 计算机
  - 算法竞赛
tags:
  - ACM
  - Codeforces
date: 2018-12-18 23:56:15
updated: 2018-12-18 23:56:15
---
被自己菜哭::>_<::

# A

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
	int t;
	cin>>t;
	while(t--){
		int n,m;
		cin>>n>>m;
		int a=n/m,b=n%m;
		for(int i=1;i<=a;i++){
			for(int i=1;i<=m;i++){
				cout<<char('a'+i-1);
			}
		}
		for(int i=1;i<=b;i++){
			cout<<char('a'+i-1);
		}
		cout<<endl;
	}
	return 0;
}

```

# B
排序后统计相邻元素差值。

```cpp
#include <bits/stdc++.h>
using namespace std;
int a[105];
int main(){
	int n;
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>a[i];
	}
	sort(a+1,a+1+n);
	int ans=0;
	for(int i=1;i<=n;i+=2){
		ans+=a[i+1]-a[i];
	}
	cout<<ans<<endl;	
	return 0;
}

```

# C
利用两个长度为n-1的串把原串找出来，然后逐个判断。

```cpp
#include <bits/stdc++.h>
using namespace std;
char s[205][105];
int len[205],ps[205],markp[105],marks[105];
int main(){
	//freopen("input.txt","r",stdin);
	int n;
	cin>>n;
	int m=2*n-2;
	int n1=0,n2=0;
	for(int i=1;i<=m;i++){
		cin>>s[i];
		len[i]=strlen(s[i]);
		if(len[i]==n-1&&n1==0)n1=i;
		else if(len[i]==n-1&&n2==0)n2=i;
	}
	//printf("n1=%d,n2=%d\n",n1,n2);
	int f2=1;
	for(int i=1;i<n-1;i++){
		if(s[n2][i]!=s[n1][i-1])f2=0;
	}
	int count=0;
	for(int i=1;i<=m;i++){
		int ff=1;
		for(int j=0;j<len[i];j++){
			if(s[i][j]!=s[n2][j]){
				ff=0;
				break;
			}
		}
		if(ff)count++;
	}
	if(count<n-1)f2=0;
	//printf("f2=%d\n",f2);
	char *per,*sur;
	per=s[n1],sur=s[n2];
	if(f2)swap(per,sur);
	for(int i=0;i<n-1;i++){
		s[0][i]=per[i];
	}
	s[0][n-1]=sur[n-2];
	len[0]=n;
	//printf("s[0]=%s\n",s[0]);
	int cs=0,cp=0;
	for(int i=1;i<=m;i++){
		//prefix
		int flagp=1;
		for(int j=0;j<len[i];j++){
			if(s[i][j]!=s[0][j]){
				flagp=0;
				break;
			}
		}
		//suffix
		int flags=1;
		for(int j=0;j<len[i];j++){
			if(s[i][j]!=s[0][j+n-len[i]]){
				flags=0;
				break;
			}
		}
		if(flagp==0){
			ps[i]='S';
			marks[len[i]]=1;
			cs++;
		}else if(flags==0){
			ps[i]='P';
			markp[len[i]]=1;
			cp++;
		}else ps[i]='A';
	}
	for(int i=1;i<=m;i++){
		if(cp==n-1)break;
		if(ps[i]=='A'&&!markp[len[i]]){
			ps[i]='P';
			cp++;
			markp[len[i]]=1;
		}
	}
	for(int i=1;i<=m;i++){
		if(cs==n-1)break;
		if(ps[i]=='A'&&!marks[len[i]]){
			ps[i]='S';
			marks[len[i]]=1;
			cs++;
		}
	}
	for(int i=1;i<=m;i++){
		cout<<char(ps[i]);
	}
	cout<<endl;
	return 0;
}

```

# D1


# D2


# E


# F

