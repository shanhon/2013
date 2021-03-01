<?php
header("content-type:text/html;charset=utf-8");
$link=mysqli_connect("localhost","root","","login");
mysqli_set_charset($link,"utf8");

$u=$_POST['synum'];
$sql="insert into login values($u,123456)";

$result=mysqli_query($link,$sql);
setcookie("name",$u);
echo "<script>location='../page/gw.html'</script>";
?>