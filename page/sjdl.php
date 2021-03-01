<?php
header("content-type:text/html;charset=utf-8");
$link=mysqli_connect("localhost","root","","login");
mysqli_set_charset($link,"utf8");

$u=$_POST['yxnum'];
$p=$_POST['mmnum'];

$sql="select * from login where name='$u' and pwd='$p'";
$result=mysqli_query($link,$sql);
if(mysqli_fetch_assoc($result)){
    setcookie("name",$u);
    echo "<script>location='../page/gw.html'</script>";
}else{
    echo "<script>alert('账号或密码有误');location='../page/dl.html'</script>";
}


?>