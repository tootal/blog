<?php 
if ($_FILES["file"]["error"]>0){
	echo "wrong:". $_FILES["file"]["error"] . "<br>";
}else{
	echo "upload:" . $_FILES["file"]["name"] . "<br>";
	echo "type:" . $_FILES["file"]["type"] . "<br>";
	echo "size:" . $_FILES["file"]["size"] . "<br>";
	// echo "store in:" . $_FILES["file"]["tmp_name"] . "<br>";

	if(file_exists("upload/".$_FILES["file"]["name"])){
		echo $_FILES["file"]["name"] . "already exist.<br>";
	}else{
		move_uploaded_file($_FILES["file"]["tmp_name"], "upload/".$_FILES["file"]["name"]);
		echo "store in:"."upload/".$_FILES["file"]["name"];
	}
}
 ?>