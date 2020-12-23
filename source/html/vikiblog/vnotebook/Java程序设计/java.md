# 20190425
## 工厂模式
### 简单工厂模式
又称静态工厂方法模式  

* 定义一个用于创建对象的接口  
* 工厂类角色：是本模式的核心，含有一定的商业逻辑和判断逻辑。在java中它往往由一个具体类实现。  
* 抽象产品角色：一般是具体产品继承的父类或者实现的接口。在java中由接口或者抽象类来实现。  
* 具体产品角色：工厂类所创建的对象就是此角色的变例。在java中由一个具体类实现。  

### 工厂方法模式
* 抽象工厂角色：是工厂方法模式的核心，它与应用程序无关。

## 区别

### 简单工厂模式
新产品的加入要修改工厂角色中的判断语句  

### 工厂方法模式
要么将判断逻辑留在抽象工厂角色中，要么在客户程序中将具体工厂角色。


# 20190506
## 匿名内部类
假如只创建这个类的一个对象，就不必为它命名了。  
用于构造对象的任何参数都要被放在超类名后面的括号{}内
简单例子：  

```java
interface Contents{
	public int value();
}
public class Main{
	public Contents contents(){
		return new Contents(){
			public int i=11;
			public int value(){
				return i;
			}
		};
	}
	public static void main(String[] args){
		Main m=new Main();
		Contents c=m.contents();
		System.out.println(c.value());
	}
}
```

构造器的名字必须与类名相同，匿名类不能有构造器。  
将构造器参数传递给超类构造器。  
  
匿名内部类既可以扩展类，也可以实现接口，但不能两者都做。  
（注：一般的类可以两者都有）  
如果实现接口，也只能实现一个接口。  

## 静态内部类 vs 非静态内部类
### 静态内部类（嵌套类）
* 对象生成：new 外围类.内部类();
* 必须通过对象来访问外围类的数据  

### 非静态内部类
* 对象生成：外围类对象.new 内部类();
* 可以直接访问外围类的数据
例子：

```java
interface Contents{

}
interface Destination{
	
}
public class Main{
	private static class ParcelContents implements Contents{
		private int i=11;
		public int value(){
			return i;
		}
	}
	protected static class ParcelDestination implements Destination{
		private String label;
		private ParcelDestination(String whereTo){
			label=whereTo;
		}
		public String readLable(){
			return label;
		}
		public static void f(){}
		static int x=10;
		static class AnotherLevel{
			public static void f(){}
			static int x=10;
		}
	}
	public static Destination destination(String s){
		return new ParcelDestination(s);
	}
	public static Contents contents(){
		return new ParcelContents();
	}
	public static void main(String[] args){
		Contents c=contents();
		Destination d=destination();
	}
}
```
## 内部类+向上转型
```java
class Egg2{
	protected class Yolk{
		public Yolk(){
			System.out.println("Egg2.Yolk()");
		}
		public void f(){
			System.out.println("Egg2.Yolk.f()");
		}
	}
	private Yolk y=new Yolk();
	public Egg2(){
		System.out.println("New Egg2()");
	}
	public void insertYolk(Yolk yy){
		y=yy;
	}
	public void g(){
		y.f();
	}
}
public class BigEgg2 extends Egg2{
	public class Yolk extends Egg2.Yolk{
		public Yolk(){
			System.out.println("BigEgg2.Yolk()");
		}
		public void f(){
			System.out.println("BigEgg2.Yolk.f()");
		}
	}
	public BigEgg2(){
		insertYolk(new Yolk());
	}
	public static void main(String[] args){
		Egg2 e2=new BigEgg2();
		e2.g();
	}
}

```

