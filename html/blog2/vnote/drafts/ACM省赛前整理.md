# ACM省赛前整理

## 2-sat
```cpp
#pragma once
#include <vector>
#include <cstring>
// 2-sat 问题
// 有n个布尔变量x[i]
// 另有m个需要满足的条件
// 每个条件的形式都是 x[i]为真/假 或 x[j]为真/假
// 给每个变量赋值,使得所有条件满足

// 算法
// 		构造一张有向图G,其中每个变量x[i]拆成两个结点2i和2i+1
// 		分别表示x[i]为假和x[i]为真.
// 		最后要为每个变量选其中一个标记
// 		一条有向边 2i+1->2j
//		表示	 若x[i]为真 则x[j]为假
// 		逐一考虑每个没有赋值的变量 x[i]
// 		先假定它为假,然后标记2i
// 		并沿着有向边标记所有能标记的点
// 		如果标记过程中发现2i和2i+1都被标记
// 		则假设不成立，改成x[i]为真,重新标记
// 注意,这个算法没有回溯过程,如果当前考虑的变量无论真假都会引起矛盾
// 可以证明2sat无解
// 注意,结点从0开始编号

struct twoSAT{
	static const int N=10010;
	int n;
	vector<int> G[N*2];
	bool mark[N*2];
	int S[N*2],c;

	bool dfs(int x){
		if(mark[x^1])return false;
		if(mark[x])return true;
		mark[x]=true;
		S[c++]=x;
		for(int i=0;i<G[x].size();i++){
			if(!dfs(G[x][i]))return false;
		}
		return true;
	}
	void init(int n){
		this->n=n;
		for(int i=0;i<n*2;i++){
			G[i].clear();
		}
		memset(mark,0,sizeof(mark));
	}
	// x=xval or y=yval
	void add_clause(int x,int xval,int y,int yval){
		x=x*2+xval;
		y=y*2+yval;
		G[x^1].push_back(y);
		G[y^1].push_back(x);
	}
	bool solve(){
		for(int i=0;i<n*2;i+=2){
			if(!mark[i]&&!mark[i+1]){
				c=0;
				if(!dfs(i)){
					while(c>0)mark[S[--c]]=false;
					if(!dfs(i+1))return false;
				}
			}
		}
		return true;
	}
};
```

## bitset用法

### base64转换
```cpp
#pragma once

// base64 编码转换
// 编码方法为：每三个字符分为1组，不足补k个0x00
// 按顺序写出该组的三个字符对应 ASCII 码的二进制
// 把这 24 位按每 6 位分成 4 段，每段分别转回十进制
// 在 Base64 码表中查得这 4 个数对应的字符，依次写下
// 实际常常根据需要更改码表最后两个字符

#include <bitset>
#include <string>
using namespace std;
namespace base64{
	typedef bitset<8> BS8;
	typedef bitset<6> BS6;
	const char bc[65]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	int cb(char x){
		if(x>='A'&&x<='Z')return x-'A';
		if(x>='a'&&x<='z')return x-'a'+26;
		if(x>='0'&&x<='9')return x-'0'+52;
		if(x=='+')return 62;
		if(x=='/')return 63;
		return 0;
	}
	string& encode(string &cipher){
		string plain(cipher);
		int len=plain.length();
		int k=(3-len%3)%3;
		plain.append(k,0);
		cipher.clear();
		for(int i=0;i<len;i+=3){
			string tb=BS8(plain[i]).to_string()+
					  BS8(plain[i+1]).to_string()+
					  BS8(plain[i+2]).to_string();
			cipher+=bc[BS6(tb,0,6).to_ulong()];
			cipher+=bc[BS6(tb,6,6).to_ulong()];
			cipher+=bc[BS6(tb,12,6).to_ulong()];
			cipher+=bc[BS6(tb,18,6).to_ulong()];
		}
		if(k>0)cipher[(len+k)/3*4-1]='=';
		if(k>1)cipher[(len+k)/3*4-2]='=';
		return cipher;
	}
	string& decode(string &plain){
		string cipher(plain);
		int len=cipher.length();
		if(cipher[len-1]=='=')cipher[len-1]=0;
		if(cipher[len-2]=='=')cipher[len-2]=0;
		plain.clear();
		for(int i=0;i<len;i+=4){
			string tb=BS6(cb(cipher[i])).to_string()+
					  BS6(cb(cipher[i+1])).to_string()+
					  BS6(cb(cipher[i+2])).to_string()+
					  BS6(cb(cipher[i+3])).to_string();
			plain+=char(BS8(tb,0,8).to_ulong());
			int temp=BS8(tb,8,8).to_ulong();
			if(temp)plain+=char(temp);
			temp=BS8(tb,16,8).to_ulong();
			if(temp)plain+=char(temp);
		}
		return plain;
	}
}
```

## Java基本输入输出
```java
//Stander IO

/*
import java.util.Scanner;
public class baseIO{
	public static void main(String[] args){
		Scanner cin=new Scanner(System.in);
		int n=cin.nextInt();
		for(int i=0;i<n;i++){
			System.out.println("hello world!");
		}
	}
}
*/

/*
import java.io.*;
public class baseIO{
	public static void main(String[] args) throws IOException{
		String s;
		BufferedReader cin=new BufferedReader(new InputStreamReader(System.in));
		s=cin.readLine();
		System.out.println("Input value is: "+s);
		double d=Double.parseDouble(s);
		System.out.println("Input value changed after doubled: "+Math.sqrt(d));
	}
}
*/
import java.util.Scanner;
public class baseIO{
	public static void main(String[] args){
		Scanner in=new Scanner(System.in);
		while(in.hasNext()){
			int p[6];
			for(int i=0;i<6;i++)
				p[i]=in.nextInt()
			System.out.println(p1.distance(p2));
		}
	}
}
		
//File IO

```

## Python基本输入输出
```py
#!/usr/bin/python3
# python基本输入输出

# 输入一个整数 
# 输出它的绝对值

"""
n=int(input())
print(abs(n))
"""

# 输入一行两个整数 
# 输出它们的和

"""
a,b=map(int,input().split())
print(a+b)
"""

# 输入 第一行一个整数n 第二行n个整数
# 输出从小到大排序后的数 以空格分隔 行末无多余空格

"""
input()
a=list(map(int,input().split()))
a.sort()
print(" ".join(str(i) for i in a))
"""

# 输入 有多组测试数据 每组一行一个整数n (1<=n<=10000)
# 输出 对于每组测试数据 输出斐波那契数列的第n项 (1,1,2,3,5,8...)


n=10000
a=[0,1]
for i in range(2,n+1):
	a.append(a[i-1]+a[i-2])
try:
	while True:
		print(a[int(input())])
except:
	pass


```

## Java高精度
```java
import java.io.*;
import java.math.*;
public class BigDecimal_{
	static int t,n,a,b;
	static StreamTokenizer in=new StreamTokenizer(
		new BufferedReader(new InputStreamReader(System.in)));
	public static void main(String[] args)throws IOException{
		in.nextToken();t=(int)in.nval;
		while(t-->0){
			in.nextToken();n=(int)in.nval;
			a=b=0;
			for(int i=0;i<n;i++){
				in.nextToken();
				a+=(int)in.nval;
			}
			for(int i=0;i<n;i++){
				in.nextToken();
				b+=(int)in.nval;
			}
			System.out.println(BigDecimal.valueOf(a).multiply(BigDecimal.valueOf(b))
				.divide(BigDecimal.valueOf(n),30,BigDecimal.ROUND_HALF_UP).toPlainString());
		}
	}
}
```

