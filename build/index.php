<?php 
require_once "pdo.php";
require_once "functions.php";
session_start();

$timezone = date_default_timezone_set("Africa/Accra");


/*//Show login link only if user is not in session
try {
		if (isset($_SESSION['user_id'])) { 
			echo ('<div class="nav1 logout"><a href="logout.php">Log out</a></div>'); 
			echo "&nbsp";
			echo "&nbsp";
			echo "<div style='color:rgba(0, 0, 0, 0.5)'>";
			echo ($_SESSION['username']);
			echo "</div>";
		} 

		else {

			echo('<div class="nav1"><a href="login.php"><i class="fas fa-sign-in-alt fa-lg"></i> Sign in</a> 
						 
						<a href="register.php">Register</a></div>');
		}

	} catch (Exception $e) {
		error_log($e->getMessage());
	}	

	//Show logout link only if user is in session
	*/			



if (isset($_POST['bookd_date']) || isset($_POST['bookd_time'])  || isset($_POST['installation_price'])
	|| isset($_POST['hairstyle_title']) || isset($_POST['hairstyle_src']) || isset($_POST['album'])) {

	if (! isset($_SESSION['user_id'])) {
		$_SESSION['error'] = "You need to sign in to be able to book";
		header("Location: login.php");
		return;
	}

	$stmt = $pdo->prepare("SELECT user_id, username, email, address, phone FROM users WHERE user_id = :xyz");
	$stmt->execute(array(":xyz" => $_SESSION['user_id']));
	$row = $stmt->fetch(PDO::FETCH_ASSOC);

	// Escaping inbound data for safety
	$user_id = htmlentities($row['user_id']);
	$username = htmlentities($row['username']);
	$email = htmlentities($row['email']);
	$address = htmlentities($row['address']);
	$phone = htmlentities($row['phone']);
	//$timestamp = date("Y-m-d H:i:s");

	// Preparing ajax post data for database
	$booked_date = htmlentities($_POST['bookd_date']);
	$booked_time = htmlentities($_POST['bookd_time']);
	$installation_price = $_POST['installation_price'];
	$title = $_POST['hairstyle_title'];
	$source = $_POST['hairstyle_src'];
	$album = $_POST['album'];


	$stmt = $pdo->prepare('INSERT INTO bookings_js(user_id, username, email, address, phone, album, booked_date, booked_time, installation_price, title, source )

							VALUES ( :uid, :un, :em, :ad, :ph, :al, :bd, :bt, :ip, :tl, :sr)');
	$stmt->execute(array(':uid' => $user_id,
						':un' => $username,
						':em' => $email,
						':ad' => $address,
						':ph' => $phone,
						':al' => $album,
						':bd' => $booked_date,
						':bt' => $booked_time,
						':ip' => $installation_price,
						':tl' => $title,
						':sr' => $source));

	//$_SESSION['b_success'] = "Congratulations, you have been booked";
	//header("Location: dashboard.php");
	return;

}

?>
