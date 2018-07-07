<?php
header("Content-Type:text/html;charset=utf8");
include_once("comm.php");
//获取当前页
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$sql = "select *  from logs"; 
$result = $conn->query($sql);
$n = $result->num_rows;
$size = 4;//每页数量
$max = ceil($n / $size);
$start = ($page-1) * $size;
$sql = "SELECT * FROM `logs` limit $start,$size";
$data = $conn->query($sql);
$result = array(
    'total' => $n,
    'max' => $max, 
    'list' => array()
);
foreach($data as $v){
	$result['list'][] = array(
	'l_id'   => $v["l_id"],
	 'l_title' => $v["l_title"],
	 'l_img' => $v["l_img"],
	 'l_info' => $v["l_info"]
	 
	);
}
echo json_encode($result); 
?>