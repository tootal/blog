<?php
$host = 'localhost';
$port = '3306';
$db   = 'blog';
$user = 'php';
$pass = '123456';
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=$charset";

try{
    $conn = new PDO($dsn, $user, $pass);
    $conn->exec('SET NAMES utf8');
}catch(PDOException $e){
    echo $e->getMessage();
}

?>