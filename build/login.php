<?php
require_once "pdo.php";
session_start();


// p' OR '1' = '1

if ( isset($_POST['email']) && isset($_POST['password'])  ) {
    unset($_SESSION['email']);
    unset($_SESSION['password']);

    $email = htmlentities($_POST['email']); 

    $pass = htmlentities($_POST['password']);

    if ( strlen($email) < 1 || strlen($pass) < 1 ) {
        $_SESSION['error'] = "User name and password are required";
        header('Location: login.php');
        return;
    }

    //Check if email exists
    elseif (filter_var($email, FILTER_SANITIZE_EMAIL)) {
      $email = filter_var($email, FILTER_VALIDATE_EMAIL);
      $sql = "SELECT user_id, username, email FROM users 
        WHERE email = :em AND password = :pw";

      $stmt = $pdo->prepare($sql);
      $stmt->execute(array(
        ':em' => $email, 
        ':pw' => hash('md5', $pass)));
      $row = $stmt->fetch(PDO::FETCH_ASSOC);

      if ( $row === FALSE ) {

        try {
            throw new Exception("Login fail ".$email);
          }
        catch (Exception $e) {
          error_log($e->getMessage());
        }

        $_SESSION["error"] = "Incorrect email or password.";
        header("Location: login.php");
        return;
      } 

      else { 

        try {
          throw new Exception("Login success ".$email);
        }
        catch (Exception $ex) {
          error_log($ex->getMessage());
        }
       
        //$_SESSION["success"] = "Logged in";
        $_SESSION['username'] = $row['username'];
        $_SESSION['user_id'] = $row['user_id'];
        $_SESSION['email'] = $email;
        header("Location: index.html");
        return;
      }

    }
    
}
?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" >
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css">
  <link rel="stylesheet" type="text/css" href="assets/css/register_style.css">
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
  <link rel="icon" href="assets/images/favicon.png" type="image/png" sizes="any">
  <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script src="assets/js/register.js"></script>-->
  <script src="assets/js/jquery-3.3.1.min.js"></script>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"></script>
    
  <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>

  
</head>
<body>

<nav class="header navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="index.html"><b>Flatmates</b> |</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          
          
          <a class="nav-item nav-link" href="#"><i class="fab fa-whatsapp-square fa-lg" style="color: green"></i> +233503989513</a>
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

            echo('<div class="nav1"><a href="pogin.php"><i class="fas fa-sign-in-alt fa-lg"></i> Sign in</a> 
                   
                  <a href="register.php">Register</a></div>');
          }

        } catch (Exception $e) {
          error_log($e->getMessage());
        } 

        //Show logout link only if user is in session
        
      ?>
        
      </div>
    </nav>



<div class="container">
	<div class="row">
		<div class="col-xs-12 col-lg-5 login_box1">
		  
			<div class="login_header" style="padding-top: 10px;">
			<p style="font-size: 1.3em;">Login Below to Continue</p>
			</div><br>
			<?php 
			if ( isset($_SESSION["error"]) ) {
				  echo('<p style="color:red; font-size: 0.9em;">'.htmlentities($_SESSION["error"])."</p>\n");
				  unset($_SESSION["error"]);
			}
			if(isset($_SESSION['success'])) {
			  echo('<p style="color:green; font-size: 0.9em;">'.$_SESSION["success"]."</p>\n");
			  unset($_SESSION['success']);
			} 
			
			?>
			<div id="first">
			  <form action="login.php" method="post">
				<p>
				<input type="email" size="40" name="email" placeholder="Email address" value="<?php
				if(isset($_SESSION['email'])) {
				  echo $_SESSION['email'];
				}
				?>" required></p>
				<p>
				<input type="password" size="40" name="password" placeholder="Password"></p>
				<p><a href="#"><input type="submit" value="Login"/></a></p>
				<div style="border-bottom: 1px solid #e5e5e5; padding:20px;">Don't have an account?<a href="register.php" id="signup" class="signup" style="color: red;"> Sign up here!</a></div>
				<br>
				<a href="" style="color: red;">Forgot password?</a>
			  </form>
			</div>

		</div>
	</div>
</div>

<script type="text/javascript">
  // Assuming an HTML <form> with id of 'myForm'
/*fetch('someurl/comment', {
  method: 'POST',
  body: new FormData(document.getElementById('myForm')
})*/
</script>

</body>
</html>