## C++高精度模板
### 精度问题
```cpp
#pragma once
#include <cstdio>
#include <cstring>

//常见精度问题
//高精度请参见文件 Int.h Float.h
//注意事项:
//	double scanf输入是%lf printf输出是%f 
//	long double scanf、printf均用%Lf 
//	long double 的常用函数后加'l' 如 fabsl sqrtl cosl
//浮点数比较:(仅供参考、在不同系统略有区别 详细参考typeRange.cpp)
//			float	double		long double
//	字节数	4		8			16
//	有效数字6		15			18
//	字面量	.02e2f	1e-6		.55e12l	(其中字母大小写均可)

//long long范围高精度除法
//计算 x/y 的精确值(要求保留小数点后10位以上的)
//保留到小数点后n位,结果存放在字符数组s中,返回s长度
//Rounded标志是否在最后一位四舍五入
//注意sprintf存在溢出风险
//注意99.99995这种数,需要连续进位
//注意在时间空间要求高的情况下请适当精简函数
//	减少参数传递，改用全局变量
//	去除动态申请的临时数组
//	（直接输出结果）
int div(long long x,long long y,char *s,int n=50,bool Rounded=true){
	long long part=x/y;
	x=x%y;
	char *ts=new char[n+5];
	ts[0]='0';
	for(int i=1;i<=n+1;i++){
		x=x*10;
		int k;
		for(k=1;k<=10;k++)
			if(k*y>x)break;
		k--;
		x=x-k*y;
		ts[i]=k+'0';
	}
	if(Rounded){
		ts[n]+=(ts[n+1]>='5');
		for(int i=n;i>=1;i--)
			if(ts[i]=='9'+1){
				ts[i-1]++;
				ts[i]='0';
			}
		part+=(ts[0]=='1');
	}
	int cnt=sprintf(s,"%lld.",part);
	ts[n+1]=0;
	strcpy(s+cnt,ts+1);
	delete ts;
	return cnt+n;
}


```
### 高精度模板
```cpp
#pragma once
#include <vector>
#include <iostream>
#include <iomanip>
#include <algorithm>
#include <cstdio>
#include <cstring>
using namespace std;

// 高精度非负整数 加法

struct BigInteger{
	static const int BASE=100000000;
	static const int WIDTH=8;
	vector<int> s;
	BigInteger(long long num=0){
		*this=num;
	}
	BigInteger(const string &str){
		*this=str;
	}
	BigInteger operator=(long long num){
		s.clear();
		do{
			s.push_back(num%BASE);
			num/=BASE;
		}while(num>0);
		return *this;
	}
	BigInteger operator=(const string &str){
		s.clear();
		int x,len=(str.length()-1)/WIDTH+1;
		for(int i=0;i<len;i++){
			int end=str.length()-i*WIDTH;
			int start=max(0,end-WIDTH);
			sscanf(str.substr(start,end-start).c_str(),"%d",&x);
			s.push_back(x);
		}
		return *this;
	}
	BigInteger operator+(const BigInteger &b)const{
		BigInteger c;
		c.s.clear();
		for(int i=0,g=0;;i++){
			if(g==0&&i>=s.size()&&i>=b.s.size())break;
			int x=g;
			if(i<s.size())x+=s[i];
			if(i<b.s.size())x+=b.s[i];
			c.s.push_back(x%BASE);
			g=x/BASE;
		}
		return c;
	}
	BigInteger operator+=(const BigInteger &b){
		*this=*this+b;
		return *this;
	}
	//注意是否有前导0
	bool operator<(const BigInteger &b)const{
		if(s.size()!=b.s.size())return s.size()<b.s.size();
		for(int i=s.size()-1;i>=0;i--){
			if(s[i]!=b.s[i])return s[i]<b.s[i];
		}
		return false; //相等
	}
	//以下定义具有一般性
	bool operator>(const BigInteger &b)const{
		return b<*this;
	}
	bool operator<=(const BigInteger &b)const{
		return !(b<*this);
	}
	bool operator>=(const BigInteger &b)const{
		return !(*this<b);
	}
	bool operator!=(const BigInteger &b)const{
		return b<*this||*this<b;
	}
	bool operator==(const BigInteger &b)const{
		return !(b<*this)&&!(*this<b);
	}
};
ostream& operator<<(ostream &out,const BigInteger &x){
	out<<x.s.back();
	for(int i=x.s.size()-2;i>=0;i--){
		char buf[20];
		sprintf(buf,"%08d",x.s[i]);
		for(int j=0;j<strlen(buf);j++)out<<buf[j];
	}
	return out;
}
istream& operator>>(istream &in,BigInteger &x){
	string s;
	if(!(in>>s))return in;
	x=s;
	return in;
}

// 高精度完全版
// 支持高精度整数的加减乘除 

namespace Full{

class BigInteger{
private:
	static const int BASE=100000000;
	static const int WIDTH=8;
	bool sign;
	size_t length;
	vector<int> num;

//以下为关键实现代码
private:
	void cutLeadingZero(){
		while(num.back()==0&&num.size()!=1){
			num.pop_back();
		}
	}
	void setLength(){
		cutLeadingZero();
		int tmp=num.back();
		if(tmp==0)length=1;
		else{
			length=(num.size()-1)*WIDTH;
			while(tmp>0){
				length++;
				tmp/=10;
			}
		}
	}
public:
	const BigInteger& operator=(long long n){
		num.clear();
		if(n==0)num.push_back(0);
		if(n>=0)sign=true;
		else if(n==LLONG_MIN){ //注意负数取值范围比正数大1
			*this="-9223372036854775808";
			return *this;
		}else if(n<0){
			sign=false;
			n=-n;
		}
		while(n!=0){
			num.push_back(n%BASE);
			n/=BASE;
		}
		setLength();
		return *this;
	}
	const BigInteger& operator=(const char *n){
		int len=strlen(n),tmp=0,ten=1,stop=0;
		num.clear();
		sign=(n[0]!='-');
		if(!sign)stop=1;
		for(int i=len;i>stop;i--){
			tmp+=(n[i-1]-'0')*ten;
			ten*=10;
			if((len-i)%8==7){
				num.push_back(tmp);
				tmp=0;
				ten=1;
			}
		}
		if((len-stop)%WIDTH!=0){
			num.push_back(tmp);
		}
		setLength();
		return *this;
	}
	friend BigInteger operator+(const BigInteger &a,const BigInteger &b){
		if(!b.sign)return a-(-b);
		if(!a.sign)return b-(-a);
		BigInteger ans;
		int carry=0,aa,bb;
		size_t lena=a.num.size(),lenb=b.num.size();
		size_t len=max(lena,lenb);
		ans.num.clear();
		for(size_t i=0;i<len;i++){
			if(lena<=i)aa=0;
			else aa=a.num[i];
			if(lenb<=i)bb=0;
			else bb=b.num[i];
			ans.num.push_back((aa+bb+carry)%BASE);
			carry=(aa+bb+carry)/BASE;
		}
		if(carry>0)ans.num.push_back(carry);
		ans.setLength();
		return ans;
	}
	friend BigInteger operator-(const BigInteger &a,const BigInteger &b){
		if(!b.sign)return a+(-b);
		if(!a.sign)return -((-a)+b);
		if(a<b)return -(b-a);
		BigInteger ans;
		int carry=0,aa,bb;
		size_t lena=a.num.size(),lenb=b.num.size();
		size_t len=max(lena,lenb);
		ans.num.clear();
		for(size_t i=0;i<len;i++){
			aa=a.num[i];
			if(i>=lenb)bb=0;
			else bb=b.num[i];
			ans.num.push_back((aa-bb-carry+BASE)%BASE);
			if(aa<bb+carry)carry=1;
			else carry=0;
		}
		ans.setLength();
		return ans;
	}
	friend BigInteger operator*(const BigInteger &a,const BigInteger &b){
		size_t lena=a.num.size(),lenb=b.num.size();
		vector<long long> ansLL;
		for(size_t i=0;i<lena;i++){
			for(size_t j=0;j<lenb;j++){
				if(i+j>=ansLL.size())
					ansLL.push_back(1ll*a.num[i]*b.num[j]);
				else
					ansLL[i+j]+=1ll*a.num[i]*b.num[j];
			}
		}
		while(ansLL.back()==0&&ansLL.size()!=1)ansLL.pop_back();
		size_t len=ansLL.size();
		long long carry=0,tmp;
		BigInteger ans;
		ans.sign=(len==1&&ansLL[0]==0)||(a.sign==b.sign);
		ans.num.clear();
		for(size_t i=0;i<len;i++){
			tmp=ansLL[i];
			ans.num.push_back((tmp+carry)%BASE);
			carry=(tmp+carry)/BASE;
		}
		if(carry>0)ans.num.push_back(carry);
		ans.setLength();
		return ans;
	}
	friend BigInteger operator/(const BigInteger &a,const BigInteger &b){
		BigInteger aa(a.abs()),bb(b.abs());
		if(aa<bb)return 0;
		char *str=new char[aa.size()+1];
		memset(str,0,sizeof(char)*(aa.size()+1));
		BigInteger tmp;
		int lena=aa.length,lenb=bb.length;
		for(int i=0;i<=lena-lenb;i++){
			tmp=bb.e(lena-lenb-i);
			while(aa>=tmp){
				++str[i];
				aa=aa-tmp;
			}
			str[i]+='0';
		}
		BigInteger ans(str);
		delete[] str;
		ans.sign=(ans==0||a.sign==b.sign);
		return ans;
	}
	friend bool operator<(const BigInteger &a,const BigInteger &b){
		if(a.sign&&!b.sign)return false;
		else if(!a.sign&&b.sign)return true;
		else if(a.sign&&b.sign){
			if(a.length!=b.length)return a.length<b.length;
			else{
				size_t lena=a.num.size();
				for(int i=lena-1;i>=0;i--){
					if(a.num[i]!=b.num[i])return a.num[i]<b.num[i];
				}
				return false;//equal
			}
		}else return -b<-a;
	}
	friend ostream& operator<<(ostream &out,const BigInteger &n){
		size_t len=n.num.size();
		if(!n.sign)out<<'-';
		out<<n.num.back();
		for(int i=len-2;i>=0;i--)
			out<<setw(WIDTH)<<setfill('0')<<n.num[i];
		return out;
	}
	friend istream& operator>>(istream &in,BigInteger &n){
		string str;
		in>>str;
		size_t len=str.length(),i,start=0;
		if(str[0]=='-')start=1;
		if(str[start]=='\0')return in;
		for(i=start;i<len;i++)
			if(str[i]<'0'||str[i]>'9')return in;
		n=str.c_str();
		return in;
	}
public:
	BigInteger(int n=0){
		*this=n;
	}
	BigInteger(long long n){
		*this=n;
	}
	BigInteger(const char *n){
		*this=n;
	}
	size_t size()const{
		return length;
	}
	const BigInteger& operator=(int n){
		*this=(long long)n;
		return *this;
	}
	BigInteger e(size_t n)const{ // *10^n
		int tmp=n%8;
		BigInteger ans;
		ans.length=n+1;
		n/=8;
		while(ans.num.size()<=n){
			ans.num.push_back(0);
		}
		ans.num[n]=1;
		while(tmp--){
			ans.num[n]*=10;
		}
		return ans*(*this);
	}
	BigInteger abs()const{
		BigInteger ans(*this);
		ans.sign=true;
		return ans;
	}
	const BigInteger& operator+()const{
		return *this;
	}
	BigInteger operator-()const{
		BigInteger ans(*this);
		if(ans!=0)ans.sign=!ans.sign;
		return ans;
	}
	const BigInteger& operator++(){
		*this=*this+1;
		return *this;
	}
	const BigInteger& operator--(){
		*this=*this-1;
		return *this;
	}
	BigInteger operator++(int){
		BigInteger ans(*this);
		*this=*this+1;
		return ans;
	}
	BigInteger operator--(int){
		BigInteger ans(*this);
		*this=*this-1;
		return ans;
	}
	friend BigInteger operator%(const BigInteger &a,const BigInteger &b){
		return a-a/b*b;
	}
	const BigInteger& operator+=(const BigInteger &n){
		*this=*this+n;
		return *this;
	}
	const BigInteger& operator-=(const BigInteger &n){
		*this=*this-n;
		return *this;
	}
	const BigInteger& operator*=(const BigInteger &n){
		*this=*this*n;
		return *this;
	}
	const BigInteger& operator/=(const BigInteger &n){
		*this=*this/n;
		return *this;
	}
	const BigInteger& operator%=(const BigInteger &n){
		*this=*this-*this/n*n;
		return *this;
	}
public:
	bool operator!(){
		return *this==0;
	}
	friend bool operator>(const BigInteger &a,const BigInteger &b){
		return b<a;
	}
	friend bool operator<=(const BigInteger &a,const BigInteger &b){
		return !(b<a);
	}
	friend bool operator>=(const BigInteger &a,const BigInteger &b){
		return !(a<b);
	}
	friend bool operator==(const BigInteger &a,const BigInteger &b){
		return !(a<b)&&!(b<a);
	}
	friend bool operator!=(const BigInteger &a,const BigInteger &b){
		return (a<b)||(b<a);
	}
	friend bool operator||(const BigInteger &a,const BigInteger &b){
		return a!=0||b!=0;
	}
	friend bool operator&&(const BigInteger &a,const BigInteger &b){
		return a!=0&&b!=0;
	}
};

}
```

