<?php 
	// echo "username: ".$_POST["username"];
	// exit("-1");
	// echo "password: ".$_POST["password"];
	require 'link_blog_db.php';
	$sql="SELECT `username` FROM `userinfo` where `username`=\"{$_POST['username']}\"";
    // echo $sql;
    // exit("-1");
	$res=$conn->query($sql);
	// echo $res->rowCount();
	if($res->rowCount()>0){
		exit("-1");
	}
	$register_time=date('Y-m-d H:i:s');
	$sql="INSERT INTO `userinfo` (`username`, `password`, `register_time`) 
	VALUES (\"{$_POST['username']}\",\"{$_POST['password']}\",\"{$register_time}\")";
	// echo $sql;
    $affected=$conn->exec($sql);
    echo $affected;
 ?>