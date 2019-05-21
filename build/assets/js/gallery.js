
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

var current_object = [];


var installation_price, hairstyle, hairstyle_src, title, album, hostPhone;


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
				hostPhone = current_photo.hostPhone;
				album = current_album.name;


				var obj = {
					hairstyle : current_photo.title,
					hairstyle_src : current_photo.src,
					installation_price : current_photo.price,
					hostPhone : current_photo.hostPhone,
					album : current_album.name
				}
				console.log('obj is ', obj)

				//Here we set the current_object global array length
				// to zero to make sure we always have 1 object per time
				if (current_object.length > 0) {
					current_object.length = 0;
					console.log('cleared current_object')
				}

				if (current_object.length == 0) {
					var push = current_object.push(obj);
					console.log('pushed ', push)
					console.log('new current_object ', current_object)
				}   

				console.log('current hairstyle_src is ', current_object[0].hairstyle_src)

				//console.log("new title is :", hairstyle);
				console.log("new title is :", hairstyle);
				console.log("new source is :", hairstyle_src);
				console.log("new installation_price is :", installation_price);
				console.log("new hostPhone is :", hostPhone);
				console.log("new album is :", album);

				// Logging variables(without material variables) in dateTimeData hidden input forms
				$('#hairstyle_title').val(hairstyle).text();
				$('#hairstyle_src').val(hairstyle_src).text();
				$('#installation_price').val(installation_price).text();
				$('#hostPhone').val(hostPhone).text();
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
			hostPhone = current_photo.hostPhone;
			album = current_album.name;


			var obj = {
		        hairstyle : current_photo.title,
		        hairstyle_src : current_photo.src,
		        installation_price : current_photo.price,
		        hostPhone : current_photo.hostPhone,
		        album : current_album.name
		    }
		      console.log('obj is ', obj)

		      //Here we set the current_object global array length
		      // to zero to make sure we always have 1 object per time
			if (current_object.length > 0) {
				current_object.length = 0;
				console.log('cleared current_object')
			}

			if (current_object.length == 0) {
				var push = current_object.push(obj);
				console.log('pushed ', push)
				console.log('new current_object ', current_object)
			}   
		      
		    console.log('current hairstyle_src is ', current_object[0].hairstyle_src)


			console.log("new title is :", hairstyle);
			console.log("new source is :", hairstyle_src);
			console.log("new hostPhone is :", hostPhone);
			console.log("new installation_price is :", installation_price);
			console.log("new album is :", album);

			// Logging variables(without material variables) in dateTimeData hidden input forms
			$('#hairstyle_title').val(hairstyle).text();
			$('#hairstyle_src').val(hairstyle_src).text();
			$('#installation_price').val(installation_price).text();
			$('#hostPhone').val(hostPhone).text();
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


	//This function returns the number of days when the start date and end date calenders are selected
	function datePickerDifference() {
		var t1 = $('#date_picker1').val();
		t1 = t1.split('-');
		dt_t1 = new Date(t1[2], t1[1]-1, t1[0]); // YYYY,mm,dd format to create date object
		dt_t1_tm = dt_t1.getTime(); // time in milliseconds for day 1
		//alert(dt_t1_tm);
		var t2 = $('#date_picker2').val();
		t2 = t2.split('-');
		dt_t2 = new Date(t2[2], t2[1]-1, t2[0]); // YYYY,mm,dd format to create date object
		dt_t2_tm = dt_t2.getTime(); // time in milliseconds for day 2
		/////////////////
		var one_day = 24*60*60*1000; // hours*minutes*seconds*milliseconds
		var diff_days = Math.abs((dt_t2_tm - dt_t1_tm)/one_day) // difference in days

		let rent_per_day = Math.round(current_object[0].installation_price/365);
		let calculated_cost = rent_per_day * diff_days;
		let formated_sum = new Intl.NumberFormat().format(calculated_cost);
		var nairaSymbol = decodeURI("&#8358;");

		if (diff_days > 1) {
			$("#result").html(diff_days + " Days " + "Cost " + nairaSymbol + formated_sum);
			$("#cost-info").css({"background-color": "#00bcd4", 
								"color" : "white",
								"text-align" : "center" });
			$("#result").show();
			
		}
		else {
			$("#result").html(diff_days + " Day " + "Costs " + nairaSymbol + formated_sum);
			$("#cost-info").css({"background-color": "#00bcd4", 
								"color" : "white",
								"text-align" : "center" });
			$("#result").show();
		}

		$('#calculated_cost').val(calculated_cost).text();
		$('#num_of_days').val(diff_days).text();
	}