## 树状数组
```cpp
#pragma once
#include <cstring>
#include <iostream>
using namespace std;
// 二叉索引术 (BIT) 俗称树状数组
// 主要包含:
// 树状数组
// 		BIT1(单点修改,区间求和)
// 		BIT2(区间修改,单点查询)
// 		BIT3(区间修改,区间求和)
// 		BIT4(单点修改,区间求最小值)
// 二维树状数组
// 		BIT5(单点修改,矩阵求和)



//单点修改,区间求和
// 给定一个n个元素的数组b,有两种操作:
// add(x,v) 	即b[x]+=v,
// query(l,r) 	计算 b[l]+b[l+1]+...+b[r]
//拓展:利用BIT求逆序对 (复杂度 O(nlgn) 同时比归并好写)
// 		c数组初始化为0,c[i]=k表示i在b中出现k次(可能b要离散化)
//		用BIT维护c数组
// 		依次插入b[i],同时计算sum,更新答案ans+=(i-1)-sum
// 		b[i]前面有i-1个元素,其中有sum个比它小
//poj 2299
template <typename T>
struct BIT1{
	static const int N=1e5+5;
	int n;
	T a[N];
	void init(T *b,int n){
		memset(a,0,sizeof(a));
		this->n=n;
		for(int i=1;i<=n;i++){
			add(i,b[i]);
		}
	}
	void add(int x,T v){
		for(;x<=n;x+=lowbit(x)){
			a[x]+=v;
		}
	}
	T query(int l,int r){
		return sum(r)-sum(l-1);
	}
	int lowbit(int x){
		return x&(-x);
	}
	T sum(int x){
		T ans=0;
		for(;x>0;x-=lowbit(x)){
			ans+=a[x];
		}
		return ans;
	}
};

//区间修改,单点查询
// 给定一个n个元素的数组b,有两种操作:
// add(l,r,v) 	即b[l...r]+=v,
// query(x) 	查询b[x]
// 	算法
// 		记差分 c[i]=b[i]-b[i-1]
// 		则b[l..r]+=v等价于 c[l]+=v,c[r+1]-=v
// 		b[x]=c[1]+c[2]+...+c[x]
//hdu 1556
template <typename T>
struct BIT2{
	static const int N=1e5+5;
	int n;
	T a[N];
	void init(T *b,int n){
		memset(a,0,sizeof(a));
		this->n=n;
		for(int i=1;i<=n;i++){
			update(i,b[i]-b[i-1]);	//确保b[0]=0
		}
	}
	void add(int l,int r,T v){
		update(l,v);
		update(r+1,-v);
	}
	T query(int x){
		T ans=0;
		for(;x>0;x-=lowbit(x)){
			ans+=a[x];
		}
		return ans;
	}
	int lowbit(int x){
		return x&(-x);
	}
	void update(int x,T v){
		for(;x<=n;x+=lowbit(x)){
			a[x]+=v;
		}
	}
};

//区间修改,区间求和
// 给定一个n个元素的数组b,有两种操作:
// add(l,r,v) 	即b[l...r]+=v,
// query(l,r) 	计算b[l]+...+b[r]
// 	算法
// 		延续之前的思路,如何进行区间和查询
// 		由于此时数组数组里存的是差分数组c
// 		设前缀和d[i]=b[1]+b[2]+...+b[i]
// 		则有query(l,r)=d[r]-d[l-1]
// 		而d[i]=b[1]+b[2]+...+b[i]
// 		=(c[1])+(c[1]+c[2])+(c[1]+c[2]+c[3])+...+(c[1]+c[2]+c[3]+...+c[i])
// 		=i*c[1]+(i-1)*c[2]+(i-2)*c[3]+...+c[i]
// 		=(i+1)*(c[1]+c[2]+...+c[i])-(1*c[1]+2*c[2]+3*c[3]+...+i*c[i])
// 	故需要再用树状数组aa维护i*c[i]的值
// poj-3468

template <typename T>
struct BIT3{
	static const int N=1e5+5;
	int n;
	T a[N],aa[N];
	void init(T *b,int n){
		memset(a,0,sizeof(a));
		memset(aa,0,sizeof(aa));
		this->n=n;
		for(int i=1;i<=n;i++){	//确保b[0]=0
			update(i,b[i]-b[i-1]);
		}
	}
	void add(int l,int r,T v){
		update(l,v);
		update(r+1,-v);
	}
	T query(int l,int r){
		return sum(r)-sum(l-1);
	}
	int lowbit(int x){
		return x&(-x);
	}
	void update(int x,T v){
		for(int i=x;i<=n;i+=lowbit(i)){
			a[i]+=v;
			aa[i]+=x*v;
		}
	}
	T sum(int x){
		T ans=0;
		for(int i=x;i>0;i-=lowbit(i)){
			ans+=a[i]*(x+1)-aa[i];
		}
		return ans;
	}
};

//单点修改,区间求最小值
// 给定一个n个元素的数组b,有两种操作:
// update(x,v) 	即b[x]=v,
// query(l,r) 	计算min(b[l...r])
//原理与一般的树状数组有所不同,需要记录原数组

// a数组的结构如下,树状数组的核心结构
// a[1]=b[1]
// a[2]=min(b[1],b[2])
// a[3]=b[3]
// a[4]=min(b[1],b[2],b[3],b[4])
// a[5]=b[5]
// a[6]=min(b[5],b[6])
// a[7]=b[7]
// a[8]=min(b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8])
// 更新和查询均需要两次,复杂度均为 O((lgn)^2)
// 若要求最大值,只需把min改成max同时ans选一个合适的初值
// hdu-1754
template <typename T>
struct BIT4{
	static const int N=1e5+5;
	static const T INF=0x3f3f3f3f;
	int n;
	T a[N],b[N];
	void init(int n){
		memset(a,0,sizeof(a));
		this->n=n;
		T x;
		for(int i=1;i<=n;i++){
			cin>>x;
			update(i,x);
		}
	}
	void update(int x,T v){
		b[x]=v;
		for(;x<=n;x+=lowbit(x)){
			a[x]=b[x];
			for(int i=1;i<lowbit(x);i<<=1)//可以把lowbit放到循环外面以优化时间
				a[x]=min(a[x],a[x-i]);
		}
	}
	T query(int l,int r){
		T ans=INF;//注意初值
		while(r>=l){
			ans=min(ans,b[r]);
			for(r--;r-lowbit(r)>=l;r-=lowbit(r)){
				ans=min(ans,a[r]);
			}
		}
		return ans;
	}
	int lowbit(int x){
		return x&(-x);
	}
};

//单点修改,矩阵求和
// 给定一个n*m个元素的矩阵b,有两种操作:
// add(x,y,v) 	即b[x][y]+=v,
// query(x1,y1,x2,y2) 	计算sum(b[x1...x2][y1...y2])

// 二维树状数组a,
// a[x][y]=sum(b[i][j])
// 其中 x-lowbit(x)+1 <= i <= x
// 	    y-lowbit(y)+1 <= j <= y


template <typename T>
struct BIT5{
	static const int N=1e3+5;
	int n,m;
	T a[N][N];
	void init(int n,int m){
		memset(a,0,sizeof(a));
		this->n=n;
		this->m=m;
		T x;
		for(int i=1;i<=n;i++){
			for(int j=1;j<=m;j++){
				cin>>x;
				//读入原数组,并更新a
				add(i,j,x);
			}
		}
	}
	void add(int x,int y,T v){
		for(int i=x;i<=n;i+=lowbit(i)){
			for(int j=y;j<=m;j+=lowbit(j)){
				a[i][j]+=v;
			}
		}
	}
	T query(int x1,int y1,int x2,int y2){
		return sum(x2,y2)-sum(x2,y1-1)-sum(x1-1,y2)+sum(x1-1,y1-1);
	}
	int lowbit(int x){
		return x&(-x);
	}
	T sum(int x,int y){
		T ans=0;
		for(int i=x;i>0;i-=lowbit(i)){
			for(int j=y;j>0;j-=lowbit(j)){
				ans+=a[i][j];
			}
		}
		return ans;
	}
};

//矩阵修改,单点查询
// 给定一个n*m个元素的矩阵b,有两种操作:
// add(x1,y1,x2,y2,v) 	即b[x1...x2][y1...y2]+=v,
// query(x,y) 	查询 b[x][y]
// 算法:
// 		记二维差分c[x][y]=b[x][y]-b[x-1][y]-b[x][y-1]+b[x-1][y-1]
// 		则b[x1...x2][y1...y2]+=v等价于 
// 		c[x1][y1]+=v,c[x2+1][y1]-=v,c[x1][y2+1]-=v,c[x2+1][y2+1]+=v

// poj-2155

template <typename T>
struct BIT6{
	static const int N=1e3+5;
	int n,m;
	T a[N][N],b[N][N];
	void init(int n,int m){
		memset(a,0,sizeof(a));
		memset(b,0,sizeof(b));
		this->n=n;
		this->m=m;
		T x;
		for(int i=1;i<=n;i++){
			for(int j=1;j<=m;j++){
				cin>>b[i][j];
				update(i,j,b[i][j]-b[i-1][j]-b[i][j-1]+b[i-1][j-1]);
			}
		}
	}
	void add(int x1,int y1,int x2,int y2,T v){
		update(x1,y1,v);
		update(x2+1,y1,-v);
		update(x1,y2+1,-v);
		update(x2+1,y2+1,v);
	}
	T query(int x,int y){
		T ans=0;
		for(int i=x;i>0;i-=lowbit(i)){
			for(int j=y;j>0;j-=lowbit(j)){
				ans+=a[i][j];
			}
		}
		return ans;
	}
	int lowbit(int x){
		return x&(-x);
	}
	void update(int x,int y,T v){
		for(int i=x;i<=n;i+=lowbit(i)){
			for(int j=y;j<=m;j+=lowbit(j)){
				a[i][j]+=v;
			}
		}
	}
};

```

