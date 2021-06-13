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
	<script src="js/jquery-3.4.1.min.js"></script>
</head>
<body>
<div id="header">
</div>
<div id="content">
测试读取json文件.
<div id="name-content"></div>
</div>
<div id="footer"></div>
<script type="text/javascript" src="js/header.js" charset="UTF-8"></script>
<script type="text/javascript">
	$.getJSON('vnote/_vnote.json',function(data){
		// $('#json-content').html('hello');
		// console.log(Object.prototype.toString.call(data));
		console.log(data);
		// console.log(data.created_time);
		console.log(data.sub_directories);
		var html="";
		for(var i=0;i<data.files.sub_directories.length;i++){
			html=html+'<div class=vnoteFolders>';
		// 	// console.log(data.files[i].name);
		// 	// console.log(encodeURI(data.files[i].name));
		// 	html= html+'<a href="showmd.php?file=vnote/drafts/'+encodeURI(data.files[i].name)+'">'+data.files[i].name+'</a><br>';
  			html=html+'</div>';
		}
		// $('#name-content').html(html);
		// if(typeof(data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length){
  //   		alert("is JSON 0bject");
    	// }
	});
</script>
</body>
</html>