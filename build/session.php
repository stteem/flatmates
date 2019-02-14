<?php 
require_once "pdo.php";
session_start();

if(! isset($_SESSION['user_id'])) die("ACCESS DENIED");

if (isset($_SESSION['user_id'])) {

	$user_id = $_SESSION['user_id'];

	header("Content-type: application/json; charset=utf-8");

	$stmt = $pdo->query("SELECT user_id, username, email FROM users WHERE user_id = '$user_id' ");
	//$hists = $stmt->fetch(PDO::FETCH_ASSOC);

	//$stmt = $pdo->query("SELECT user_id, username, email, address, phone, album, booked_date, booked_time FROM bookings_js WHERE user_id = '$user_id' AND booked_date < CURRENT_TIME order //by b_date desc");
	//$history = $stmt->fetchAll(PDO::FETCH_ASSOC);


	$rows = array();
	while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
		$rows[] = $row;
	}

	echo json_encode($rows, JSON_PRETTY_PRINT);

}


?>