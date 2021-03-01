<?php
header("content-type:text/html;charset=utf-8");
$link=mysqli_connect("localhost",'root','','shop2');
mysqli_set_charset($link,"utf8");

$sql="select * from goods";
$result=mysqli_query($link,$sql);

$arr=[];
//遍历结果集
while($right_con=mysqli_fetch_assoc($result)){
    array_push($arr,$right_con);
}
echo json_encode($arr);
mysqli_close($link);
?>