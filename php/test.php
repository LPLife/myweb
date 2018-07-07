<?php
header("Content-Type:text/html;charset=utf8");
include_once("comm.php");
//获取当前页
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$sql = "select *  from message"; 
$result = $conn->query($sql);
$n = $result->num_rows;
$size = 5;//每页数量
$max = ceil($n / $size);
$start = ($page-1) * $size;
$sql = "SELECT * FROM `message` limit $start,$size";
$data = $conn->query($sql);
$result = array(
    'total' => $n,
    'max' => $max,
    'list' => array()
);
foreach($data as $v){
	$result['list'][] = array(
	 'm_name' => $v["m_name"],
	 'm_email' => $v["m_email"],
	 'm_info' => $v["m_info"],
	 'm_time' => $v["m_time"]
	);
}
echo json_encode($result); 
?>