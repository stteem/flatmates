
/*
 *		This file contains the javascript code for our gallery
 */

//importScripts('collections.js');

// variables for all of the templates so we only have to compile
// them once on page load and can then use the same compiled 
// templates many times
var albums_template, photos_template, photo_template;


// variables to store the current displayed album and photo
var current_album = gallery.albums[0];
var current_photo = current_album.photos[0];
		


var installation_price, hairstyle, hairstyle_src, title, album;


// a helper function that instantiates a template
// and displays the results in the content div
async function showTemplate(template, data){
	
		var html    = template(data);
		const display = await Promise.all($('#content').html(html));

		return display;
	
}

// document ready gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here
$(document).ready(function(){

	//
	// compile all of our templates ready for use
	//
	var source   = $("#albums-template").html();
	albums_template = Handlebars.compile(source);
	
	source   = $("#photos-template").html();
	photos_template = Handlebars.compile(source);
	
	source   = $("#photo-template").html();
	photo_template = Handlebars.compile(source);

	

	// 
	//  clicking on the albums tab shows the 
	//  thumbnails of all the albums
	//
	$("#albums-tab").click(async function () {

		

		//$("#booking_form").hide(0);

		// displays the albums template
		await showTemplate(albums_template, gallery);

		// make the albums tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make albums tab active
		$("#albums-tab").addClass("active");

		// add a click callback to each album 
		// thumbnail which displays the photos
		// template on that album
		// (I have written out the code for this 
		// function for clarity but it is actually
		// pretty much the same as the photos tab
		// function so we could acutally just
		// call $(".photo-thumbnail").click() ) 
		$(".album-thumbnail").click(function (){

			
			// get the index (position in the array)
			// of the album we clicked on
			// "this" is the element that was clicked on
			// data("id") gets the attribute data-id
			// (which we set to the index of the album in
			// the array - @index)
			var index = $(this).data("id");

			// set the current album to this album
			current_album = gallery.albums[index];

			console.log("This is current album ", current_album.name);

			//var album_name = current_album.name;
			//console.log('album name is ' + album_name);

			// displays the photos template
			showTemplate(photos_template, current_album);

			// add an on click all the photo thumbnails
			// which displays the photo in a modal popup
			$(".photo-thumbnail").click(function(){

				
				$("#booking_form").css({'display':'initial'});
				// get the index (position in the array)
				// of the photo we clicked on
				// "this" is the element that was clicked on
				// data("id") gets the attribute data-id
				// (which we set to the index of the photo in
				// the array - @index)
				var index = $(this).data("id");

				// set the current photo to this photo
				current_photo = current_album.photos[index];

				//$("#booking_form").show(0);

				// displays the single photo template

				showTemplate(photo_template, current_photo);

				// Assign variables(without material variables) 
				//to log into dateTimeData hidden input forms
				hairstyle = current_photo.title;
				hairstyle_src = current_photo.src;
				installation_price = current_photo.price;
				album = current_album.name;

				//console.log("new title is :", hairstyle);
				console.log("new title is :", hairstyle);
				console.log("new source is :", hairstyle_src);
				console.log("new installation_price is :", installation_price);
				console.log("new album is :", album);

				// Logging variables(without material variables) in dateTimeData hidden input forms
				$('#hairstyle_title').val(hairstyle).text();
				$('#hairstyle_src').val(hairstyle_src).text();
				$('#installation_price').val(installation_price).text();
				$('#album').val(album).text();

			});

		});
	});

	// 
	//  clicking on the photos tab shows all of the 
	//  photos in the current album
	//
	$("#photos-tab").click(function () {

		$("#booking_form").css({'display':'none'});
		
		// displays the photos template
		showTemplate(photos_template, current_album);

		console.log(current_album.name);

		//var album_name = current_album.name;

		// make the photos tab the active one
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make photos tab active
		$("#photos-tab").addClass("active");

		// add an on click al all the photo thumbnails
		// which displays the photo in a modal popup
		$(".photo-thumbnail").click(function (){

			
			// get the index (position in the array)
			// of the photo we clicked on
			// "this" is the element that was clicked on
			// data("id") gets the attribute data-id
			// (which we set to the index of the photo in
			// the array - @index)
			var index = $(this).data("id");
			console.log('This is index ', index);


			// set the current photo to this photo
			current_photo = current_album.photos[index];

			$("#booking_form").css({'display':'initial'});

			// displays the single photo template

			showTemplate(photo_template, current_photo);

			// Assign variables(without material variables) to log into dateTimeData hidden input forms
			hairstyle = current_photo.title;
			hairstyle_src = current_photo.src;
			installation_price = current_photo.price;
			album = current_album.name;

			console.log("new title is :", hairstyle);
			console.log("new source is :", hairstyle_src);
			console.log("new installation_price is :", installation_price);
			console.log("new album is :", album);

			// Logging variables(without material variables) in dateTimeData hidden input forms
			$('#hairstyle_title').val(hairstyle).text();
			$('#hairstyle_src').val(hairstyle_src).text();
			$('#installation_price').val(installation_price).text();
			$('#album').val(album).text();

		});

	});

	
	// start the page by showing the albums view
	// we do this by virtually clicking on the 
	// albums tab
	$("#albums-tab").click();
	


	// Function to clear date and time input once posted
	function clearInput() {
		$("#dateTimeData").find("input").each(function(){
			$(this).val(" ");
		});
	}

	function generateLoginButton() {
		var $login_div = $("<div>", {id: "login_div"});
		var $signup_div = $("<div>", {id: "signup_div"});
		
		//$login_div.click(function(){ /* ... */ });
		$("#content").append($login_div);
		$("#content").append($signup_div);
		
		//const id = document.getElementById('content');
						
		let login_button = $('<button>', {'class': 'button-size'});
		let signup_button = $('<button>', {'class': 'button-size'});
		//Vanilla JS implementation
		//let signup_button = document.createElement('button');

		login_button.text('Sign in');
		signup_button.text('Sign up');
		//signup_button.innerHTML = "Sign up";
		
		//id.appendChild(login_div);
		$("#login_div").append(login_button).click(function() {
			window.location = "login.php";
		});

		$("#signup_div").append(signup_button).click(function() {
			window.location = "register.php";
		});	
		
	}


	function validateResponse(response) {
	  if (!response.ok) {
	    throw 'Failed! check your network and try again';
	  }
	  return response;
	}

	function readResponseAsJSON(response) {
	  return response.json();
	}

	function readResponseAsText(response) {
	  return response.text();
	}

	//Fetch and Show logout link and username only if user is in session
	//Otherwise show login and register links if user is not in session
	const fetchSession = async (url) => {
		fetch(url)
	    .then(validateResponse)
	    .then(readResponseAsJSON)
	    .then(data => {

	    	console.log('this is data', data);
	        
	        return data.map(function(row) {

	        	console.log('username is: ', row.username);

	    		document.getElementById("logout").style.display = "inline";
	    		document.getElementById("username").style.display = "inline";
	    		document.getElementById("username").innerHTML = row.username;
	        });
	    })
	    .catch((err) => {
	    	console.log('Username not found here');
	    	document.getElementById('login').style.display = 'inline';
	    });	
	}
	fetchSession('session.php');
		


	//function using Date objects to return today's date
	//so it can be called on the 'min' attribute of 
	//form input type=date of the inspection date calendar.
	function minDate() {
		var today = new Date();
		var yyyy = today.getFullYear();
		var mm =  today.getMonth() + 1;
		var dd = today.getDate();

		mm = (mm < 10) ? ('0'+ mm) : mm;
	 	dd = (dd < 10) ? ('0' + dd) : dd;

		var currentDate = yyyy + '-' + mm + "-" + dd;
		console.log('currentDate ', currentDate)

		return currentDate;
	}

	//Disable past dates
	$('#bookd_date').attr('min', minDate());



  	
  	async function checkLengthBeforePosting(url) {
  		const response = await fetch(url);
		let data = await response.json();
		
			console.log('length is ', data.length);
			//return $('#content').html('You have to login to view your dashboard.');
		try{
			if (data.length >= 2) {
				throw 'You can only make maximum of 2 requests, decline at least one offer in your dashboard to add another request.';
				
			}
			else {
				
				// Fetch an HTML <form> with id of 'dateTimeData'
				await fetch('index.php', {				  
				  method: 'POST',
				  body: new FormData(document.getElementById('dateTimeData'))
				})
				.then(validateResponse)
				.then(function() {
					console.log('promise posted')

				  	var success = "Congratulations, request sent successfully.";
					$("#success").css({"display": "initial"});
					flash = $("#success").html(success);

					setTimeout(function() {
						(flash).fadeOut(3000);
						//flash.css({"display": "none"});
						console.log("hid success message")
					}, 3000);

					//$(flash).fadeOut(3000);

					$(".empty").each(function(){
						$(this).val(" ");
						console.log('emptied');
					});
				})
				.catch((error) => {
					$("#warning").html(error);
				});	
			}
		}
		catch(err) {
			$('#warning').html(err);	
		}
		
  	}
  	

  	async function checkSessionBeforePosting() {
  		const response = await fetch('session.php')
		let data = await response.text();
		
			console.log('data is ', data);
			//return $('#content').html('You have to login to view your dashboard.');
			try{
				if (data === 'ACCESS DENIED') {
					throw 'You have to sign in to be able to request inspection.';
					
				}
				else {
					console.log("sESSION aLIVE")	
				}
			}	
			
			catch(err) {
				await $("#booking_form").css({'display':'none'});	
				$('#content').html(err);

				generateLoginButton();
				
			}
		
  	}
  	
  	
		
	
	// Ajax function to post date, time, and product data to our php backend
	$("#product_button").click(async function() {
		event.preventDefault();

		var bookd_date = $('#bookd_date').val();
		var bookd_time = $('#bookd_time').val();
		var flash;
		
		if (bookd_date == null || bookd_date == "" || bookd_time == null || bookd_time == "") {
			var error = "Date and time must be chosen";
			
			flash = $("#warning").html(error);

			setTimeout(function() {
				flash.empty();
				console.log("emptied error message")
			}, 3000);

			
			//alert('date and time must be chosen');
			return false;
		}

		if (bookd_date < minDate()) {
			var error = 'Date must be today or ahead of today';
			$("#warning").css({"display": "initial", "color" : "red"});
			$('#warning').html(error);

			return false;
		}

		checkSessionBeforePosting();

		checkLengthBeforePosting('json_data.php');

	}); //product-button ends

	// Calling clear input function to clear form of data sent to the PHP backend
	clearInput();
	

	//Handlebars helper function to dynamically generate Accept buttons
	/*Handlebars.registerHelper('acceptButton', function() {
		let accept_button = '<button class="btn-light accept">';
	    return new Handlebars.SafeString( accept_button + 'Accept' + '</button>' );
	});

	//Handlebars helper function to dynamically generate Decline buttons
	Handlebars.registerHelper('declineButton', function() {
		let decline_button = '<button class="btn-light decline">';
	    return new Handlebars.SafeString( decline_button + 'Decline' + '</button>' );
	});*/

	

    //fetches bookings in dashboard
   	var fetchBookings = async function(url) {
    	await fetch(url)
	    	.then(validateResponse)
			.then(readResponseAsJSON)
			.then(data => {

		    	if (data.length === 0) {
		    		throw "You have no reservations.";
		    	}

		        var source = $("#bookings-template").html();
				var template = Handlebars.compile(source);

				var output = {
				    categories: []
				};

				
				for (var i = 0; i < data.length; i++) {
						output.categories.push({
						album : data[i].album,
						source : data[i].source,
						title : data[i].title,
						booked_date : data[i].booked_date,
						booked_time : data[i].booked_time,
						installation_price : data[i].installation_price
					});

					showTemplate(template, output);
				}

				$('body').on('click', '.accept', function() {
					console.log('accept button clicked');
			
					var index = $(this).data('id');
					console.log('index ', index)

					console.log(data[index]);

					console.log('Your card will be debited ',data[index].installation_price)
					
				});

				$('body').on('click', '.decline', function() {
					console.log('decline button clicked');
			
					var index = $(this).data('id');
					console.log('index ', index)

					console.log(data[index]);

					console.log('This will be deleted when you decline, are you sure you want to continue?')
					
				});
	    			

				
				

		       /* return data.map(async function(row) {
		            					
					output.categories.push({
						album : row.album,
						source : row.source,
						title : row.title,
						booked_date : row.booked_date,
						booked_time : row.booked_time,
						installation_price : row.installation_price
					});
					

					console.log("Now Awaiting: ", await output.categories);
					//$("#content").html(await template(output));
					await showTemplate(template, output);

		        });*/
		    })
		    .catch((error) => {	    				    					    				    			    			    			    	
		    	//console.log('this is array length ', response.length);
    			$('#content').html(error);			    
		    });
    }

   


	$('#dashboard').click(async function() {
		await $("#booking_form").css({'display':'none'});	 

		const response = await fetch('dashboard_session.php')
		let data = await response.json();
		
			console.log('length is ', data.length);
			//return $('#content').html('You have to login to view your dashboard.');
		try{
			if (data.length === 0) {
				throw 'You have to login to view your dashboard.';
				
			}
			else {
				console.log("Calling fetchBookings()")
				return fetchBookings('json_data.php');
			}
		}	
		
		catch(err) {
			
			console.log('No data here');	
			$('#content').html(err);

			generateLoginButton();
			
		}
		
	});

	

	//Function for About tab	
	$('.bout').click(async function() {
		await $("#booking_form").css({'display':'none'});
		var about_source = $('#about-template').html();
		var about_template = Handlebars.compile(about_source);
		await $('#content').html(about_template);

	});


	/*(function() {
	'use strict';

		//check for support
		if (!('indexedDB' in window)) {
		console.log('This browser doesn\'t support IndexedDB');
		return;
		}

		var dbPromise = idb.open('booking-form-db', 1, function(upgradeDb) {
			console.log('Making a new object store');
			if (!upgradeDb.objectStoreNames.contains('booking_form_post_data')) {
			  upgradeDb.createObjectStore('booking_form_post_data', {keyPath: 'id', autoIncrement: true});
			}
		});

	})();*/




});