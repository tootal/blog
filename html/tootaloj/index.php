<?php
    $flag="flag{test_flag}";
    $db_servername="localhost";
    $db_username="root";
    $db_password="hzq520++";
    $db_name="test";
    $conn=new mysqli($db_servername,$db_username,$db_password,$db_name);
    if($conn->connect_error){
        die("连接数据库失败: ".$conn->connect_error);
    }else{
        echo "连接数据库成功<br>";
    }
    function clean($str){
        if(get_magic_quotes_gpc()){
            echo "get_magic_quotes_gpc!";
            $str=stripslashes($str);
        }
        return htmlentities($str, ENT_QUOTES);
    }

    $username = @clean($_POST['user']);
    $password = @clean($_POST['pass']);
    echo "username=".$username."<br>";
    echo "password=".$password."<br>";

    $query="SELECT * FROM ctf WHERE user='".$username."' AND pw='".$password."';";
    echo $query;
    $result=mysqli_query($conn, $query);

    if(!$result || mysqli_num_rows($result) < 1){
        echo "<script>alert('Invalid password!');</script>";
    }else{
        echo $flag;
    }
?>