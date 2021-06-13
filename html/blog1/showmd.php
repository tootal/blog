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
		<ul id="menu">
		<li id="home">
			<a href="index.html">Home</a>
		</li>
		<li id="archives">
			<a href="archives.php">Archives</a>
		</li>
		<li id="messages">
			<a href="http://localhost:8800/message">Messages</a>
		</li>
		<li id=about>
			<a href="about.html">About</a>
		</li>
		<li id="login">
			<a href="login.html">Login</a>
		</li>
		<li id="register">
			<a href="register.html">Register</a>
		</li>
		</ul>';
	</div>
<div id="content">
	<script type="text/html" id="marksrc">

<?php 
	$file=fopen($_GET["file"],"r") or exit("无法打开文件!");
	while(!feof($file)){
		echo fgets($file);
	}
	fclose($file);
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
	var rendererMD = new marked.Renderer();
	marked.setOptions({
		renderer: rendererMD,
		baseUrl: <?php 
			echo "\"";
			$rpos=strrpos($_GET["file"],"/");
			echo substr($_GET["file"],0,$rpos+1);
			echo "\"";
		?>
	});
	// console.log(marked(marksrc.innerText));
	markarea.innerHTML=marked(marksrc.innerText);
</script>
<!-- Markdown 解析脚本结束 -->
</body>
</html>