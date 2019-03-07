<?php
require __DIR__ . '/../vendor/autoload.php';
//$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv = Dotenv\Dotenv::create(__DIR__);

if (getenv('APP_ENV') != 'production') {
	$dotenv->load(); //or $dotenv->overload(); to override variables
}


$dotenv->required(['MYSQL_DSN', 'MYSQL_USER', 'MYSQL_PASSWORD']);