## 下午实验课
```java
import java.util.Scanner;
interface GetXY{
	double getX();
	double getY();
}
interface GetXYZ extends GetXY{
	double getZ();
}
interface SetXY{
	void setX(double x);
	void setY(double y);
}
interface SetXYZ extends SetXY{
	void setZ(double z);
}
interface Distance{
	double distance();
}
class Point implements GetXYZ,SetXYZ{
	public double x,y,z;
	public Point(double x,double y,double z){
		setX(x);
		setY(y);
		setZ(z);
	}
	public double getX(){
		return x;
	}
	public double getY(){
		return y;
	}
	public double getZ(){
		return z;
	}
	public void setX(double x){
		this.x=x;
	}
	public void setY(double y){
		this.y=y;
	}
	public void setZ(double z){
		this.z=z;
	}
	public double distance(){return 0;}
}
class PointCalc extends Point implements Distance{
	public PointCalc(double x,double y,double z){
		super(x,y,z);
	}
	public double distance(){
		return Math.sqrt(x*x+y*y+z*z);
	}
}

public class Main{
	public static void main(String[] args){
		Scanner in=new Scanner(System.in);
		System.out.println("Java 计算三维点距离");
		System.out.print("请输入点的XYZ坐标: ");
		while(in.hasNext()){
			double x,y,z;
			x=in.nextDouble();
			y=in.nextDouble();
			z=in.nextDouble();
			Point p=new PointCalc(x,y,z);
			System.out.println("该点到原点的距离为: "+p.distance());
			System.out.print("请继续输入点的XYZ坐标(按Ctrl+Z结束): ");
		}
	}
}
```

# 20190513
## 泛型
### What is 泛型
* 就是创建一个用类型作为参数的类
* 类似带参数方法的语法
    * Method (String str1,String str2)
* 作用于类,接口,方法
    * class Java_Generics<K,V>
    * interface Java_Generics<K,V>

**在编译时进行类型安全检查**

### 泛型-通俗版解释
* 告诉编译器每个集合中接受那些对象类型,编译器会自动为你做转换工作.
* 在编译时就知道是否向集合中插入了类型错误的元素.
* 应用泛型可以大大提高程序的可复用性.

### 抽象
```java
class getString{
    private String myStr;
    public String getStr(){
        return myStr;
    }
    public void setStr(String str){
        myStr=str;
    }
}
class getDouble{
    private Double myDou;
    public Double getDou(){
        return myDou;
    }
    public void setDou(Double dou){
        myDou=dou;
    }
}
```

```java
class FF<T>{
    private T my;
    public T get(){
        return my;
    }
    public void set(T mine){
        my=mine;
    }
}
```
### 定义泛型对象
```java
getObj<String> strObj=new getObj<String>();
```

### 完整实例
```java
class FF<T>{
    private T my;
    public T get(){
        return my;
    }
    public void set(T mine){
        my=mine;
    }
}

public class Main{
	public static void main(String[] args){
		FF<Double> haha=new FF<Double>();
		haha.set(5.66);
		System.out.println(haha.get());
	}
}
```
### 注意
* 在定义一个泛型类的时候,在`<>`之间定义形式类型参数,例如:`class TestGen<K,V>`
    * 其中"K,V"不代表值,而是表示类型
* 实例化泛型对象的时候,一定要在类名后面指定类型参数的值(类型),一共要有两次书写.
    * 例如: `TestGen<String,String> t=new TestGen<String,String>();`
* 泛型中`<K extends Object>` ,extends并不代表继承,它是类型范围限制.  
    * K只能为Object或其子类
## 复杂泛型
* 上界通配符 ?
* 下界通配符 extends
* 无界通配符 super
### 注意
* 使用通配符时要注意,通配符只是针对引用声明使用,使用new生成对象时不可以使用通配符.
* 泛型的参数类型只能是类(class)类型,而不能是简单类型
    * 比如,`<int>`是不可使用的
* 可以声明多个泛型参数类型,比如`<T,P,Q,...>`,同时还可以嵌套泛型,例如:`<List<String>>`
* 应用泛型可以大大提高程序的可复用性


# 20190516
```java
class Reverse{
	public static void main(String[] args){
		String strSource=new String("I love Java");
		String strDest=reverseIt(strSource);
		System.out.println(strDest);
	}
	public static String reverseIt(String source){
		int i,len=source.length();
		StringBuffer dest=new StringBuffer(len);
		for(i=(len-1);i>=0;i--)
			dest.append(source.charAt(i));
		return dest.toString();
	}
}
public class Main{
	public static void main(String[] args){
		Reverse.main(args);
	}
}
```

