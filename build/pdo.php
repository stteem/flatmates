<?php

include 'bootstrap.php';

$dsn = getenv('MYSQL_DSN');
$user = getenv('MYSQL_USER');
$password = getenv('MYSQL_PASSWORD');

try {

	$pdo = new PDO($dsn, $user, $password);

	// See the "errors" folder for details...
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	//echo "Connected successfully";

}
catch(PDOException $e) {
  echo 'Connection failed! Check your internet and try again. ' .$e->getMessage();
}

	