## 位运算
```cpp
#pragma once
//位运算

// 	>><<~ 
//	位运算通常为直接操作补码
//	注意当n非常大时会先取模(int为32,long long为64)并且会有警告(无论左右移)
//	移出部分直接舍弃,空位补0,x为负数时右移最左端补1,但左移仍会影响符号位
//	取反不影响符号位

// GCC内置位操作函数实现

//Returns one plus the index of the least significant 1-bit of x, 
//or if x is zero, returns zero. 
//效率大致比builtin慢10倍
int ffsll(unsigned long long x){
	if(!x)return 0;
	int t=6,r=1,y;	//若x为int只需把t初始值改为5，1llu改为1
	while(t--){
		y=(1<<t);
		if(!(x&(((1llu<<y))-1))){
			r+=y;
			x>>=y;
		}
	}
	return r;
}
//Returns the number of 1-bits in x. 
//效率大致比builtin慢4倍
int popcount(unsigned int x){
    x=(x&0x55555555)+((x>>1)&0x55555555);
    x=(x&0x33333333)+((x>>2)&0x33333333);
    x=(x&0x0F0F0F0F)+((x>>4)&0x0F0F0F0F);
    x=(x&0x00FF00FF)+((x>>8)&0x00FF00FF);
    x=(x&0x0000FFFF)+((x>>16)&0x0000FFFF);
    return x;
}
//效率大致比builtin慢15倍
int popcountll(unsigned long long x){
	int r=0;
	while(x){
		x=(x&(x-1)); //清除x的最后一位1
		r++;
	}
	return r;
}
//Returns the number of leading 0-bits in x, 
//starting at the most significant bit position. 
//If x is 0, the result is undefined. 
//效率大致比builtin慢4倍
int clzll(unsigned long long x){
    int r=0;
    if(!x)return -1;
    while(!(x&0x8000000000000000llu)){ //检测最高位是不是1
        r++;
        x<<=1;
    }
    return r;
}
//Returns the number of trailing 0-bits in x, 
//starting at the least significant bit position. 
//If x is 0, the result is undefined. 
int ctzll(unsigned long long x){
	return ffsll(x)-1;
}
//Returns the parity of x, 
//i.e. the number of 1-bits in x modulo 2. 
int parityll(unsigned long long x){
	return popcountll(x)&1;
}


// 其他常用位运算函数

// 位反转
// 原理就是先两两交换 再一对一对交换 、、、

unsigned char reverse(unsigned char ch){
	ch=(ch&0x55)<<1|(ch>>1)&0x55;//01010101
	ch=(ch&0x33)<<2|(ch>>2)&0x33;//00110011
	ch=(ch&0x0F)<<4|(ch>>4)&0x0F;//00001111
	return ch;
}

// 求一个数二进制表达式最右边1对应的值(lowbit)
// 用于树状数组
int lowbit(int x){
	return x&(-x);
}

```

## 组合数
```cpp
#pragma once
//组合数 C(n,m)
//表示从n个不同元素中取出m个元素的所有组合的个数
//性质
//	C(n,m)=n!/((n-m)!*m!)
//	C(n,m)=C(n,n-m)
//	C(n,m)=C(n-1,m-1)+C(n-1,m)
//	C(n,m)=n/m*C(n-1,m-1)
//	C(n,0)+C(n,1)+C(n,2)+...+C(n,n)=2^n
//	C(k,k)+C(k+1,k)+C(k+2,k)+...+C(n,k)=C(n+1,k+1)
//	1*C(n,1)+2*C(n,2)+3*C(n,3)+...+n*C(n,n)=n*2^(n-1)
//	1^2*C(n,1)+2^2*C(n,2)+3^2*C(n,3)+...+n^2*C(n,n)=n*(n+1)*2^(n-2)
//	C(n,1)/1-C(n,2)/2+C(n,3)/3+...+(-1)^(n-1)*C(n,n)/n=1+1/2+1/3+...+1/n
//	C(n,0)^2+C(n,1)^2+C(n,2)^2+...+C(n,n)^2=C(2n,n)

//判断组合数是否为奇数
//推导
//	n! 中因子k的个数为 n/k+n/k^2+n/k^3+n/k^4+...
//	根据组合数阶乘公式 容易转换成求 n,m,n-m 阶乘中因子2的个数a,b,c
//	若a=b+c则组合数为偶数 否则为奇数
bool is_odd(long long n,long long m){
	return (n&m)==m;
}

//计算组合数第n行奇数个数
//推导
//	Lucas定理 C(n,m)%p=C(n/p,m/p)*C(n%p,m%p)%p
//	分析C(n,m)%2 , 写成二进制的形式观察
//	比如n=1001101 那么m就是从 0000000 到 1001101 的枚举
//	由于定理中 C(0,1)=0 那么
//	如果n中0对应位置的m的二进制位是1 那么C(n,m)%2=0
//	因此m对应n中为0的位置只能填0,而1的位置可以填0或1	(结合异或性质可以推出上面的奇偶判断结论)
//	C(1,0)=C(1,1)=1 且不会超出n的范围
//	因此答案为 2^(n中1的个数)
//当n为32位整数时 可以用 __builtin_popcount(n) 计算n的二进制表示中1的个数
//此处使用模拟统计 复杂度 O(n) (此处的n表示数的二进制长度)
long long count_odd(long long n){
	//return 1ll<<(__builtin_popcount(n));
	int cnt=0;
	while(n){
		cnt+=n&1;
		n>>=1;
	}
	return 1ll<<cnt;
}


```

## 日期时间
```cpp
#pragma once
#include <iostream>
using namespace std;
//日期计算
//主要功能有:
//	判断闰年
//	判断日期合法性
//	返回指定日期是星期几
//实际使用可以去除一些无用的构造函数
const int days[]={0,31,28,31,30,31,30,31,31,30,31,30,31};
bool leap(int year){
	return (year%4==0&&year%100!=0)||year%400==0;
}
struct date{
	int year,month,day;
	date(){year=0,month=1,day=0;}
	date(int year,int month,int day):year(year),month(month),day(day){}
	date(long long a){
		year=a/146097*400;
		for(a%=146097;a>=365+leap(year);a-=365+leap(year),year++);
		for(month=1;a>=days[month];a-=days[month]+((month==2)?leap(year):0),month++);
		day=a+1;
	}
	operator long long(){//返回当前日期到0年1月0日经过的天数
		int ret=year*365+(year-1)/4-(year-1)/100+(year-1)/400;
		for(int i=1;i<month;ret+=((i==2)?leap(year):0)+days[i++]);
		return ret+day;
	}
};
bool legal(date x){
	if(x.month<1||x.month>12) return false;
	if(x.month==2) return x.day>0&&x.day<=days[2]+leap(x.year);
	return x.day>0&&x.day<=days[x.month];
}
int cmp(date x,date y){
	if(x.year!=y.year) return x.year-y.year;
	if(x.month!=y.month) return x.month-y.month;
	return x.day-y.day;
}
int weekday(date x){
	int y=(x.month>2)?x.year:x.year-1;
	int m=(x.month>2)?x.month-2:x.month+10;
	int d=x.day;
	return (d+y+y/4-y/100+y/400+int(2.6*m-0.2))%7;
}

//日期时间计算
struct dateTime{
	int year,month,day,hour,minute,second;
	dateTime(){year=1970,month=1,day=1,hour=minute=second=0;}
	dateTime(int year,int month,int day,int hour,int minute,int second):year(year),month(month),day(day),hour(hour),minute(minute),second(second){}
	dateTime(long long s){
		date now=(long long)date()+(s/86400);
		s%=(86400);
		year=now.year,month=now.month,day=now.day;
		hour=(s/3600+24)%24;s%=3600;
		minute=(s/60+60)%60;s%=60;
		second=(s+60)%60;
	}
	operator long long(){//返回当前时间到0年1月0日0时0分0秒经过的秒数
		return ((long long)date(year,month,day)-(long long)date())*86400+hour*3600+minute*60+second;
	}
};
//Unix时间戳换算
//从1970年1月1日开始经过的秒数
//2038年以后将会超过32位整数范围
//此处采用北京时间即以8时开始计算(hour-8)
dateTime unix2time(long long uts){
	return dateTime(dateTime(1970,1,1,8,0,0)+uts);
}
long long time2unix(dateTime x){
	return (long long)x-(long long)dateTime(1970,1,1,8,0,0);
}

//输入输出
istream& operator>>(istream &in,date &x){
	in>>x.year>>x.month>>x.day;
	return in;
}
ostream& operator<<(ostream &out,const date &x){
	out<<x.year<<" "<<x.month<<" "<<x.day<<"\n";
	return out;
}
istream& operator>>(istream &in,dateTime &x){
	in>>x.year>>x.month>>x.day>>x.hour>>x.minute>>x.second;
	return in;
}
ostream& operator<<(ostream &out,const dateTime &x){
	out<<x.year<<" "<<x.month<<" "<<x.day<<" ";
	out<<x.hour<<":"<<x.minute<<":"<<x.second;
	return out;
}


```

## Python高精度
```py
# python 高精度小数
# 计算 a/b 的精确值 保留到小数点后50位
# decimal模块提供了十进制浮点运算支持
# 注意如果用浮点数初始化，浮点数本身的误差

# 导入decimal模块，该模块为内置模块，无需额外安装
from decimal import *

# 设置全局精度
getcontext().prec=30

# 读入数据
a,b=input().split();
# 读入整数
# a,b=map(int,input().split())
# 读入一行整数去除首尾空格，以空格分割元素并求和
# a=Decimal(sum(map(int,input().strip().split())))

ans=Decimal(a)/Decimal(b);

print(format(ans,".30f"))
```

