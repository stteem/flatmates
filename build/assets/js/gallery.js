
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
				//to log into dateTimeData hidden input forms for posting
				hairstyle = current_photo.title;
				hairstyle_src = current_photo.src;
				installation_price = current_photo.price;
				hostPhone = current_photo.hostPhone;
				album = current_album.name;
				var unisex = current_photo.unisex;
				var bedroom = current_photo.bedroom;
				var wifi = current_photo.wifi;
				var gen = current_photo.gen;
				var tv = current_photo.tv;
				var service = current_photo.service;
				var electricity = current_photo.electricity;
				var kitchen = current_photo.kitchen;
				var bath = current_photo.bath;
				var toilet = current_photo.toilet;
				var address = current_photo.address;


				var obj = {
					hairstyle : current_photo.title,
					hairstyle_src : current_photo.src,
					installation_price : current_photo.price,
					hostPhone : current_photo.hostPhone,
					album : current_album.name,
					unisex : current_photo.unisex,
					bedroom : current_photo.bedroom,
					wifi : current_photo.wifi,
					gen : current_photo.gen,
					tv : current_photo.tv,
					service : current_photo.service,
					electricity : current_photo.electricity,
					kitchen : current_photo.kitchen,
					bath : current_photo.bath,
					toilet : current_photo.toilet,
					address : current_photo.address
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
				$('#address').val(address).text();
				$('#hairstyle_src').val(hairstyle_src).text();
				$('#installation_price').val(installation_price).text();
				$('#hostPhone').val(hostPhone).text();
				$('#album').val(album).text();
				$('#unisex').val(unisex).text();
				$('#service').val(service).text();
				$('#bedroom').val(bedroom).text();
				$('#wifi').val(wifi).text();
				$('#tv').val(tv).text();
				$('#electricity').val(electricity).text();
				$('#kitchen').val(kitchen).text();
				$('#bath').val(bath).text();
				$('#toilet').val(toilet).text();
				$('#gen').val(gen).text();



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
			var unisex = current_photo.unisex;
			var bedroom = current_photo.bedroom;
			var wifi = current_photo.wifi;
			var gen = current_photo.gen;
			var tv = current_photo.tv;
			var service = current_photo.service;
			var electricity = current_photo.electricity;
			var kitchen = current_photo.kitchen;
			var bath = current_photo.bath;
			var toilet = current_photo.toilet;
			var address = current_photo.address;


			var obj = {
		        hairstyle : current_photo.title,
		        hairstyle_src : current_photo.src,
		        installation_price : current_photo.price,
		        hostPhone : current_photo.hostPhone,
		        album : current_album.name,
		        unisex : current_photo.unisex,
				bedroom : current_photo.bedroom,
				wifi : current_photo.wifi,
				gen : current_photo.gen,
				tv : current_photo.tv,
				service : current_photo.service,
				electricity : current_photo.electricity,
				kitchen : current_photo.kitchen,
				bath : current_photo.bath,
				toilet : current_photo.toilet,
				address : current_photo.address
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
			$('#address').val(address).text();
			$('#hairstyle_src').val(hairstyle_src).text();
			$('#installation_price').val(installation_price).text();
			$('#hostPhone').val(hostPhone).text();
			$('#album').val(album).text();
			$('#unisex').val(unisex).text();
			$('#service').val(service).text();
			$('#bedroom').val(bedroom).text();
			$('#wifi').val(wifi).text();
			$('#tv').val(tv).text();
			$('#electricity').val(electricity).text();
			$('#kitchen').val(kitchen).text();
			$('#bath').val(bath).text();
			$('#toilet').val(toilet).text();
			$('#gen').val(gen).text();

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
	    .then(()=> {
	    	fetch('json_data.php')
			.then(validateResponse)
			.then(readResponseAsJSON)
			.then(console.log('json_data loaded'))
	    })
	    .catch((err) => {
	    	console.log('Username not found here');
	    	document.getElementById('login').style.display = 'inline';
	    });	
	}
	fetchSession('session.php');


	//This function returns the number of days when the start date and end date calenders are selected
	function datePickerDifference() {
		var t1 = $('#date_picker1_alternate_date').val();
		t1 = t1.split('-');
		dt_t1 = new Date(t1[2], t1[1]-1, t1[0]); // YYYY,mm,dd format to create date object
		dt_t1_tm = dt_t1.getTime(); // time in milliseconds for day 1
		//alert(dt_t1_tm);
		var t2 = $('#date_picker2_alternate_date').val();
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
		dateFormat: 'DD, d MM, yy',
		minDate: '0',
		altField: "#date_picker1_alternate_date",
     	altFormat: 'dd-mm-yy'
	});
	///////
	///////
	 $( "#date_picker2" ).datepicker({
		dateFormat: 'DD, d MM, yy',
		minDate: '0',
	 	altField: "#date_picker2_alternate_date",
     	altFormat: 'dd-mm-yy'
	});

	 $("#bookd_date").datepicker({
	 	dateFormat : "DD, d MM, yy",
	 	minDate : '0',
	 	maxDate : 'startDate',
	 	altField: "#alternate_inspection_date",
     	altFormat: 'yy-mm-dd'
	 });

	 $('#bookd_date').change(function() {

	 	let alternate_date = $('#alternate_inspection_date').val();
	 	console.log('alt date ', alternate_date);

		/*if (!$("#date_picker1").val()) {
			var error = 'Choose your Start Date first';
			$('#warning').html(error);
			return false;
		}*/
	});

	///////
	$('#date_picker1').change(function() {
	startDate = $(this).datepicker('getDate');
	$("#date_picker2").datepicker("option", "minDate", startDate );
	$("#bookd_date").datepicker("option", "maxDate", startDate );
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
		if ($('#date_picker1_alternate_date').val()) {
			datePickerDifference();
		}
	});

	/*$('#bookd_time').change(function() {
		var time = new Date();
		var maxTime = time.setHours(17);
		if ($(this).val() > maxTime) {
			var timeError = "Inspection hours are between 8AM and 6PM";
			$('#warning').html(timeError);
			return false;
		}
	});*/

	/*const input = document.getElementById('bookd_time');
	const log = document.getElementById('warning');
	var maxi = document.getElementById("bookd_time").max;

	input.addEventListener('change', updateValue);

	function updateValue(input) {
		console.log('maxi ', maxi)
		if (input.value > maxi) {
			log.textContent = "Inspection hours are between 8AM and 6PM";
			//return false;
		}
	}*/

	/*var maxi = document.getElementById("bookd_time").max;
	input.addEventListener("input", function() {
		console.log('maxi ', maxi)
		if (input.value > maxi) {
			log.innerText = "Inspection hours are between 8AM and 6PM";
			return false;
		}
	  
	});*/


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
	//$('#bookd_date').attr('max', startDate);



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

			//if (navigator.onLine) {
				//var formdata = new FormData(document.getElementById('dateTimeData'));
				//console.log('formdata ', formdata)
				
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
				.catch(() => {
					throw "No network, try again later";
				})
			/*}
			else {
				throw "No network, try again later";
			}*/
				
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
  	} //checkLengthBeforePosting() ends
  	

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
		//var start_date = $('#date_picker2').val();
		//var end_date = $('#date_picker1').val();
		var flash;

		if (startDate == null || startDate == "" || endDate == null || endDate == "") {
			var error = "Start date and end date must be chosen";
			flash = $('#warning').html(error);

			setTimeout(function() {
				flash.empty();
				console.log("emptied error message")
			}, 3000);

			return false;
		}
		
		if (bookd_date == null || bookd_date == "" || bookd_time == null || bookd_time == "") {
			var error = "Inspection date and time must be chosen";
			
			flash = $("#warning").html(error);

			setTimeout(function() {
				flash.empty();
				console.log("emptied error message")
			}, 3000);

			
			//alert('date and time must be chosen');
			return false;
		}

		/*if (bookd_date < minDate()) {
			var error = 'Date must be today or ahead of today';
			$("#warning").css({"display": "initial", "color" : "red"});
			flash = $('#warning').html(error);

			setTimeout(function() {
				flash.empty();
				console.log("emptied error message")
			}, 3000);

			return false;
		}*/

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

		if (bookd_date > startDate) {
			var error = "Your inspection date must be ahead of your start/arrival date or the same day";

			flash = $("#warning").html(error);

			setTimeout(function() {
				flash.empty();
				console.log("emptied error message")
			}, 3000);

			
			//alert('date and time must be chosen');
			return false;
		}

		
		
		//var maxi = document.getElementById("bookd_time").max;
		//var mini = document.getElementById("bookd_time").min;
		var maxi = $( "#bookd_time" ).attr( "max" );
		var mini = $( "#bookd_time" ).attr( "min" );
		
		console.log('maxi ', maxi)
		console.log('input ', bookd_time)
		if (bookd_time > maxi || bookd_time < mini) {
			var error = "Inspection hours must be between 8am and 6pm";
			flash = $("#warning").html(error);

			setTimeout(function() {
				flash.empty();
				console.log("emptied error message")
			}, 4000);

			return false;
		}
	

		checkSessionBeforePosting();

		checkLengthBeforePosting('json_data.php');

	}); //product-button ends

	// Calling clear input function to clear form of data sent to the PHP backend
	clearInput();
	

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
					start_date : row.start_date,
					end_date : row.end_date,
					booked_date : row.booked_date,
					booked_time : row.booked_time,
					installation_price : new Intl.NumberFormat().format(row.installation_price),
					cost : new Intl.NumberFormat().format(row.calculated_cost),
					days : row.num_of_days,
					unisex : row.unisex,
					bedroom : row.bedroom,
					wifi : row.wifi,
					gen : row.gen,
					tv : row.tv,
					service : row.service,
					electricity : row.electricity,
					kitchen : row.kitchen,
					bath : row.bath,
					toilet : row.toilet,
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
	    })
	    .catch((error) => {	    				    					    				    			    			    			    	
	    	//console.log('this is array length ', response.length);
			$('#content').html(error);			    
	    });
    }

   


	$('#dashboard').click(async function() {

		await $("#booking_form").css({'display':'none'});
			 //$("#bookd_date").empty();
			 //$("#bookd_time").empty();

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


	$('body').on('click', '.accept', function() {
		console.log('accept button clicked');

		var index = $(this).data('id');
		console.log('index ', index)

		fetch('json_data.php')
    	.then(validateResponse)
		.then(readResponseAsJSON)
		.then(data => {

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
				amount: data[index].calculated_cost,
				customer_phone: data[index].phone,
				country: "NG",
				currency: "NGN",
				txref: tRef,
				integrity_hash: "",
				onclose: function() {},
				callback: function(response) {
					var flw_ref = response.tx.flwRef; // collect flwRef returned and pass to a server page to complete status check.
					console.log("This is the response returned after a charge", response);
					if (response.tx.chargeResponseCode == "00" || response.tx.chargeResponseCode == "0") {
					  //redirect to a success page

					  	/*var data = {
					  		booking_id : data[index].booking_id,
					  		status : 'Paid'
					  	}*/
						//console.log("data is life ",data);

						var post = $.post("payment_status.php", {booking_id : data[index].booking_id, status : 'Paid'});

						post.done(function() {

							console.log("Data posted");
							/*var acceptClass = $('.accept');
							console.log('acceptClass', acceptClass[index])
							acceptClass[index].remove();
							console.log("successfull!")*/
							$('#dashboard').click();
						});

						post.fail(function() {
							console.log("sorry it failed");
						})
					
						/*fetch('payment_status.php', {				  
						  method: 'POST',
						  body: JSON.stringify({ booking_id: data[index].booking_id, status: 'Paid' })
						})
						.then(validateResponse)
						.then(function() {
							var acceptClass = $('.accept');
							console.log('acceptClass', acceptClass[index])
							acceptClass[index].remove();
							console.log("successfull!")
						})*/		
					} else {
					  // redirect to a failure page.
					  	console.log("sorry Failed!")
					}
				//x.close();
				}
		    });	
		})	
	});



	$('body').on('click', '.decline', async function() {
		console.log('decline button clicked');



		var index = $(this).data('id');

		var confam = confirm('Are you sure you want to decline and delete this item?');

		if (confam == true) {

			fetch('json_data.php')
	    	.then(validateResponse)
			.then(readResponseAsJSON)
			.then(data => {
				
				console.log('index ', index)

				var values = [];

				if (values.length > 0) {
					values.length = 0;
				}
				
				values.push({ name: 'id', value: data[index].booking_id });   

				var post = $.post("delete_booking.php", values);

				post.fail(function() {
					var error = 'Failed to delete, check internet connection and try again';
					$('#delete-warning').html(error);
				});
				
				//Callback function to display ajax post request on DOM without page reload
				post.done(function() {
					//Calling dashboard click event to update list
					$('#dashboard').click();
					//var thisOrder = $('.list');
					//thisOrder[index].remove();

					console.log('Deleted')

				});
			})
			//.then(fetchBookings('json_data.php'))	
		} 
		else {
			console.log("Canceled!");
		}
	});
	

	//Function for About tab	
	$('.bout').click(async function() {
		await $("#booking_form").css({'display':'none'});
		var about_source = $('#about-template').html();
		var about_template = Handlebars.compile(about_source);
		await $('#content').html(about_template);

	});

	$('body').on('click', '#showMore', async function() {
		event.preventDefault();
		$("#showMore").hide(function() {
			$("#showLess").show(500);
		});
	});

	$('body').on('click', '#showLesser', async function() {
		event.preventDefault();
		$("#showLess").hide(500, function() {
			$("#showMore").show(500);
		});
	});


	

	/*self.addEventListener('notificationclick', function(event) {
	  const clickedNotification = event.notification;
	  clickedNotification.close();

	  // Do something as the result of the notification click
	  const promiseChain = doSomething();
	  event.waitUntil(promiseChain);
	});*/

	

});