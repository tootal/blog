<?php 
	require 'link_blog_db.php';
	$sql="SELECT `password` FROM `userinfo` where `username`=\"{$_POST['username']}\"";
    // echo $sql;
	$res=$conn->query($sql);
	$count=$res->rowCount();
	// echo $res->rowCount();
	if($count!=1){
		exit("$count");
	}
	$it=$res->fetch();
	if($_POST['password']==$it['password']){
		exit("-1");
	}else{
		exit("-2");
	}
 ?>