```java
import java.util.*;
class TestToken{
	public static void main(String[] args){
		StringTokenizer st=new StringTokenizer("This is a Java Programming");
		while(st.hasMoreTokens()){
			System.out.println(st.nextToken());
		}
	}
}
public class Main{
	public static void main(String[] args){
		TestToken.main(args);
	}
}
```

# 20190520

Java异常处理  
我们在使用异常时，有以下几点建议需要注意：  
(1) 对于运行时异常，如果不能预测它何时发生，程序可以不做处理，而是让Java虚机去处理它。  
(2) 如果程序可以预知运行时异常可能发生的地点和时间，则应该在程序中进行处理，而不应简单地把它交给运行时系统。  
(3)在自定义异常类时，如果它所对应的异常事件通常总是在运行时产生的，而且不容易预测它将在何时、何处发生，则可以把它定义为运行时例外，否则应定义为非运行时例外。  
```java
import java.io.*;
class Exception1{
	public static void main(String args[])throws FileNotFoundException,IOException{
		FileInputStream fis = new FileInputStream("text.txt");
		int b;
		while ((b = fis.read()) != -1){
			System.out.print(b);
		}
		fis.close();
	}
}

class Exception2{
	public static void main(String[] args){
		try{
			FileInputStream fis=new FileInputStream("text.txt");
			int b;
			try{
				while((b=fis.read())!=-1){
					System.out.print(b);
				}
			}catch(IOException ioe){
				System.out.println(ioe);
				System.out.println("IO Message: "+ioe.getMessage());
				ioe.printStackTrace(System.out);
			}
		}catch(FileNotFoundException fe){
			System.out.println("haha file error!!");
			// System.out.println(fe);
			// System.out.println("FileNotFound Message: "+fe.getMessage());
			// fe.printStackTrace(System.out);
		}
	}
}
class Exception3{
	public static void main(String[] args){
		try{
			throw new Exception("throw my exception!!");
		}catch(Exception e){
			System.out.println(e.getMessage());
		}
		System.out.println("hahahh");
	}
}
public class Main{
	public static void main(String[] args){
		Exception3.main(args);
	}
}
```

```java
class MyotherException extends Exception{
	public MyotherException(){}
	public MyotherException(String msg){
		super(msg);
	}
}
class Exception8{
	public static void f() throws MyotherException{
		System.out.println("Throwing MyotherException from f()");
		throw new MyotherException();
	}
	public static void g() throws MyotherException{
		System.out.println("Throwing MyotherException from g()");
		throw new MyotherException("Originated in g()");
	}
	public static void main(String[] args){
		try{
			f();
		}catch(MyotherException e){
			e.printStackTrace();
		}
		try{
			g();
		}catch(MyotherException e){
			e.printStackTrace();
		}
	}
}
public class Main{
	public static void main(String[] args){
		Exception8.main(args);
	}
}
```

# 20190523
## 采用继承方式创建线程
```java
class MyThread extends Thread{
	private static int count=0;
	public MyThread(String name){
		super(name);
	}
	public static void main(String[] args){
		MyThread p=new MyThread("t1");
		p.start();
		for(int i=0;i<5;i++){
			count++;
			System.out.println(count+":main");
			System.out.flush();
		}
	}
	public void run(){
		System.out.println("run()");
		for(int i=0;i<5;i++){
			count++;
			System.out.println(count+":"+this.getName());
			System.out.flush();
		}
	}
}
public class Main{
	public static void main(String[] args){
		MyThread.main(args);
	}
}
```
```java
class MyThread extends Thread{
	private static int count=0;
	public MyThread(String name){
		super(name);
	}
	public static void main(String[] args){
		MyThread p1=new MyThread("t1");
		MyThread p2=new MyThread("t2");
		p1.start();
		p2.start();
		for(int i=0;i<5;i++){
			count++;
			System.out.println(count+":main");
		}
	}
	public void run(){
		for(int i=0;i<5;i++){
			count++;
			System.out.println(count+":"+this.getName());
		}
	}
}
public class Main{
	public static void main(String[] args){
		MyThread.main(args);
	}
}
```
```java
class TestThread extends Thread{
    public TestThread(String name) {
        super(name);
    }

    public void run() {
        for(int i = 0;i<5;i++){
            for(long k= 0; k <100000000;k++);
            System.out.println(this.getName()+" :"+i);
        }
    }

    public static void main(String[] args) {
        Thread t1 = new TestThread("t1");
        Thread t2 = new TestThread("t2");
        t1.start();
        t2.start();
    }
}
public class Main{
    public static void main(String[] args){
        TestThread.main(args);
    }
}
```

