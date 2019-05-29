<?php 
require_once "pdo.php";
require_once "functions.php";
session_start();

$timezone = date_default_timezone_set("Africa/Lagos");



if (isset($_POST['start_date']) || isset($_POST['end_date']) || isset($_POST['bookd_date']) 
	|| isset($_POST['bookd_time'])  || isset($_POST['installation_price'])|| isset($_POST['hairstyle_title']) 
	|| isset($_POST['hairstyle_src']) || isset($_POST['album']) || isset($_POST['calculated_cost']) 
	|| isset($_POST['hostPhone']) || isset($_POST['num_of_days']) || isset($_POST['unisex']) || isset($_POST['bedroom']) 
	|| isset($_POST['kitchen'])  || isset($_POST['electricity'])|| isset($_POST['gen']) 
	|| isset($_POST['wifi']) || isset($_POST['service']) || isset($_POST['bath']) 
	|| isset($_POST['toilet']) || isset($_POST['address']) || isset($_POST['tv'])) {

	if (! isset($_SESSION['user_id'])) {
		$_SESSION['error'] = "You need to sign in to be able to book";
		header("Location: login.php");
		return;
	}

	$stmt = $pdo->prepare("SELECT user_id, username, email, phone FROM users WHERE user_id = :xyz");
	$stmt->execute(array(":xyz" => $_SESSION['user_id']));
	$row = $stmt->fetch(PDO::FETCH_ASSOC);

	// Escaping inbound data for safety
	$user_id = htmlentities($row['user_id']);
	$username = htmlentities($row['username']);
	$email = htmlentities($row['email']);
	//$address = htmlentities($row['address']);
	$phone = htmlentities($row['phone']);
	//$timestamp = date("Y-m-d H:i:s");

	// Preparing ajax post data for database
	$start_date = htmlentities($_POST['start_date']);
	$end_date = htmlentities($_POST['end_date']);
	$booked_date = htmlentities($_POST['bookd_date']);
	$booked_time = htmlentities($_POST['bookd_time']);
	$installation_price = $_POST['installation_price'];
	$title = $_POST['hairstyle_title'];
	$address = $_POST['address'];
	$source = $_POST['hairstyle_src'];
	$hostPhone = $_POST['hostPhone'];
	$album = $_POST['album'];
	$calculated_cost = $_POST['calculated_cost'];
	$num_of_days = $_POST['num_of_days'];
	$unisex = $_POST['unisex'];
	$bedroom = $_POST['bedroom'];
	$kitchen = $_POST['kitchen'];
	$service = $_POST['service'];
	$electricity = $_POST['electricity'];
	$gen = $_POST['gen'];
	$tv = $_POST['tv'];
	$wifi = $_POST['wifi'];
	$bath = $_POST['bath'];
	$toilet = $_POST['toilet'];
	$status = "Pending";


	$stmt = $pdo->prepare('INSERT INTO bookings_js(user_id, username, email, address, phone, album, start_date, end_date, booked_date, booked_time, installation_price, title, source, hostPhone, calculated_cost, num_of_days, unisex, bedroom, kitchen, electricity,
		gen, tv, wifi, service, bath, toilet, status )

							VALUES ( :uid, :un, :em, :ad, :ph, :al, :sd, :ed, :bd, :bt, :ip, :tl, :sr, :hp, :cc, :nd, :us, :br, :kt, :el,
									:gn, :tv, :wf, :sv, :bh, :to, :st)');
	$stmt->execute(array(':uid' => $user_id,
						':un' => $username,
						':em' => $email,
						':ad' => $address,
						':ph' => $phone,
						':al' => $album,
						':sd' => $start_date,
						':ed' => $end_date,
						':bd' => $booked_date,
						':bt' => $booked_time,
						':ip' => $installation_price,
						':tl' => $title,
						':sr' => $source,
						':hp' => $hostPhone,
						':cc' => $calculated_cost,
						':nd' => $num_of_days,
						':us' => $unisex,
						':br' => $bedroom,
						':kt' => $kitchen,
						':el' => $electricity,
						':gn' => $gen,
						':tv' => $tv,
						':wf' => $wifi,
						':sv' => $service,
						':bh' => $bath,
						':to' => $toilet,
						':st' => $status));

	//$_SESSION['b_success'] = "Congratulations, you have been booked";
	//header("Location: dashboard.php");
	return;

}

?>
