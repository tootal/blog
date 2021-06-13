<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Tootal World</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/header.css">
	<link rel="stylesheet" type="text/css" href="css/content.css">
</head>
<body>
<div id="header">
</div>
<div id="content">
<h3>Result</h3>
<h4>Information</h4>
Username: 
<?php 
	echo $_POST['username'];
 ?>
 <br>
 Password: 
 <?php 
 	echo $_POST['password'];
  ?>
  <br>
<h4>Status</h4>
</div>
<div id="footer"></div>
<script type="text/javascript" src="js/header.js" charset="UTF-8"></script>

</body>
</html>