## 数位DP
```cpp
#include <bits/stdc++.h>
using namespace std;
//数位DP
//通常问题是，找出某一范围内符合条件的数
//在记忆化搜索的框架下进行
//本质思想为，依次把每位作为最高位，枚举这位可取的数字，决定后面需要的状态，答案相加
//dfs 参数
//	pos 当前数字位数
//	lead 前导0标记
//	limit 最高位标记(最高位通常会限制取值范围)
//	pre 前一位数
namespace main1{
//例1：定义一个正整数的价值是把这个数的十进制写出来之后，最长的等差子串的长度。
//求[l,r]范围内数字价值的总和 (记录较多参数)
int len,a[20];
long long dp[20][15][25][25][20];
//此处的st表示当前公差的最大差值，sum表示整个数字的最大价值，d表示公差(可能为负数)
long long dfs(int pos,int pre,long long st,long long sum,int d,bool lead,bool limit){
	if(pos>len) return sum;
	if(dp[pos][pre][st][sum][d+10]!=-1&&(!limit)&&(!lead))
		return dp[pos][pre][st][sum][d+10];
	long long ret=0;
	int res=limit?a[len-pos+1]:9;
	for(int i=0;i<=res;i++){
		if((!i)&&lead)ret+=dfs(pos+1,0,0,0,-10,true,limit&&(i==res));
		//有前导0且这位也是前导0
		else if(i&&lead)ret+=dfs(pos+1,i,1,1,-10,false,limit&&(i==res));
		//有前导0但这位不是前导0 (开始有1位，一个数形成等差数列)
		else if(d<-9)ret+=dfs(pos+1,i,2,2,i-pre,false,limit&&(i==res));
		//开始有2位，记录公差
		else if(d>=-9)ret+=dfs(pos+1,i,(i-pre==d)?st+1:2,max(sum,(i-pre==d)?st+1:2),(i-pre==d)?d:i-pre,false,limit&&(i==res));
		//2位以后，判断是否形成等茶，更新答案
	}
	//当没有前导0和最高位限制时可以记录答案
	return (!limit&&!lead)?dp[pos][pre][st][sum][d+10]=ret:ret;
}
long long part(long long x){
	len=0;
	while(x)a[++len]=x%10,x/=10;
	memset(dp,-1,sizeof(dp));
	return dfs(1,0,0,0,-10,true,true);
}
int main(){
	int T;
	long long l,r;
	scanf("%d",&T);
	while(T--){
		scanf("%lld%lld",&l,&r);
		printf("%lld\n",1?(part(r)-part(l-1)):(part(r)-part(l)+1));
		//注意l为0的情况
	}
	return 0;
}
}
namespace main2{
//不要62 hdu 2089
//统计区间[l,r]中不含4和62的数的个数 (常见模板)
int n,m,len,a[10],dp[10][10];
int dfs(int pos,int pre,bool limit){
	if(pos>len)return 1;
	if(dp[pos][pre]!=-1&&(!limit))
		return dp[pos][pre];
	int ret=0;
	int res=limit?a[len-pos+1]:9;
	for(int i=0;i<=res;i++){
		if(i==4||i==2&&pre==6)continue;
		ret+=dfs(pos+1,i,limit&&(i==res));
	}
	return (!limit)?dp[pos][pre]=ret:ret;
}
int solve(int x){
	len=0;
	while(x)a[++len]=x%10,x/=10;
	memset(dp,-1,sizeof(dp));
	return dfs(1,0,true);
}
int main(){
	while(~scanf("%d%d",&n,&m)&&n&&m){
		printf("%d\n",solve(m)-solve(n-1));
	}
	return 0;
}
}
namespace main3{
//NB群友 scut.online 422
//求不含0，1且各位数字之积在[l,r]范围内的数字个数
//简单暴搜模板，用map记录状态
//dfs(x)表示不含0，1且各位数字之积小于x的数字个数
typedef long long ll;
map<ll,ll> mp;
const int M=1e9+7;
ll dfs(ll x){
	if(x==1||x==0)return 0;
	if(mp[x])return mp[x];
	ll ans=0;
	for(int i=2;i<=9;i++) if(x>=i)
		ans+=dfs(x/i)+1;
	return mp[x]=ans;
}
int main(){
	int t;
	cin>>t;
	while(t--){
		ll l,r;
		cin>>l>>r;
		cout<<(dfs(r)-dfs(l-1)+M)%M<<"\n";
	}
}
}
int main(){
	main3::main();
	return 0;
}

```
## 对拍脚本
### Windows
```bat
::windows下对拍脚本
::	if errorlevel num	如果errorlevel大于等于num

@echo off
:ag
r > input.txt
a < input.txt > answer.txt
b < input.txt > output.txt
fc output.txt answer.txt
if not errorlevel 1 goto ag
pause

```
### Linux
```sh
#!/bin/bash
#linux下对拍脚本

while true; do
	./r > input.txt
	./a < input.txt > answer.txt
	./b < input.txt > output.txt
	diff output.txt answer.txt
	if [ $? -ne 0 ]; then break; fi	# 注意空格
done


# 以下为增强版本
# 主要有增加提示符 测试数据组数提示/限制
# 未来可能有 时间空间限制

cnt=0
while true 
do
	let cnt+=1;
	echo "Running on test ${cnt}"
	./$1 > input.txt
	./$2 < input.txt > answer.txt
	./$3 < input.txt > output.txt
	diff output.txt answer.txt
	diff output.txt answer.txt > /dev/null
	if [ $? -ne 0 ] 
	then 
		echo "Wrong answer on test ${cnt}"
		break 
	fi
done
```

## 欧几里得算法
```cpp
#pragma once
//欧几里得算法
//求a，b的最大公因数
long long gcd(long long a,long long b){
    return b?gcd(b,a%b):a;
}
//扩展欧几里得算法
//- 求 不定方程 ax + by = c 的解
//- 求 同余方程 ax = c (mod b) 的解
//- 令 c = 1 即可求 mod b 意义下 a 的 乘法逆元
//X = c / r * x + b / r * k  
//Y = c / r * y - a / r * k
//bezout's identity
//给定整数a, b, 必存在有整数x, y使得 ax + by = gcd(a, b) 成立
long long exgcd(long long a, long long b, long long &x, long long &y) {
    if(b==0){
        x=1,y=0;
        return a;
    }else{
        long long r=exgcd(b,a%b,x,y);
        long long t=x;x=y;y=t-a/b*y;
        return r;
    }
}


```

## 分解质因数
```cpp
#pragma once
//分解质因数
//n = p[0]^a[0] + p[1]^a[1] + ... p[k]^a[k]
//函数返回值为k+1

//朴素算法
#include <cmath>
namespace Naive{
    int factor(long long n,int *p,int *a){
        int cnt=0;
        for(int i=2;i<=sqrt(1.0*n);i++){
            if(!(n%i)){
                p[cnt++]=i;
                a[cnt]=0;
                while(n!=1&&!(n%i)){
                    a[cnt-1]++;
                    n/=i;
                }
            }
            if(n==1)return cnt;
        }
        if(n)a[cnt]=1,p[cnt++]=n;
        return cnt;
    }
}

//Pollard_rho算法
//用到了随机数rand, 随机函数为 (qmul(x, x, n) + c) % n
//y 每次多走一步，相当于 Floyd判圈
//- 先判断当前数是否为素数
//- 若不是，则试图找到当前数的一个因子(不一定是质因子)
//- 进行递归分解，有几率一直找不到因子
//注意结果无序, 素因子放在p中，可能有重复
//使用前注意令初始值 cnt = 0
#include <ctime>
#include <cstdlib>
#include "euclid.h"
#include "isPrime.h"
#include "qpow.h"
namespace Pollard_rho{
    void factor(long long n,int *p,int *a,int &cnt){
        if(n<2)return;
        if(Miller_Rabin::isPrime(n)){
            p[cnt++]=n;
            return ;
        }
        while(true){
            long long c=rand()%(n-1)+1;
            long long x=rand()%n;
            long long y=(qmul(x,x,n)+c)%n;
            while(x!=y){
                long long d=gcd(abs(x-y),n);
                if(d!=1&&d!=n){
                    factor(d,p,a,cnt);
                    factor(n/d,p,a,cnt);
                    return ;
                }
                x=(qmul(x,x,n)+c)%n;
                y=(qmul(y,y,n)+c)%n;
                y=(qmul(y,y,n)+c)%n;
            }
        }
    }
}


```

## 快速读入
```cpp
#pragma once
#include <cstdio>
//快速读入技巧

//cin读入优化
//取消cin与stdio的同步,注意此后 不能cin与sacnf混用
//std::ios::sync_with_stdio(false);

//普通输入输出优化
//可读写__int128
template<typename T>
inline bool read(T &t) {
    char c=getchar();
    if(c==-1)return false;
    while(c!='-'&&(c<'0'||c>'9'))c=getchar();
    bool sgn=false;
    if(c=='-') sgn=true,c=getchar();
    for(t=0;c>='0'&&c<='9';c=getchar())
        t=t*10+c-'0';
    return true;
}
//普通输出优化
template<typename T>
void write(T x){
    static char s[33],*s1;s1=s;
    if(!x)*s1++='0';
    if(x<0)putchar('-'),x=-x;
    while(x)*s1++=(x%10+'0'),x/=10;
    while(s1--!=s)putchar(*s1);
}

//快速输入挂 (只能文件读入)
//原理就是用fread一次性将所有数据读入  
//用法: 先 fast::begin(); 再用 fast::read(x);
// 注意很多情况下write速度不比printf快
namespace fast{
    const int sz=50*1024*1024; //缓冲区大小
    char buf[sz];
    int ptr,iosz;
    void begin(){
        ptr=0;
        iosz=fread(buf,1,sz,stdin);
    }
    template<typename T>
    inline bool read(T &t){
        while(ptr<iosz && buf[ptr]!='-' && (buf[ptr]<'0'||buf[ptr]>'9'))ptr++;
        if(ptr>=iosz)return false;
        bool sgn=false;
        if(buf[ptr]=='-')sgn=true,ptr++;
        for(t=0;ptr<iosz && '0'<=buf[ptr] && buf[ptr]<='9';ptr++)
            t=t*10+buf[ptr]-'0';
        if(sgn)t=-t;
        return true; 
    } 
    template<typename T> 
    void write(T x){
        static char s[33],*s1;s1=s;
        if(!x)*s1++='0';
        if(x<0)putchar('-'),x=-x;
        while(x)*s1++=(x%10+'0'),x/=10;
        while(s1--!=s)putchar(*s1);
    }
}
/*
参考数据 
(数据规模1亿)

IO				|时间(秒)
----------------|--------
cin读入         |23.645
cin优化读入     |10.496
cout输出        |14.329
scanf读入       |10.760
printf输出      |11.581
getchar读入优化 |1.803
fread输入挂     |1.079
putchar输出优化 |2.659


*/

```

