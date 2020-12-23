<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Tootal World</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/header.css">
	<link rel="stylesheet" type="text/css" href="css/content.css">
	<script src="js/jquery-3.4.1.min.js"></script>
</head>
<body>
<div id="header">
</div>
<div id="content">
<div id="name-content"></div>
</div>
<div id="footer"></div>
<script type="text/javascript" src="js/header.js" charset="UTF-8"></script>
<?php 
	$pathArgs="";
	if(is_array($_GET)&&count($_GET)>0)//判断是否有Get参数
	{
	    if(isset($_GET["path"]))//判断所需要的参数是否存在，isset用来检测变量是否设置，返回true or false
	    {
	        $pathArgs=$_GET["path"];//存在
	    }
	}
 ?>
<script type="text/javascript">
	$.getJSON( 
		<?php 
		// $pathArgs 指的是以vnote为根目录的相对路径
			if($pathArgs=="") echo "\"vnote/_vnote.json\"";
			else  echo "\"vnote/" . $pathArgs . "/_vnote.json\""; 
		?> ,function(data){
		// $('#json-content').html('hello');
		// console.log(Object.prototype.toString.call(data));
		console.log(data);
		// console.log(data.created_time);
		console.log(data.sub_directories);
		var html="<div class=vnoteFolders>";
		for(var i=0;i<data.sub_directories.length;i++){
			html=html+'<div class=vnoteFolder>';
		// 	// console.log(data.files[i].name);
		// 	// console.log(encodeURI(data.files[i].name));
			html= html+'<a href="archives.php?path='+
			<?php 
				if($pathArgs=="") echo "''";
				else  echo "'" . $pathArgs . "/'"; 
			 ?>
			+encodeURI(data.sub_directories[i].name)+'">'+data.sub_directories[i].name+'</a><br>';
  			html=html+'</div>';
		}
		html=html+'</div><div class=vNotes>';
		for(var i=0;i<data.files.length;i++){
			html=html+'<div class=vNote>';
		// 	// console.log(data.files[i].name);
		// 	// console.log(encodeURI(data.files[i].name));
			html= html+'<a href="showmd.php?file=vnote/'+
			<?php 
				if($pathArgs=="") echo "''";
				else  echo "'" . $pathArgs . "/'"; 
			 ?>
			+encodeURI(data.files[i].name)+'">'+data.files[i].name+'</a><br>';
  			html=html+'</div>';
		}
		html=html+'</div>';
		$('#name-content').html(html);
		// if(typeof(data) == "object" && Object.prototype.toString.call(data).toLowerCase() == "[object object]" && !data.length){
  //   		alert("is JSON 0bject");
    	// }
	});
</script>
</body>
</html>