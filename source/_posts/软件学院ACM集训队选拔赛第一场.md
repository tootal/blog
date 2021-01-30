---
title: 软件学院ACM集训队选拔赛第一场
urlname: scutpc2018-c1
categories:
  - 计算机
  - 算法竞赛
tags:
  - ACM
date: 2018-11-26 00:40:18
updated: 2018-11-26 00:40:18
---
[题目](https://www.luogu.org/contestnew/show/13317)

# A
[U53614 电梯](https://www.luogu.org/problemnew/show/U53614)
注意不存在0楼。
<!--more-->

```cpp
#include <iostream>
#include <cstdio>
#include <algorithm>
using namespace std;
int main(){
//	freopen("input.txt","r",stdin);
    int t;
    cin>>t;
    while(t--){
        int h,l,n,m=1;
        cin>>h>>l>>n;
        for(int i=1;i<=n;i++){
            char c;int a;
            cin.get();
            cin>>c>>a;
            if(c=='u'){
                if(m<0&&m+a>=0)m++;
                m+=a;
            }
            else if(c=='d'){
                if(m>0&&m-a<=0)m--;
                m-=a;
            }
            if(m>h)m=h;
            else if(m<l)m=l;
        }
        cout<<m<<endl;
    }
    return 0;
}
```
# B
[U53615 集训室的猫](https://www.luogu.org/problemnew/show/U53615)
解法比较多，这里采用了矩阵快速幂。

```cpp
#include <iostream>
#include <cstdio>
#include <cstring>
using namespace std;
const int M=1000007;
struct Matrix{
    long long a[3][3];
    Matrix(){
        memset(a,0,sizeof(a));
    }
};
Matrix operator*(const Matrix &x,const Matrix &y){
    Matrix ans;
    for(int i=1;i<=2;i++){
        for(int j=1;j<=2;j++){
            for(int k=1;k<=2;k++){
                ans.a[i][j]=(ans.a[i][j]+x.a[i][k]*y.a[k][j])%M;
                //while(ans.a[i][j]>=M)ans.a[i][j]-=M;
            }
        }
    }
    return ans;
}
void init(Matrix &x){
    for(int i=1;i<=2;i++){
        x.a[i][i]=1;
    }
}
Matrix operator^(Matrix &x,int y){
    Matrix ans;
    init(ans);
    while(y){
        if(y&1){
            ans=ans*x;
        }
        x=x*x;
        y>>=1;
    }
    return ans;
}
int main(){
    //freopen("input.txt","r",stdin);
    //freopen("output.txt","w",stdout);
    int t;
    cin>>t;
    while(t--){
        int n,a,b;
        cin>>n>>a>>b;
        for(int i=1;i<=n;i++){
            int x;
            cin>>x;
            if(x==1)cout<<a;
            else if(x==2)cout<<b;
            else{
                Matrix m;
                m.a[1][1]=m.a[1][2]=m.a[2][1]=1;
                m=m^(x-2);
                cout<<(m.a[1][1]*b+m.a[1][2]*a)%M;
            }
            if(i==n)cout<<'\n';
            else cout<<' ';
        }
    }
    return 0;
}
```
# C
[U53616 步道乐骑](https://www.luogu.org/problemnew/show/U53616)
类似与生成树。

```cpp
#include <iostream>
#include <cstdio>
#include <vector>
#include <algorithm>
using namespace std;
const int N=100050;
struct edge{
    int u,v,w;
    edge(int u,int v,int w):u(u),v(v),w(w) {}
    bool operator<(const edge &x)const{
        return w>x.w;
    }
};
vector<edge> e;
int x[N],y[N],w[N],Set[N];
int Find(int x){
    return (x==Set[x])?x:Set[x]=Find(Set[x]);
}
void Union(int x,int y){
    Set[Find(x)]=Set[Find(y)];
}
int main(){
    //freopen("input.txt","r",stdin);
    int n,m,k;
    cin>>n>>m>>k;
    for(int i=1;i<=m;i++){
        cin>>x[i]>>y[i]>>w[i];
    }
    int u,v;
    cin>>u>>v;
    int ans=0;
    for(int i=1;i<=m;i++){
        if((x[i]==u&&y[i]==v)||(x[i]==v&&y[i]==u)){
            ans=max(ans,w[i]);
        }else{
            e.push_back(edge(x[i],y[i],w[i]));
        }
    }
    for(int i=1;i<=n;i++)Set[i]=i;
    Union(u,v);
    k--;
    sort(e.begin(),e.end());
    for(auto i:e){
        if(k==0)break;
        if(Find(i.u)!=Find(i.v)){
            ans+=i.w;
            Union(i.u,i.v);
            k--;
        }
    }
    cout<<ans<<endl;
    return 0;
}
```
# D
[U53617 翘爆团体](https://www.luogu.org/problemnew/show/U53617)
图论题。艰难 。。


```cpp
#include <cstdio>
#include <cstring>
#include <iostream>
#include <vector>
#include <stack>
using namespace std;
const int N=5050;
vector<int> edge[N];
stack<int> stk;
int dfn[N],low[N],instk[N],mark[N],match[N],vis[N];
vector<int> cut[N];
int times,scc,mat;
void tarjan(int u){
    //printf("tarjan(%d) begin!\n",u);
    dfn[u]=low[u]=++times;
    stk.push(u);
    instk[u]=1;
    for(auto v:edge[u]){
        if(!dfn[v]){
            tarjan(v);
            low[u]=min(low[u],low[v]);
            //printf("when tarjan(%d),v not visted,low[%d]=%d\n",u,u,low[u]);
        }else if(instk[v]){
            low[u]=min(low[u],dfn[v]);
            //printf("when tarjan(%d),v in stack,low[%d]=%d\n",u,u,low[u]);
        }
    }
    //printf("when tarjan(%d),dfn[%d]=%d,low[%d]=%d\n",u,u,dfn[u],u,low[u]);
    if(dfn[u]==low[u]){
        int v;
        do{
            v=stk.top();
            //printf("when tarjan(%d),v=%d\n",u,v);
            instk[v]=0;
            mark[v]=scc;
            //for(auto i:edge[v])
            //	cut[scc].push_back(i);
            stk.pop();
        }while(v!=u);
        scc++;
    }
    //printf("ans=%d,dfn[%d]=%d,low[%d]=%d,tarjan(%d) end!\n",ans,u,dfn[u],u,low[u],u);
}
int dfs(int u){
    for(auto v:cut[u]){
        if(u!=v&&!vis[v]){
            vis[v]=1;
            if(match[v]==-1||dfs(match[v])){
                match[v]=u;
                //match[u]=v;
                //printf("match %d %d\n",u,v);
                return 1;
            }
        }
    }
    return 0;
}
int main(){
    //freopen("input.txt","r",stdin);
    //freopen("output.txt","w",stdout);
    int n,m;
    cin>>n>>m;
    for(int i=1;i<=m;i++){
        int u,v;
        cin>>u>>v;
        edge[u].push_back(v);
    }
    /*for(int i=1;i<=n;i++){
        cout<<i<<":";
        for(auto j:edge[i]){
            cout<<j<<' ';
        }
        cout<<endl;
    }*/
    for(int i=1;i<=n;i++){
        if(!dfn[i])tarjan(i);
    }
    //printf("after tarjan scc=%d\n",scc);
    /*for(int i=1;i<=n;i++){
        printf("mark[%d]=%d\n",i,mark[i]);
    }*/
    //cut the more
    for(int i=1;i<=n;i++){
        for(auto j:edge[i]){
            cut[mark[i]].push_back(mark[j]);
            //printf("mark[%d]=%d,cut[%d].push(%d)\n",i,mark[i],mark[i],mark[j]);
        }
    }
    /*for(int i=0;i<scc;i++){
        for(auto j:edge[i]){
            printf("cut[%d][..]=%d\n",i,j);
        }
    }*/
    //hungarian algorithm
    memset(match,-1,sizeof(match));
    for(int i=0;i<scc;i++){
        memset(vis,0,sizeof(vis));
        if(dfs(i)){
            mat++;
            //printf("dfs(%d)=true\n",i);
        }
        //printf("hungarian:i=%d,mat=%d\n",i,mat);
    }
    //printf("after hungarian mat=%d\n",mat);
    //printf("scc=%d,mat=%d\n",scc,mat);
    cout<<scc-mat<<endl;
    return 0;
}
```
# E
[U53618 骗分的回忆](https://www.luogu.org/problemnew/show/U53618)
分类讨论。


```cpp
#include <iostream>
#include <cstdio>
#include <vector>
using namespace std;
const int N=50050;
const int M=100050;
vector<int> son[N];
int f[N],size[N],op[M],u[M];
int dfs(int x){
    int ans=1;
    for(auto v:son[x]){
        if(f[v]==x)ans+=dfs(v);
    }
    return size[x]=ans;
}
int main(){
    int n,m,root;
    scanf("%d%d",&n,&m);
    for(int i=1;i<=n;i++){
        scanf("%d",&f[i]);
        if(f[i]==0)root=i;
        else son[f[i]].push_back(i);
    }
    int count0=0,count1=0;
    for(int i=1;i<=m;i++){
        scanf("%d%d",&op[i],&u[i]);
        if(op[i]==1)count1++;
        else if(op[i]==0)count0++;
    }
    f[root]=root;
    if(count0<=100){
        dfs(root);
        for(int i=1;i<=m;i++){
            if(op[i]==1)
                printf("%d\n",size[u[i]]);
            else if(op[i]==0){
                int tu=u[i];
                while(f[tu]!=root){
                    size[f[tu]]-=size[u[i]];
                    tu=f[tu];
                }
                f[u[i]]=root;
            }
        }
    }else if(count1<=100){
        for(int i=1;i<=m;i++){
            if(op[i]==1){
                dfs(root);
                printf("%d\n",size[u[i]]);
            }else if(op[i]==0){
                if(f[u[i]]!=root)son[root].push_back(u[i]);
                f[u[i]]=root;
            }
        }
    }
    return 0;
}
```
# F
[U53619 太空中的箱与球](https://www.luogu.org/problemnew/show/U53619)
模拟。


```cpp
#include <iostream>
#include <cstdio>
#include <cmath>
using namespace std;
const double eps=1e-8;
int main(){
    //freopen("input.txt","r",stdin);
    //freopen("output.txt","w",stdout);
    double x,y,z,bx,by,bz,r,vx,vy,vz,t;
    cin>>x>>y>>z>>bx>>by>>bz>>r>>vx>>vy>>vz>>t;
    x-=r,y-=r,z-=r;
    //printf("x=%lf,y=%lf,z=%lf\n",x,y,z);
    double dx,dy,dz,tx,ty,tz,tt;
    while(1){
        dx=(vx>0)?(x-bx):(bx-r);
        dy=(vy>0)?(y-by):(by-r);
        dz=(vz>0)?(z-bz):(bz-r);
        tx=(dx<eps)?1e9:(dx/fabs(vx));
        ty=(dy<eps)?1e9:(dy/fabs(vy));
        tz=(dz<eps)?1e9:(dz/fabs(vz));
        tt=min(min(tx,ty),tz);
        //printf("vx=%lf,vy=%lf,vz=%lf,dx=%lf,dy=%lf,dz=%lf,tx=%lf,ty=%lf,tz=%lf,tt=%lf\n",vx,vy,vz,dx,dy,dz,tx,ty,tz,tt);
        if(tt>1e9-1)break;
        else if(tt>t)break;
        else{
            bx=bx+vx*tt;
            by=by+vy*tt;
            bz=bz+vz*tt;
            if(fabs(tx-tt)<eps){
                vx=-vx;
            }
            if(fabs(ty-tt)<eps){
                vy=-vy;
            }
            if(fabs(tz-tt)<eps){
                vz=-vz;
            }
        }
        t-=tt;
        //printf("t=%lf,bx=%lf,by=%lf,bz=%lf\n",t,bx,by,bz);
    }
    if(t>eps&&tt<1e9-1){
        bx=bx+vx*t;
        by=by+vy*t;
        bz=bz+vz*t;
    }
    printf("%.2lf %.2lf %.2lf\n",bx,by,bz);
    return 0;
}
```
# G
[U53620 小南瓜与猫窝](https://www.luogu.org/problemnew/show/U53620)

# H
[U53621 YHF与他的薯(mei)片(zi)](https://www.luogu.org/problemnew/show/U53621)

# I
[U53622 编码](https://www.luogu.org/problemnew/show/U53622)

# J
[U53623 题目是什么能吃吗](https://www.luogu.org/problemnew/show/U53623)

# sort

```cpp
#include <iostream>
#include <cstdio>
#include <algorithm>
#include <vector>
using namespace std;
int a[1000005];
int main(){
    int n;
    scanf("%d",&n);
    for(int i=1;i<=n;i++){
        scanf("%d",&a[i]);
    }
    sort(a+1,a+n+1);
    a[0]=a[n+1]=-1;
    for(int i=1;i<=n;i++){
        if(a[i]!=a[i-1]&&a[i]!=a[i+1])printf("%d ",a[i]);
    }
    return 0;
}
```