## 斐波那契数列
```cpp
#pragma once
//斐波那契数列
//以递推的方法定义:f[1]=f[2]=1,f[n]=f[n-1]+f[n-2]
//前面几个是: 1,1,2,3,5,8,13,21,34
//通项公式: f[n]=(((1+sqrt(5))/2)^n-((1-sqrt(5))/2)^n)/sqrt(5)
//性质:
//	当n->INF是	f[n-1]/f[n] -> (sqrt(5)-1)/2  (即黄金分割)
//	奇数项求和	f[1]+f[3]+...+f[2*n-1]=f[2n]-f[2]+f[1]
//	偶数项求和	f[2]+f[4]+...+f[2*n]=f[2*n+1]-f[1]
//	平方求和	f[1]^2+f[2]^2+...+f[n]^2=f[n]*f[n+1]
//	尾数循环	最后1,2,3,4,5位数分别有约60,300,1500,15000,150000步的循环 (即取模后会出现循环,通常为除矩阵快速幂的另外一种做法)
//	三角形三边关系定理	若要在1-n中选出尽可能多的数,使这些数之间都不能组成三角形,那么最优就是选择斐波那契数列
//	(简单推论超过100个64位以内的整数一定至少可以构成一个三角形)

//递推法求第n项(n<=92)
long long getFibo(int n){
	long long a=1,b=1;
	for(;n>2;n-=2)
		a=a+b,b=a+b;
	return (n&1)?a:b;
}


```
## 高斯消元
```cpp
#include <cmath>
#include <algorithm>
#include "matrix.h"
using namespace std;
//高斯消元
//	用于解线性方程组
//	a为增广矩阵,n个方程
//	过程:
//	(i为正在计算的列，w为当前还没有计算过的第一行)
//		从第一列开始，先找出当前列绝对值最大的行r
//		若当前列均为0，跳过
//		交换w行与r行
//		消去本列中除w行外的值
//		判断方程组是否相容(无解返回-w)
//		单位化对角线
//这里采用矩阵类，实际使用数组即可
//若w<n-1，则方程有多解
//若w为负数，则方程无解
//否则方程最后一列即为解
//复杂度 O(n^3)
int gauss(matrix<double> &x,double eps=1e-8){
	int r,w=0;
	for(int i=0;i<x.n&&w<x.n;w++,i++){
		r=w;
		for(int j=w+1;j<x.n;j++)
			if(fabs(x.a[j][i])>fabs(x.a[r][i]))r=j;
		if(fabs(x.a[r][i])<eps){w--;continue;}
		if(r!=w)for(int j=0;j<=x.n;j++)swap(x.a[r][j],x.a[w][j]);
		for(int k=0;k<x.n;k++)if(k!=w)
			for(int j=x.n;j>=w;j--)x.a[k][j]-=x.a[k][i]/x.a[w][i]*x.a[w][j];
	}
	w--;
	for(int i=0;i<x.n;i++){
		bool flag=true;
		for(int j=i;j<x.n;j++)flag&=(fabs(x.a[i][j])<eps);
		if(flag&&fabs(x.a[i][x.n])>eps) return -w;
	}
	for(int i=0;i<x.n;i++)
		x.a[i][x.n]/=x.a[i][i];
	return w;
}

```

## 计算几何
### 点 线
```cpp
#pragma once

// 计算几何常用定理
// 欧拉定理:设平面图的顶点数,边数和面数分别为V,E和F,则V+F-E=2


// 计算几何模板

struct Point{
    double x,y;
    Point(double x=0,double y=0):x(x),y(y){}
};
typedef Point Vector;
Vector operator+(Vector A,Vector B){
    return Vector(A.x+B.x,A.y+B.y);
}
Vector operator-(Vector A,Vector B){
    return Vector(A.x-B.x,A.y-B.y);
}
Vector operator*(Vector A,double p){
    return Vector(A.x*p,A.y*p);
}
Vector operator/(Vector A,double p){
    return Vector(A.x/p,A.y/p);
}
bool operator<(const Point &a,const Point &b){
    return a.x<b.x||(a.x==b.x&&a.y<b.y);
}

const double eps=1e-10;
int dcmp(double x){
    if(fabs(x)<eps)return 0;
    else return x<0?-1:1;
}
bool operator==(const Point &a,const Point &b){
    return dcmp(a.x-b.x)==0&&dcmp(a.y-b.y)==0;
}
double Dot(Vector A,Vector B){
    return A.x*B.x+A.y*B.y;
}
double Length(Vector A){
    return sqrt(Dot(A,A));
}
double Angle(Vector A,Vector B){
    return acos(Dot(A,B)/Length(A)/Length(B));
}
double Cross(Vector A,Vector B){
    return A.x*B.y-A.y*B.x;
}
double Area2(Point A,Point B,Point C){
    return Cross(B-A,C-A);
}
//向量A逆时针旋转rad弧度,负数表示顺时针旋转
Vector Rotate(Vector A,double rad){
    return Vector(A.x*cos(rad)-A.y*sin(rad),A.x*sin(rad)+A.y*cos(rad));
}
//单位法向量
Vector Normal(Vector A){
    double L=Length(A);
    return Vector(-A.y/L,A.x/L);
}
//确保两条直线P+tv和Q+tw有唯一交点 Cross(v,w)!=0
// uva-11178
Point GetLineIntersection(Point P,Vector v,Point Q,Vector w){
    Vector u=P-Q;
    double t=Cross(w,u)/Cross(v,w);
    return P+v*t;
}
double DistanceToLine(Point P,Point A,Point B){
    Vector v1=B-A,v2=P-A;
    return fabs(Cross(v1,v2))/Length(v1);
}
double DistanceToSegment(Point P,Point A,Point B){
    if(A==B)return Length(P-A);
    Vector v1=B-A,v2=P-A,v3=P-B;
    if(dcmp(Dot(v1,v2))<0)return Length(v2);
    else if(dcmp(Dot(v1,v3))>0)return Length(v3);
    else return fabs(Cross(v1,v2))/Length(v1);
}
Point GetLineProjection(Point P,Point A,Point B){
    Vector v=B-A;
    return A+v*(Dot(v,P-A)/Dot(v,v));
}
//判断点p是否在线段a1a2上,不含端点
// LA-3263
bool OnSegment(Point p,Point a1,Point a2){
    return dcmp(Cross(a1-p,a2-p))==0&&dcmp(Dos(a1-p,a2-p))<0;
}
// 线段相交判断
//  快速排斥实验:验证以a,b为对角和以c,d为对角的矩形是否相交
//      若矩形不相交,则两线段肯定不相交
//  跨立实验即验证规范相交:两线段恰好有一个公共点,且不在任何一条线段的端点
//  充要条件是每条线段的两个端点都在另一条线段的两侧
// zoj-1648 51nod-1264
bool SegmentIntersection(Point a,Point b,Point c,Point d){
    if(max(a.x,b.x)<min(c.x,d.x))return false; 
    if(max(a.y,b.y)<min(c.y,d.y))return false;
    if(max(c.x,d.x)<min(a.x,b.x))return false;
    if(max(c.y,d.y)<min(a.y,b.y))return false;
    if(Cross(c-a,b-a)*Cross(b-a,d-a)<0)return false;
    if(Cross(a-c,d-c)*Cross(d-c,b-c)<0)return false;
    return true;
}
//计算多边形的有向面积
// 从第一个顶点为划分,把多边形划分为n-2个三角形,对非凸边形也适用
// 点顺时针给出,有向面积为负,下标从0开始
// hdu-2036
double PolygonArea(Point *p,int n){
    double area=0;
    for(int i=0;i<n-1;i++){
        area+=Cross(p[i]-p[0],p[i+1]-p[0]);
    }
    return area/2;
}

```

## 逆元
```cpp
#pragma once
#include "euclid.h"
#include "qpow.h"

//扩展欧几里得算法
//若 a * x = 1 (mod b) ,则称 x 为 mod b 意义下的 a 的逆元
//上式可转换为不定方程 a * x + b * y = 1 
namespace euclid{
	long long inv(long long a, long long b){
		long long x,y,r=exgcd(a,b,x,y);
		return (r==1)?(x+b)%b:-1;
	}
}

// 费马小定理 若 b 为质数, 则有 a ^ b = a (mod b)
// 若 gcd(a, b) = 1, 则有 a ^ (b - 1) = 1 (mod b)
// 故当 gcd(a, b) = 1, inv(a, b) = a ^ (b - 2) 
namespace fermat{
	long long inv(long long a, long long b){
		return qpow(a, b - 2, b);
	}
}


```
### 线性递推
```cpp
#pragma once
//线性求逆元
//	1^(-1) = 1 (mod p)
//	设 p = k * i + r , r < i , 1 < i < p
//	mod p 意义下有  k * i + r = 0 (mod p)
//	两边同时乘 i^(-1) * r^(-1)
//	k * r^(-1) + i^(-1) = 0 (mod p)
//	i^(-1) = -k * r^(-1) (mod p)
//	i^(-1) = -(p/i) * (p%i)^(-1) (mod p)
//故有 inv[i] = -(p/i) * inv[p%i]
//由此可求 [1,n] 逆元，注意p为素数
//注意 n >= p 部分无意义

void getInv(long long *inv,int n,long long p){
	inv[1]=1;
	for(int i=2;i<=n;i++)
		inv[i]=(p-p/i)*inv[p%i]%p;
}

//求 [1, 1e6] 逆元效率对比
//不含IO时间
//	线性递推		0.071
//	euclid		0.304
//	fermat		0.453

```
## 素数
```cpp
#pragma once
//筛法求素数
//求[2, N]中的所有素数
//valid[i]记录i是否为素数, 初始所有valid[i] = true.
//getPrime返回值为素数总数, 素数记录在prime数组中
//埃拉托斯特尼筛法 O(nlgn)
//	从2开始从小到大枚举i, 若valid[i] = true,
//	则把从i^2开始的每一个i的倍数的valid = false
//	(因为i * (2 ~ i-1)的数在 2 ~ i-1 时都已经被筛去
namespace Eratosthenes{
	int getPrime(int n,bool *valid,int *prime){
		memset(valid,true,sizeof(valid));
		for(int i=2;i<=n;i++)if(valid[i]){
			if(n/i<i)break;
			for(int j=i*i;j<=n;j+=i)
				valid[j]=false;
		}
		int cnt=0;
		for(int i=2;i<=n;++i) 
			if(valid[i])prime[++cnt]=i;
		return cnt;
	}
}
//欧拉筛法 O(n)
//	用已知的prime中的素数的i倍来消去合数
//	当i是prime[j]的倍数时, i=k*prime[j], i*prime[j+1]=k*prime[j]*prime[j+1]
//	与i=k*prime[j+1]时重复
namespace Euler{
	int getPrime(int n,bool *valid,int *prime){
		memset(valid,true,sizeof(valid));
		int cnt=0;
		for(int i=2;i<=n;i++){
			if(valid[i])prime[++cnt]=i;
			for(int j=1;(j<=cnt) && (prime[j]<=n/i);j++){
				valid[i*prime[j]]=false;
				if(i%prime[j]==0)break;
			}
		}
		return cnt;
	}
}


```
### 素数判定
```cpp
#pragma once
#include <cmath>
#include "qpow.h"
//素数测试 (好记的素数 4567 1234567894987654321 (10^24-1)/9 )

//朴素算法
//	从2试到sqrt(n)
//	可以用筛法先构造出一个sqrt(n)以内的素数表来优化
//复杂度 O(sqrt(n))
namespace Naive{
	bool isPrime(long long n){
		if(n==2)return true;
		if(n<2||!(n&1))return false;
		for(long long i=2;i<=sqrt(1.0*n);i++)
			if(n%i==0)return false;
		return true;
	}
}

//Fermat小定理
//	若p是素数, a是小于p的正整数
//	那么 a^(p-1) % p = 1
//	如果Fermat小定理的逆命题时正确的
//	那么有，如果 p | a^(p-1)-1 时，则p就是素数
//	事实上有许多反例，如 a = 2 时 2^340 % 341 = 1 但 341 = 11 * 31
//	称这类数为伪素数，通过选取不同的a多次验证可以减少出错的概率
//  但甚至存在一类叫做Carmichael的数(561,1105,1729,...)
//	对所有的a满足Fermat小定理
//复杂度 O((lgn)^3)
namespace Fermat{
	bool isPrime(long long n, int times = 7){
		if(n==2)return true;
		if(n<2||!(n&1))return false;
		for(long long a=2;a<=times+1&&a<n;a++)
			if(qpow(a,n,n)!=a)return false;
		return true;
	}
}

//Miller-Rabin素性测试
//	二次探测定理
//		若p是素数，x时小于p的正整数，且x^2 % p = 1
//		则 x=1 或 x=p-1
//	要测试N是否为素数, 首先将N-1分解为2^s * d
//	在每次测试开始时，先随即选一个a in [1,N-1]
//	如果对所有的r in [0,s-1] 都有 
//	a^d % N != 1 && a^(2^r * d) % N != -1
//	则N是合数，否则N有3/4的几率为素数
//	默认7次测试情况下，第一个反例是341550071728321
//复杂度 O(k*(lgn)^3) k 为测试次数
namespace Miller_Rabin{
	bool isPrime(long long n,int times=7){
		if(n==2)return true;
		if(n<2||!(n&1))return false;
		static long long a[]={2, 3, 5, 7, 11, 13, 17, 61, 4567, 24251};
		long long d=n-1,k=0;
		while(!(d&1))d=d>>1,k++;
		for(int i=0;i<times;i++){
			if(n==a[i])return true;
			long long t=Qpow(a[i],d,n);
			for(int j=0;j<k;j++){
				long long y=qmul(t,t,n);
				if(y==1 && t!=1 && t!=n-1)return false;
				t=y;
			}
			if(t!=1)return false;
		}
		return true;
	}
}


```

