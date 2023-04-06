<?php
$Uname = $_POST['Uname'];
$email = $_POST['email'];
$position =$_POST['position'];
$password =$_POST['password'];

//database coonection

$link = new mysqli('localhost','root','','weshare');

if($link->connect_error){
    die ('connection failed:'.$link->connect_error);
}else{
    $send =$link->prepare("insert into student(name,email,position,password)
    values(?,?,?,?)");
    $send->bind_param("ssss",$Uname,$email,$position,$password);
    $send->execute();
    echo " created well inserted, login in your account";
    $send->close();
    $link->close();
}



?>