
<?php 
$servername="localhost";
$username="root";
$password="1234";
$databasename="tootal";

//create connect
$conn=new mysqli($servername,$username,$password,$databasename);

//check connection
if ($conn->connect_error){
	die("连接数据库失败：".$conn->connect_error);
}

$sql="SELECT `parental level of education`,`math score` FROM `studentsperformance`";
$result=$conn->query($sql);

if($result->num_rows>0){
	//print data
	echo "<table align=\"center\" border=\"1\" cellspacing=\"0\">";
	echo "<tr>";
	echo 	"<th>Parental level of education</th>";
	echo 	"<th>Math score</th>";
	echo "</tr>";

	while($row=$result->fetch_assoc()){
		echo "<tr><td>".$row["parental level of education"]."</tdh><td>".$row["math score"]."</td></tr>";
	}

	echo "</table><br>";
}else{
	echo "没有查询到结果。<br>";
}


 ?>