## 通过实现接口创建线程
```java
class MyThread2 implements Runnable{
    int count=1,number;
    public MyThread2(int i){
        number=i;
        for(long k= 0; k <1000000000;k++);
        System.out.println("创建线程 "+number);
    }
    public void run(){
        while(true){
            for(long k= 0; k <1000000000;k++);
            System.out.println("线程 "+number+": 计数 "+count);
            if(++count==6){
                return ;
            }
        }
    }
    public static void main(String[] args){
        for(int i=0;i<5;i++){
            new Thread(new MyThread2(i+1)).start();
        }
    }
}
public class Main{
    public static void main(String[] args){
        MyThread2.main(args);
    }
}
```
## 线程互斥
```java
class Account{
    double balance;
    public Account(double money){
        balance=money;
        System.out.println("Total Money: "+balance);
    }
}
class AccountThread extends Thread{
    Account Account;
    int delay;
    public AccountThread(Account Account,int delay){
        this.Account=Account;
        this.delay=delay;
    }
    public void run(){
        if(Account.balance>=100){
            try{
                sleep(delay);
                Account.balance=Account.balance-100;
                System.out.println("withdraw 100 successful!");
            }catch(InterruptedException e){

            }
        }else{
            System.out.println("withdraw failed!");
        }
    }
    public static void main(String[] args){
        Account Account=new Account(100);
        AccountThread AccountThread1=new AccountThread(Account,100);
        AccountThread AccountThread2=new AccountThread(Account,0);
        
    }
}
public class Main{
    public static void main(String[] args){

    }
}
```

## 网络通信
* 网络通信的核心是协议.协议是指进程之间交换信息已完成任务所使用的一系列规则和规范.它主要包含两个方面的定义.
    * 定义了进程之间交换消息所必须遵循的顺序
    * 定义进程之间所交换的消息的格式
### 服务端程序

```java
import java.io.*;
import java.net.*;
class Server_Socket {
    public static final int PORT = 8888;
    public static void main(String[] args) throws IOException {
        ServerSocket s = new ServerSocket(PORT);
        System.out.println("Started: " + s);
        try {
            Socket socket = s.accept();
            try {
                System.out.println("Connection accepted: " + socket);
                BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream()));
                PrintWriter out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(socket.getOutputStream())), true);
                while (true) {
                    String str = in.readLine();
                    if (str.equals("END"))
                    break;
                    System.out.println("Echoing: " + str);
                    out.println(str + str + " haha");
                }
            }finally {
                System.out.println("closing...");
                socket.close();
            }
        }finally{
            s.close();
        }
    }
}
public class Main{
    public static void main(String[] args)throws IOException{
        Server_Socket.main(args);
    }
}
```
### 客户端程序
```java
import java.net.*;
import java.io.*;
class client_socket
{
	public static void main(String[] args)throws IOException
	 {
	    InetAddress addr=InetAddress.getByName(null);
	    System.out.println("addr = " + addr);
	    Socket socket=new Socket(addr, 8888);
        try
       {   
	       	System.out.println("socket = " + socket);
			BufferedReader in =new BufferedReader(new InputStreamReader(socket.getInputStream()));
			PrintWriter out =new PrintWriter(new BufferedWriter(new OutputStreamWriter(socket.getOutputStream())),true);
	      	for(int i = 0; i < 10; i ++)
	      	{
	        	out.println("www " + i);
	        	String str = in.readLine();
	        	System.out.println(str);
			}
	      	out.println("END");
      	}finally{
	      System.out.println("closing...");
	      socket.close();
    	}
  }
}


public class test{
	public static void main(String[] args)throws IOException{
		client_socket.main(args);
	}
}
```
### 多客户Socket通信服务端程序



# 20190527
周一上午实验课
