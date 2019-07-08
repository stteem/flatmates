<?php 
require_once "pdo.php";
session_start();



if (isset($_POST['register'])) {

	unset($_SESSION['fname']);
	unset($_SESSION['lname']);
	unset($_SESSION['email']);
	unset($_SESSION['email2']);
	unset($_SESSION['address']);
	unset($_SESSION['phone']);
	unset($_SESSION['pass']);
	unset($_SESSION['pass2']);

	$fname = htmlentities($_POST['fname']);
	$_SESSION['fname'] = $fname;

	$lname = htmlentities($_POST['lname']);
	$_SESSION['lname'] = $lname;

	$email = htmlentities($_POST['email']);
	$_SESSION['email'] = $email;

	$email2 = htmlentities($_POST['email2']);
	$_SESSION['email2'] = $email2;

	$address = htmlentities($_POST['address']);
	$_SESSION['address'] = $address;

	$phone = htmlentities($_POST['phone']);
	$_SESSION['phone'] = $phone;

	$pass = htmlentities($_POST['pass']);
	$_SESSION['pass'] = $pass;

	$pass2 = htmlentities($_POST['pass2']);
	$_SESSION['pass2'] = $pass2;

	//date
	$date_reg = date("Y-m-d"); //Current date 
	//$date_reg = NOW(); //Current date and time

	if (strlen($fname) < 1 || strlen($lname) < 1 || strlen($email) < 1 || strlen($email2) < 1 ||
	 strlen($address) < 1 || strlen($phone) < 1 || strlen($pass) < 1 || strlen($pass2) < 1) {
		$_SESSION['error']  = "All fields are required";
		header('Location: register.php');
		return;
	}

	//Check if email already exists
	if ($email == $email2) {
		filter_var($email, FILTER_SANITIZE_EMAIL);
		$email = filter_var($email, FILTER_VALIDATE_EMAIL);

		$sql = "SELECT email FROM users WHERE email = :em";

		$stmt = $pdo->prepare($sql);
      	$stmt->execute(array(':em' => $email));
      	$row = $stmt->fetch(PDO::FETCH_ASSOC);

      	if ($row !== FALSE) {
      		$_SESSION['error'] = "Email already exists";
      		header('Location: register.php');
      		return;
      	}
	}
	else {
		$_SESSION['error'] = "Emails did not match";
		header('Location: register.php');
		return;
	}

	if ($pass != $pass2) {
		$_SESSION['error'] = "Passwords did not match";
		header('Location: register.php');
		return;
	}

	if(strlen($pass) < 6 ) {
		$_SESSION['error'] = "Password must be 6 characters at least";
		header('Location: register.php');
		return;
	}

	else {
		$pass = hash('md5', $pass); //Encrypt password before sending to database
	
		//Generate username by concatenating first name and last name
	    $username = ucfirst(strtolower($fname) . " " . ucfirst(strtolower($lname))) ;
	  
	    $stmt = $pdo->prepare('INSERT INTO users(fname, lname, username, email, address, phone, password, date_reg ) VALUES ( :fn, :ln, :un, :em, :ad, :ph, :pw, :dt)');
	    $stmt->execute(array(
	      ':fn' => $fname,
	      ':ln' => $lname,
	      ':un' => $username,
	      ':em' => $email,
	      ':ad' => $address,
	      ':ph' => $phone,
	      ':pw' => $pass,
	      ':dt' => $date_reg)
	      );


	    $_SESSION['success'] = "You are registered! Go ahead and login!";
	    header('Location: login.php');
	    return;

	}


	
}

?>

<!DOCTYPE html>
<html>
<head>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-135472679-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-135472679-1');
	</script>
	
	<meta charset="UTF-8" >
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="Description" content="Do you need a flatmate, or you want to make extra money as a host? Flatmate Africa lets you find or list bedrooms or apartments in 2 easy steps: Register, find, or list.">
	<title>Register</title>
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="assets/css/register_style.css">
	<link rel="icon" href="assets/images/favicon.png" type="image/png" sizes="any">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	<link rel="icon" href="assets/images/icons/icon-72x72.png" type="image/png" sizes="any">

	<script src="assets/js/jquery-3.3.1.min.js"></script>
  	
 	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"></script>
    
    <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
</head>
<body>

<nav class="header navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="index.html"><img id="logo" src="assets/images/icons/icon-72x72.png"><b>Flatmates</b></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          
          <!--<a class="nav-item nav-link" href="#"><i class="fab fa-whatsapp-square fa-lg" style="color: green"></i> +233503989513</a>-->
        </div>

        <?php 
        //Show login link only if user is not in session
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
                   
                  <a href="register.php">Sign up</a></div>');
          }

        } catch (Exception $e) {
          error_log($e->getMessage());
        } 

        //Show logout link only if user is in session
        
      ?>
        
      </div>
    </nav>
	
<div class="container">
	<div class="row no-gutters">
	<div class="login_box1 col-xs-12 col-lg-5">	

	<div class="login_header" style="padding-top: 10px;">
	<p style="font-size: 1.3em;">Register Below to Continue</p><br>
	</div>
<?php
if (isset($_SESSION['error'])) {
	echo('<p style="color:red; font-size: 0.9em;">'.$_SESSION["error"]."</p>\n");
	unset($_SESSION['error']);
}			  
?>

	<div>
		<form action="register.php" method="post">
			
			<input type="text" name="fname" placeholder="First name" value="<?php if(isset($_SESSION['fname'])){
				echo $_SESSION['fname'];} ?>" required>
			</p>
			
			<p>
			<input type="text" name="lname" placeholder="Sur Name" value="<?php if(isset($_SESSION['lname'])){
				echo $_SESSION['lname'];} ?>" required>
			</p>
			
			<p>
			<input type="email" name="email" placeholder="email" value="<?php if(isset($_SESSION['email'])){
				echo $_SESSION['email'];} ?>" required>
			</p>

			<p>
			<input type="email" name="email2" placeholder="Confirm email" value="<?php if(isset($_SESSION['email2'])){
				echo $_SESSION['email2'];} ?>" required>
			</p>

			<p>
			<input type="text" name="address" placeholder="Address" value="<?php if(isset($_SESSION['address'])){
				echo $_SESSION['address'];} ?>" required >
			</p>

			<p>
			<input type="text" name="phone" placeholder="Phone Number" value="<?php if(isset($_SESSION['phone'])){
				echo $_SESSION['phone'];} ?>" required>
			</p>
			
			<p>
			<input type="password" name="pass" placeholder="Password" required>
			</p>
			
			<p>
			<input type="password" name="pass2" placeholder="Confirm Password" required>
			</p>
			
			<p>
			<input type="submit" name="register" value="Sign up">
			</p>
			<p>
			Already have an account?<a href="login.php" style="color: red"> Sign in here</a>
			</p>
		</form>
	</div>
</div>
</div>
</div>



</body>
</html>