<?php
header("Content-Type:text/html;charset=utf8");
include_once("comm.php");
//获取当前页
$id = isset($_GET["l_id"]) ? intval($_GET["l_id"]) : intval("0");
$sql = "SELECT * FROM `logs` WHERE `l_id`=".$id; 
$result = $conn->query($sql);
class Emp{
	public $l_id = "";
	public $l_title = "";
	public $l_img = "";
	public $l_info = "";
}

$e = new Emp(); 
if($result->num_rows > 0){
	while($v = $result ->fetch_assoc()){
	$e->l_id = $v["l_id"];
	$e->l_title = $v["l_title"];
	$e->l_img = $v["l_img"];
	$e->l_info = $v["l_info"];
	}
	}

echo json_encode($e); 
?>