<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Tootal World</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/header.css">
	<link rel="stylesheet" type="text/css" href="css/content.css">
	<link rel="stylesheet" type="text/css" href="css/markarea.css">
	<!-- LaTeX 解析脚本开始 -->
	<!-- 使用 MathJax 脚本 -->
	<script type="text/x-mathjax-config">
  		MathJax.Hub.Config({
  			tex2jax: {
  				inlineMath: [
  					['$','$']
  				]
  			}
  		});
	</script>
	<!-- 本地来源 -->
	<!-- 下载地址 https://github.com/mathjax/MathJax/archive/master.zip -->
	<script type="text/javascript" async src="js/MathJax/MathJax.js?config=TeX-MML-AM_CHTML"></script>
	<!-- cdn来源 -->
	<!-- <script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML"></script> -->
	<!-- <script async src="https://cdn.bootcss.com/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML"></script> -->
	<!-- LaTeX 解析脚本结束 -->

	<!-- 语法高亮解析脚本开始 -->
	<link rel="stylesheet" href="js/highlight/styles/default.css">
	<script src="js/highlight/highlight.pack.js"></script>
	<script>hljs.initHighlightingOnLoad();</script>
	<!-- 语法高亮解析脚本结束 -->
</head>
<body>
<div id="header">
</div>
<div id="content">
	<script type="text/html" id="marksrc">
<?php
// 预定义
$host = 'localhost';
$port = '3306';
$db   = 'blog';
$user = 'php';
$pass = '123456';
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";

try{
    $conn = new PDO($dsn, $user, $pass);
    echo "连接blog数据库成功\n"; 
    $tis = $conn->query('SELECT 学号, 姓名 FROM 计院学生名单');
	while ($row = $tis->fetch())
	{
	  echo $row['姓名']."\t";
	  echo $row['学号'];
	  echo "<br>";
	}
}catch(PDOException $e){
	echo "连接blog数据库失败";
    echo $e->getMessage();
}

?>
	</script>
	<div id="markarea"></div>
</div>
<div id="footer"></div>
<script type="text/javascript" src="js/header.js" charset="UTF-8"></script>

<!-- Markdown 解析脚本开始 -->
<!-- 本地来源 -->
<script type="text/javascript" src="js/marked.min.js"></script>
<!-- cdn来源 -->
<!-- <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script> -->
<!-- <script src="https://cdn.bootcss.com/marked/0.6.2/marked.min.js"></script> -->
<script type="text/javascript">
	var marksrc=document.getElementById("marksrc");
	var markarea=document.getElementById("markarea");
	markarea.innerHTML=marked(marksrc.innerText);
</script>
<!-- Markdown 解析脚本结束 -->
</body>
</html>