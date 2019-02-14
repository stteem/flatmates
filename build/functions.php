<?php 
function flashMessage() {
	if (isset($_SESSION['success']) ) {
    echo('<div style="color:green; background-color:white; text-align:center; width:80%; border-radius:5px; margin:10px; padding:10px">'.$_SESSION['success']."</div>\n");
    unset($_SESSION['success']);
	}

	if (isset($_SESSION['error']) ) {
	    echo('<div style="color:red; background-color:white; text-align:center; width:80%; border-radius:5px; margin:10px; padding:10px">'.htmlentities($_SESSION['error'])."</div>\n");
	    unset($_SESSION['error']);
	}
}


function bookingsTable($pdo, $user_id) {
	if ($rows == false) {
		echo "<p>No bookings found</p>";
		return true;

	}
	else {

		echo ('<table margin-top="100px" border="1">'."\n");
		echo ("<thead><tr>");
		echo ("<th>Name</th>");
		echo ("<th>Email</th>");
		echo ("<th>Address</th>");
		echo ("<th>Phone Number</th>");
		echo ("<th>Service</th>");
		echo ("<th>Booking Date</th>");
		echo ("<th>Action</th>");


		foreach ($rows as $key => $value) {
		 
			echo ("<tr><td>");
		    echo(htmlentities($rows['username']));
		    echo("</td><td>");
		    echo(htmlentities($rows['email']));
		    echo("</td><td>");
		    echo(htmlentities($rows['address']));
		    echo("</td><td>");
		    echo(htmlentities($rows['phone']));
		    echo("</td><td>");
		    echo(htmlentities($rows['service']));
		    echo("</td><td>");
		    echo(htmlentities($rows['b_date']));
		    echo("</td><td>");
		    echo('<a href="cart.php?user_id='.$rows['user_id'].'">Edit</a> / ');
		    echo('<a href="cart.php?user_id='.$rows['user_id'].'">Delete</a>');
		    echo("</td></tr>\n");
		}

		echo ("</thead></tr>\n");
		echo('</table>'. "\n");
		echo "<br>"; 
		return true;
	}

	return true;
}

