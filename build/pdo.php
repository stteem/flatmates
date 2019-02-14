<?php


	$pdo = new PDO('mysql:host=localhost;port="";dbname=charm', 
   'root', '');
	
	// See the "errors" folder for details...
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);






