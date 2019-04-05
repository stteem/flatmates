<?php 

require_once "pdo.php";
session_start();

if (!isset($_SESSION['user_id'])) {
	die("ACCSESS DENIED");
}
else {
	$user_id = $_SESSION['user_id'];
}



if (isset($_POST['id'])) {

	echo ('this is id '. $_POST['id']);

	$sql = "DELETE FROM bookings_js WHERE user_id = '$user_id' AND booking_id = :zip";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(array(':zip' => $_POST['id']));

	return;
}

?>