///////
	var startDate;
	var endDate;
	 $("#date_picker1").datepicker({
	dateFormat: 'dd-mm-yy',
	minDate: '0'
	});
	///////
	///////
	 $( "#date_picker2" ).datepicker({
	dateFormat: 'dd-mm-yy',
	minDate: '0'
	});
	///////
	$('#date_picker1').change(function() {
	startDate = $(this).datepicker('getDate');
	$("#date_picker2").datepicker("option", "minDate", startDate );
		////////////////
		if ($("#date_picker2").val()) {
			datePickerDifference();
		}
	});

	///////
	$('#date_picker2').change(function() {
		endDate = $(this).datepicker('getDate');
		$("#date_picker1").datepicker("option", "maxDate", endDate );
		////////////////
		datePickerDifference();

	});

////////////////
		


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

	function minTime() {
		var today = new Date();
		var hr = today.getHours();
		var mins = today.getMinutes();

		var currentTime = hr + ':' + mins;
		console.log('currentTime ', currentTime)
		return currentTime;
	}



  	
  	async function checkLengthBeforePosting(url) {
  		await fetch(url)
		.then(response => response.json())
		.then(data => {

			console.log('length is ', data.length);

			if (data.length >= 2) {
				throw 'You can only make maximum of 2 requests, decline and delete at least one offer in your dashboard to add another request.';
				
			}

			if (data.length != 0) {
				if (data[0].source == current_object[0].hairstyle_src) {
					throw 'You have already made this request';
				}
			}


			// Fetch an HTML <form> with id of 'dateTimeData'
			fetch('index.php', {				  
			  method: 'POST',
			  body: new FormData(document.getElementById('dateTimeData'))
			})
			.then(validateResponse)
			.then(function() {
				console.log('promise posted')

			  	var success = "Congratulations, request sent successfully.";
				$("#success").css({"display": "initial"});
				$("#success").html(success);

				setTimeout(function() {
					$("#success").fadeOut(3000, function() {
						$(this).empty();
					});
					//flash.css({"display": "none"});
					console.log("hid success message")
				}, 3000);

				

				$(".empty").each(function(){
					$(this).val(" ");
					console.log('emptied');
				});
			})
			.catch((error) => {
				$("#warning").html(error);
			});	

		})
		.catch((err) => {

			$('#warning').html(err);
			setTimeout(function() {
			$('#warning').fadeOut(3000, async function() {
					await $(this).empty().show();
				});
				//flash.css({"display": "none"});
				console.log("hid message")
			}, 7000);
		});
		
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
			flash = $('#warning').html(error);

			setTimeout(function() {
				flash.empty();
				console.log("emptied error message")
			}, 3000);

			return false;
		}

		if (bookd_date == minDate() && bookd_time < minTime()) {
			var error = 'Time must be ahead of current time';
			$("#warning").css({"display": "initial", "color" : "red"});
			flash = $('#warning').html(error);

			setTimeout(function() {
				flash.empty();
				console.log("emptied error message")
			}, 3000);

			return false;
		}

		checkSessionBeforePosting();

		checkLengthBeforePosting('json_data.php');

	}); //product-button ends

	// Calling clear input function to clear form of data sent to the PHP backend
	clearInput();



	function formatNumber() {
	 	var c = $('.formati');
		return new Intl.NumberFormat().format(c);   
	};
	formatNumber();
	

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

			
			/*for (var i = 0; i < data.length; i++) {
					output.categories.push({
					album : data[i].album,
					source : data[i].source,
					title : data[i].title,
					booked_date : data[i].booked_date,
					booked_time : data[i].booked_time,
					installation_price : data[i].installation_price
				});

				showTemplate(template, output);
			}*/

			data.map(async function(row) {
	            					
				output.categories.push({
					album : row.album,
					source : row.source,
					title : row.title,
					address : row.address,
					host_phone : row.hostPhone,
					booked_date : row.booked_date,
					booked_time : row.booked_time,
					installation_price : new Intl.NumberFormat().format(row.installation_price),
					cost : new Intl.NumberFormat().format(row.calculated_cost),
					days : row.num_of_days,
					status : row.status
				});
        	});

        	console.log("Now Awaiting1: ", output.categories);
			//$("#content").html(await template(output));
			showTemplate(template, output);

			

			//Handlebars helper function to dynamically generate Accept buttons
			/*Handlebars.registerHelper('acceptButton', function() {
				let accept_button = '<button class="btn-light accept" data-id="{{@index}}">';
			    return new Handlebars.SafeString( accept_button + 'Accept and Pay Now' + '</button>' );
			});

			//Handlebars helper function to dynamically generate Decline buttons
			Handlebars.registerHelper('declineButton', function() {
				let decline_button = '<button class="btn-light decline" data-id="{{@index}}">';
			    return new Handlebars.SafeString( decline_button + 'Decline and Delete' + '</button>' );
			});*/

			$('.accept').each(function() {
				console.log('thisButton ', $(this).data('id'))
				var findex = $(this).data('id');
				if (data[findex].status == "Paid") {
					//$(this).css({'display' : 'none'});
					$(this).remove();
				}
			});
			



			$('body').on('click', '.accept', function() {
				console.log('accept button clicked');
		
				var index = $(this).data('id');
				console.log('index ', index)

				console.log(data[index]);

				console.log('Your card will be debited ', new Intl.NumberFormat().format(data[index].calculated_cost))

				var splitName = data[index].username;
				var splitted = splitName.split(" ");
				console.log(splitted[0])

				var tRef = 'FM' + data[index].booking_id + 'A';


				/*document.addEventListener("DOMContentLoaded", function(event) {
				  document.getElementById("submit").addEventListener("click", function(e) {*/
			    var PBFKey = "FLWPUBK-65d3a83eb4c97e048016e53bb6d4a5aa-X";
				    
				getpaidSetup({
				      PBFPubKey: PBFKey,
				      customer_email: data[index].email,
				      customer_firstname: splitted[0],
				      customer_lastname: splitted[1],
				      custom_description: "Make Payment",
				      custom_logo: "",
				      custom_title: "Flatmates Africa",
				      amount: new Intl.NumberFormat().format(data[index].calculated_cost),
				      customer_phone: data[index].phone,
				      country: "NG",
				      currency: "NGN",
				      txref: tRef,
				      integrity_hash: "",
				      onclose: function() {},
				      callback: function(response) {
				        var flw_ref = response.tx.flwRef; // collect flwRef returned and pass to a server page to complete status check.
				        console.log("This is the response returned after a charge", response);
				        if (
				          response.tx.chargeResponseCode == "00" ||
				          response.tx.chargeResponseCode == "0"
				        ) {
				          //redirect to a success page
				      		var acceptClass = $('.accept');
				      		console.log('acceptClass', acceptClass[index])
				      		acceptClass[index].remove();
				      		console.log("successfull!")
				        } else {
				          // redirect to a failure page.
				          	console.log("Failed!")
				        }

				        //x.close();
				      }
				    });
				  //});
				//});

				
			});

			$('body').on('click', '.decline', async function() {
				console.log('decline button clicked');

				var index = $(this).data('id');

				var confam = confirm('Are you sure you want to decline and delete this item?');

				if (confam == true) {
					
					console.log('index ', index)

					var values = [];

					if (values.length > 0) {
						values.length = 0;
					}
					
					values.push({ name: 'id', value: data[index].booking_id });   

					var post = $.post("delete_booking.php", values);

					post.fail(function() {
						var error = 'Failed to post, check internet connection and try again';
						$('#warning').html(error);
					});
					
					//Callback function to display ajax post request on DOM without page reload
					post.done(function() {
						//Calling dashboard click event to update list
						$('#dashboard').click();

						console.log('Deleted')

					});
				} 
				else {
					console.log("Canceled!");
				}
			});
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