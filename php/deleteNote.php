<?php
header("Content-Type: text/html;charset=utf-8");
include_once ("comm.php");

$id = isset($_POST["m_id"]) ? intval($_POST["m_id"]) : intval("0");
/*echo gettype($id);*/
$sql = "DELETE FROM `message` WHERE `message`.`m_id` =" . $id;
$result = $conn -> query($sql);
$mark = $conn -> affected_rows;
/*	echo $mark;*/
if (!$result || $mark == 0) {
	echo "删除失败!";
	exit ;
}
echo "删除成功!";
$conn -> close();
?>