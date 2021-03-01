<?php
header("content-type:text/html;charset=utf-8");
$link=mysqli_connect("localhost","root","","login");
mysqli_set_charset($link,"utf8");

$u=$_POST['synum'];
$p=$_POST['sjyz'];

$sql="select * from login where name='$u' and pwd='$p'";
$result=mysqli_query($link,$sql);
if(mysqli_fetch_assoc($result)){
    setcookie("name",$u);
    echo "<script>location='../page/gw.html'</script>";
}else{
    echo "<script>console.log($p);alert($p);location='../page/dl.html'</script>";
?>