## 哈希表
```cpp
//哈希表
#include <iostream>
#include <string>
#include <map>
#include <unordered_map>
using namespace std;
//STL map 可以当作hash表使用
//map采用红黑树实现，红黑树是平衡二叉树的一种
//插入、查询、删除 复杂度 均为 O(lgn)
//注意：
//	map中的值默认按升序排列
// 	map的迭代器解引用的结果是得到一个 pair类型的对象。
//	pair有两个成员 first, second。first保存 key的值，second 保存value的值。
// 	[k] 返回 map 中 Key 为 k的元素的value的引用 若key不存在 返回0
// 	find	查找key 返回迭代器 k不存在则返回end
// 	count	统计key	对于map其值为0或1
// 	erase	删除key	返回删除个数
// 	equal_range	以pair形式返回 (lower_bound,upper_bound)

int main1(){
	map<string,int> mp;
	string s;
	int n;
	
	cin>>n;
	for(int i=0;i<n;i++){
		cin>>s;
		mp[s]=i;
	}/*
	for(auto i:mp){
		cout<<i.first<<endl;
	}*/
	while(cin>>s){
		cout<<mp[s]<<endl;
	}
	return 0;
}

//STL unordered_map (C++11)
//以哈希表为底层的关联式容器 （开链法）
//在内部，unordered_map中的元素没有按照它们的键值或映射值的任何顺序排序
//而是根据它们的散列值组织成桶以允许通过它们的键值直接快速访问单个元素
//复杂度 O(1)	(最坏为线性，不过几乎不可能出现)
//注意：
//	使用基本和map相同
// 	unordered_map的erase操作会缩容，导致元素重新映射，降低性能。
//	空间占用更多
// 	

int main2(){
	unordered_map<string,double> mp;
	string thing;
	double cost;
	int n;
	cin>>n;
	for(int i=0;i<n;i++){
		cin>>thing>>cost;
		mp[thing]=cost;
	}
	for(auto i:mp){
		cout<<i.first<<endl;
	}
	/*
	while(cin>>thing){
		cout<<mp[thing]<<endl;
	}*/
	return 0;
}

// pbds hash_table
// 用法与上面几乎一样
// 速度与unordered_map相当 （可能更快）
// 需要头文件 (若支持可以用 bits/extc++.h )
#include<ext/pb_ds/assoc_container.hpp>
#include<ext/pb_ds/hash_policy.hpp>
// 命名空间
using namespace __gnu_pbds;
// 声明方式
cc_hash_table<string,double> mp1;
gp_hash_table<string,double> mp2;
// cc 是拉链法 （建议使用）
// gp 是查探法 空间占用更大 同时也许会更快

int main(){

	return 0;
}
```

## 矩阵
```cpp
#pragma once
#include <iostream>
#include <cstring>
#include <vector>
using namespace std;
//矩阵
//	实现矩阵的定义、加减乘法、数乘、快速幂
//	注意数乘返回值中矩阵的元素为乘数的类型
//	动态长度版本,可把vector 改为二维数组
template<typename T>
struct matrix{
	int n, m;
	vector< vector<T> > a;
	matrix(int n,int m)n(n),m(m){
		a.resize(n);
		for(int i=0;i<n;i++)a[i].resize(m,0);
	}
	matrix<T> operator+(const matrix<T> &b){
		matrix<T> ans(n,m);
		for(int i=0;i<n;i++)
			for(int j=0;j<m;j++)
				ans.a[i][j]=a[i][j]+b.a[i][j];
		return ans;
	}
	matrix<T> operator-(const matrix<T> &b){
		matrix<T> ans(n,m);
		for(int i=0;i<n;i++)
			for(int j=0;j<n;j++)
				ans.a[i][j]=a[i][j]-b.a[i][j];
		return ans;
	}
	matrix<T> operator*(const matrix<T> &b){
		matrix<T> ans(n,b.m);
		for(int i=0;i<ans.n;i++)
			for(int j=0;j<ans.m;j++)
				for(int k=0;k<m;k++)
					ans.a[i][j]=ans.a[i][j]+a[i][k]*b.a[k][j];
		return ans;
	}
	matrix<T> operator^(long long y){
		matrix<T> x=*this;
		matrix<T> ans(n,n);
		for(int i=0;i<n;i++)ans.a[i][i]=1;
		while(y){
			if(y&1)ans=ans*x;
			x=x*x;
			y=y>>1;
		}
		return ans;
	}
};

//矩阵的数乘(注意返回矩阵类型)
template <typename T,typename Ty>
matrix<Ty> operator*(Ty k,const matrix<T> &x){
	matrix<Ty> ans(x.n,x.m);
	for(int i=0;i<x.n;i++)
		for(int j=0;j<x.m;j++)
			ans.a[i][j]=k*x.a[i][j];
	return ans;
}

//矩阵快速幂
template <typename T>
matrix<T> mul(matrix<T> x,matrix<T> y,long long p){
	matrix<T> ans(x.n,y.m);
	for(int i=0;i<x.n;i++)
		for(int j=0;j<y.m;j++)
			for(int k=0;k<x.m;k++)
				ans.a[i][j]=(ans.a[i][j]+x.a[i][k]*y.a[k][j])%p;
	return ans;
}
template <typename T>
matrix<T> qpow(matrix<T> x,long long y,long long p){
	matrix<T> ans(x.n,x.n);
	for(int i=0;i<x.n;i++) ans.a[i][i]=1;
	while(y){
		if(y&1) ans=mul(ans,x,p);
		x=mul(x,x,p);
		y=y>>1;
	}
	return ans;
}

//矩阵输入输出
template <typename T>
istream& operator>>(istream& in,matrix<T> &x){
	for(int i=0;i<x.n;i++)
		for(int j=0;j<x.m;j++)
			in>>x.a[i][j];
	return in;
}
template <typename T>
ostream& operator<<(ostream& out,const matrix<T> &x){
	for(int i=0;i<x.n;i++)
		for(int j=0;j<x.m;j++)
			out<<x.a[i][j]<<",\n"[j==x.m-1];
	return out;
}


```

