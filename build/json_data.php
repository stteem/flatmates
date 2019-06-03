<?php

require_once "pdo.php";
session_start();

if(! isset($_SESSION['user_id'])) die("ACCESS DENIED");

if (isset($_SESSION['user_id'])) {

	$user_id = $_SESSION['user_id'];

	//$stmt = $pdo->query("DELETE FROM bookings_js WHERE user_id = '$user_id' AND booked_date < CURRENT_DATE");

	header("Content-type: application/json; charset=utf-8");

	$stmt = $pdo->query("SELECT user_id, booking_id, username, email, address, phone, hostPhone, album, start_date, end_date, booked_date, booked_time, installation_price, title, source, calculated_cost, num_of_days, unisex, bedroom, kitchen, electricity,
		gen, tv, wifi, service, bath, toilet, status FROM bookings_js WHERE user_id = '$user_id' AND inspection_date >= CURRENT_DATE order by booked_date asc");


	//$hists = $stmt->fetch(PDO::FETCH_ASSOC);

	//$stmt = $pdo->query("SELECT user_id, username, email, address, phone, album, booked_date, booked_time FROM bookings_js WHERE user_id = '$user_id' AND booked_date < CURRENT_TIME order //by b_date desc");
	//$history = $stmt->fetchAll(PDO::FETCH_ASSOC);


	$rows = array();
	while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
		$rows[] = $row;
	}

	echo stripslashes((json_encode($rows, JSON_PRETTY_PRINT)));

}

?>