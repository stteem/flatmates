<?php 
require_once "pdo.php";
session_start();

if(!isset($_SESSION['user_id'])) die("ACCESS DENIED");

//header("Content-type: application/json; charset=utf-8");

//$booking_id = json_decode($_POST["booking_id"]);
//

if (isset($_POST['booking_id']) && isset($_POST['status'])) {

	$user_id = $_SESSION['user_id'];
	$booking_id = $_POST['booking_id'];
	$status = $_POST['status'];

	$sql = "UPDATE bookings_js SET status = :status WHERE user_id = '$user_id' AND booking_id = '$booking_id'";

	$stmt = $pdo->prepare($sql);
	$stmt->execute(array(':status' => $status));

	return;
	


	/*header("Content-type: application/json; charset=utf-8");

	$stmt2 = $pdo->query("SELECT username, status FROM bookings_js WHERE user_id = '$user_id' AND booking_id = '$booking_id'");

	$rows = array();
	while ($row = $stmt2->fetch(PDO::FETCH_ASSOC)) {
		$rows[] = $row;
	}

	echo stripslashes((json_encode($rows, JSON_PRETTY_PRINT)));*/
}

/*if (isset($_SESSION['user_id'])) {
	$user_id = $_SESSION['user_id'];
	$booking_id = '438';
	$status = 'Paid';

	$sql = "UPDATE bookings_js SET status = :status
            WHERE user_id = '$user_id' AND booking_id = '$booking_id'";

	$stmt = $pdo->prepare($sql);
	$stmt->execute(array(
        ':status' => $status));


	header("Content-type: application/json; charset=utf-8");

	$stmt = $pdo->query("SELECT username, status FROM bookings_js WHERE user_id = '$user_id' AND booking_id = '$booking_id'");

	$rows = array();
	while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
		$rows[] = $row;
	}

	echo stripslashes((json_encode($rows, JSON_PRETTY_PRINT)));

	//return;
}*/



?>