### 代数余子式
```cpp
#pragma once
#include "matrix.h"
//求矩阵的代数余子式
//定义:
//	在n*m的矩阵A中选定元素a[i][j]
//	去掉第i行、第j列所剩下的元素
//	构成的(n-1)*(m-1)矩阵B称为A的余子式
//	余子式与符号项(-1)^(i+j)的乘积称为代数余子式
//注意此处的i,j从1开始编号，而程序中的是从0开始编号
//注意此处略微拓展了一下概念，实际代数余子式为一个行列式即一个数
//注意返回值不含符号项

template <typename T>
matrix<T> cofactor(const matrix<T> &x,int p,int q){
	matrix<T> ans(x.n-1,x.m-1);
		for(int j=0;j<x.n-1;j++)
			for(int k=0;k<x.m-1;k++)
				ans.a[j][k]=x.a[(j>=p)?j+1:j][(k>=q)?k+1:k];
	return ans;
}


```
### 行列式
```cpp
#pragma once
#include "matrix.h"
#include "Matrix_Cofactor.h"
//求矩阵行列式
//行列式按一行展开定理
//	n阶行列式D等于它的任意一行(列)的所有元素与各自的代数余子式的乘积之和
//以下按第一行展开
//复杂度 O(n^4)

template <typename T>
T det(const matrix<T> &x){
	if(x.n==1)return x.a[0][0];
	T ans=0;
	for(int i=0;i<x.n;i++)
		ans+=((i&1)?-1:1)*x.a[0][i]*det(cofactor(x,0,i));
	return ans;
}

```
### 伴随矩阵
```cpp
#pragma once
#include "Matrix.h"
#include "Matrix_Det.h"
#include "Matrix_Cofactor.h"
//求矩阵的伴随矩阵
//伴随矩阵定义:
//	A*[i][j] = A[j][i]	
//	其中A[i][j]为矩阵A中元素a[i][j]的代数余子式
//伴随矩阵性质:
//	A* = |A| * A^(-1)
//复杂度	O(n^6)

template <typename T>
matrix<T> star(const matrix<T> &x){
	matrix<T> ans(x.m,x.n);
	for(int i=0;i<x.m;i++)
		for(int j=0;j<x.n;j++)
			ans.a[i][j]=((i+j)&1?-1:1)*det(cofactor(x,j,i));
	return ans;
}



```
### 逆
```cpp
#pragma once
#include <cmath>
#include <algorithm>
#include "matrix.h"
#include "Matrix_Det.h"
#include "Matrix_Star.h"
using namespace std;
//矩阵求逆
//假设矩阵可逆,注意返回值为matrix<double>

//通过伴随矩阵求逆
//	原理:	inv(A) = 1/det(A)*star(A)
//复杂度	O(n^6)
namespace Star{
	template <typename T>
	matrix<double> inv(const matrix<T> &x){
		return (double(1.0)/det(x))*star(x);
	}
}

//通过初等矩阵求逆
//原理:
//	设A为n阶可逆矩阵，那么
//	将n阶单位矩阵E添加到A的右侧，构成分块矩阵(A,E)
//	然后对这个n*2n矩阵进行初等行变换，使它变为(E,B)的形式
//	那么A^(-1) = B, 因为存在初等矩阵P1,P2...Pm,使得Pm...P2P1A=E,
//	那么 Pm...P2P1(A,E) = (E,Pm...P2P1)
//	变换方法类似高斯消元
//		1.构造分块矩阵y
//		2.从第i列开始(1~n)
//		3.找出不为0的行
//		4.交换到第i行
//		5.消去第i列中除第i行外的元素
//		6.计算逆矩阵
//复杂度	O(n^3)
namespace Tran{
	template <typename T>
	matrix<double> inv(const matrix<T> &x){
		matrix<double> y(x.n,2*x.n);
		for(int i=0;i<x.n;i++) for(int j=0;j<x.n;j++) y.a[i][j]=x.a[i][j];
		for(int i=0;i<x.n;i++) y.a[i][i+x.n]=1;
		for(int i=0;i<x.n;i++){
			for(int j=0;j<x.n;j++) if(fabs(y.a[j][i])>0){
				if(j==i)break;
				for(int k=0;k<2*x.n;k++) swap(y.a[j][i],y.a[i][i]);
				break;
			}
			for(int j=0;j<2*x.n;j++) if(j>i) y.a[i][j]*=(double)1.0/y.a[i][i];
			y.a[i][i]=1;
			for(int j=0;j<x.n;j++) if(j!=i&&fabs(y.a[j][i])>0){
				for(int k=0;k<2*x.n;k++) if(k!=i)
					y.a[j][k]-=y.a[j][i]*y.a[i][k];
				y.a[j][i]=0;
			}
		}
		matrix<double> ans(x.n,x.n);
		for(int i=0;i<x.n;i++) for(int j=0;j<x.n;j++) ans.a[i][j]=y.a[i][j+x.n];
		return ans;
	}
}
	

```
## 快速幂
```cpp
#pragma once
//快速幂
//	x^y = (x^(y/2))^2 * x^(y%2)
//常常需要取模，注意避免中间结果溢出
//复杂度 O(lgn)
//用于矩阵快速幂时记得确保( ans = 1 )单位化, % 操作
long long qpow(long long x,long long y){
	long long ans=1;
	while(y){
		if(y&1)ans=ans*x;
		x=x*x;
		y=y>>1;
	}
	return ans;
}
long long qpow(long long x, long long y, long long mod){
	long long ans=1;
	while(y){
		if(y&1)ans=(ans*x)%mod;
		x=(x*x)%mod;
		y=y>>1;
	}
	return ans;
}

//快速乘
long long qmul(long long a,long long b){
    long long ans=0;
    while(b){
        if(b&1)ans=ans+a;
        a=(a+a)%mod;
        b=b>>1;
    }
    return ans;
}
long long qmul(long long a,long long b,long long mod){
    long long ans=0;
    while(b){
        if(b&1)ans=(ans+a)%mod;
        a=(a+a)%mod;
        b=b>>1;
    }
    return ans;
}

//快速乘下的快速幂(通常是为了防止long long 相乘溢出)
long long Qpow(long long x,long long y){
	long long ans=1;
	while(y){
		if(y&1)ans=qmul(ans,x);
		x=qmul(x,x);
		y=y>>1;
	}
	return ans;
}
long long Qpow(long long x,long long y,long long mod){
	long long ans=1;
	while(y){
		if(y&1)ans=qmul(ans,x,mod);
		x=qmul(x,x,mod);
		y=y>>1;
	}
	return ans;
}


```
## RMQ问题
```cpp
#pragma once
#include <cmath>
//RMQ 问题 (区间最小值问题)
//给定n个数a[1]~a[n]
//q次询问[l,r]中的最小值
//朴素搜索做法,返回值为数组下标
//复杂度	O(n*q)
namespace Naive{
template <typename T>
int RMQ(T *a,int l,int r){
	int ans=l;
	for(int i=l+1;i<=r;i++){
		if(a[i]<a[ans])ans=i;
	}
	return ans;
}
}

//RMQ问题 动态查询
//预处理	O(nlgn)
//	构建ST表 f[i][j]表示从a[i]开始连续2^j个元素中的最大值(的下标)
//	f[i][0]=a[i]
//	f[i][j]=max(f[i][j-1],f[i+2^(j-1)][j-1])
//	其中 i+2^j-1<=n, 
//	注意 f[i][j]由f[i][j-1]转移而来而不是f[i-1][j]
//	故j要放在外层循环
//查询 O(1)
//	把[l,r]划分为两个长度为2^k的小区间
//	其中k=floor(log2(r-l+1))
//	则 ans=max(f[l][k],f[r-2^k+1][k])


namespace ST{
//此处的f中存的是数组下标
//注意i开始下标为1还是为0
template <typename T>
void getST(T *a,int n,int f[][30],bool (*cmp)(T,T)){// for min
    for(int i=0;i<=n;i++)f[i][0]=i;
    for(int j=1;j<30;j++){
        for(int i=0;i<=n&&(i+(1<<j)-1)<=n;i++){
            if(cmp(a[f[i][j-1]],a[f[i+(1<<(j-1))][j-1]]))
                f[i][j]=f[i][j-1];
            else
                f[i][j]=f[i+(1<<(j-1))][j-1];
        }
    }
}
template <typename T>
int RMQ(T *a,int f[][30],int l,int r,bool (*cmp)(T,T)){//query for min
    int k=int(log2(r-l+1));
    if(cmp(a[f[l][k]],a[f[r-(1<<k)+1][k]]))
        return f[l][k];
    else
        return f[r-(1<<k)+1][k];
}
}


```
## 拓扑排序
```cpp
#pragma once
#include "graph.h"
#include <queue>

//求有向无环图的拓扑序
//算法：
// 	n个点，m条边
//	统计每个节点的入度ind
// 	选出入度为0的点push进队列Q
// 	取出队首cur，加入答案ans数组
// 	将cur指向的点x的入度减一
// 	判断x的入度，为0则入队
// 	重复直到Q为空
// 	若ans大小不等于n则不存在拓扑序（有环）
//复杂度 O(n)
//注意:	拓扑序不唯一

bool topological_sort(graph1 &G,vector<int> &ans){
	queue<int> Q;
	for(int i=1;i<=G.n;i++){
		if(!G.ind[i])Q.push(i);
	}
	while(!Q.empty()){
		int cur=Q.front();Q.pop();
		ans.push_back(cur);
		for(int i=0;i<G.E[cur].size();i++){
			int x=G.E[cur][i];
			G.ind[x]--;
			if(!G.ind[x])Q.push(x);
		}
	}
	return ans.size()==G.n;
}

//求有向无环图的字典序最小的拓扑排序
//将上面的队列换成优先队列即可
//时间复杂度 O(nlgn)
namespace lexicographical_order{
bool topological_sort(graph1 &G,vector<int> &ans){
	priority_queue<int,vector<int>,greater<int> > Q; //最小值优先
	for(int i=1;i<=G.n;i++){
		if(!G.ind[i])Q.push(i);
	}
	while(!Q.empty()){
		int cur=Q.top();Q.pop();
		ans.push_back(cur);
		for(int i=0;i<G.E[cur].size();i++){
			int x=G.E[cur][i];
			G.ind[x]--;
			if(!G.ind[x])Q.push(x);
		}
	}
	return ans.size()==G.n;
}
}

//拓扑排序 编号小的尽量排在前面
//例题参考 hdu 4857
//与字典序最小不一样
//反例数据
// 	5 4
// 	5 2
//  2 1
// 	4 3
// 	3 1
//字典序最小：		4 3 5 2 1
//编号小尽量排前：	5 2 4 3 1
//算法：
// 	建一个反图，跑一遍字典序最大的拓扑排序，倒过来即为答案
```

## 并查集
```cpp
#pragma once
// 并查集
// 带一般的路径压缩

struct Set{
	static const int N=1e5+5;
	int p[N];
	void init(int n){
		for(int i=0;i<=n;i++)
			p[i]=i;
	}
	int find(int x){
		return p[x]==x?x:p[x]=find(p[x]);
	}
	void join(int x,int y){
		x=find(x),y=find(y);
		if(x!=y)p[x]=y;
	}
};

// 带权并查集
// 每条边p中记录了额外信息v
// 一般是两个结点相对的一种关系
// 一般需要根据实际问题修改
// Gym - 101412F

struct SetA{
	static const int N=1e5+5;
	int p[N],v[N];
	void init(int n){
		for(int i=0;i<=n;i++)
			p[i]=i;
		memset(v,0,sizeof(v));
	}
	int find(int x){
		if(x==p[x])return x;
		int t=p[x];
		p[x]=find(p[x]);
		v[x]+=v[t];
		return p[x];
	}
	void join(int x,int y,int w){
		int a=find(x),b=find(y);
		p[b]=a;
		v[b]=v[x]-v[y]+w;
	}
};

```