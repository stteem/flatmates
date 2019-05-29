// this file contains the data we need for the gallery
// The main object, "gallery" contains an array of album
// each album contains an array of photos 
// (plus a name and a thumbnail image)
// The photos contain an image src and some metadata

var gallery = {
	albums : [
		{
			name : "Lagos", 
			thumbnail : "assets/images/landmarks/lagos_city1.jpg",
			photos : [
				{	
					src : "assets/images/homes/lagos/yellow-couch-by-black-and-white-mural_925x.jpg",
					title : "Shared 2 Bedroom Apartment in Lagos Island", 
					address : "Plot 13 Yakubu close, Victoria Island",
					price : 400000,
					description : "Per year",
					hostPhone : 3937838392,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained',
					thumbnail_pics : [
						{
							src1: "assets/images/homes/lagos/condominium-interior-livingroom_925x.jpg"				
						},
						{
							src1: "assets/images/homes/lagos/home-tv-stand-shelves_925x.jpg"
						},
						{
							src1: "assets/images/homes/lagos/laptop-in-modern-office_925x.jpg"
						},
						{
							src1: "assets/images/homes/calabar/bedroom-end-table-with-dad-gift_925x.jpg"
						}
					]
				},
				{	
					src : "assets/images/homes/lagos/condominium-interior-livingroom_925x.jpg",
					title : "Shared Space in Lagos Mainland", 
					address : "10 Salako Mafoluku, Oshodi",
					price : 250000,
					description : "Per year",
					hostPhone : 2147483647,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/lagos/home-tv-stand-shelves_925x.jpg",
					title : "Shared Space in Victoria Island", 
					address : "Plot 10 Yakubu close, Victoria Island",
					price : 550000,
					description : "Per year",
					hostPhone : +2338093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/lagos/laptop-in-modern-office_925x.jpg",
					title : "Shared Space in Victoria Island", 
					address : "Plot 26 Yakubu close, Victoria Island",
					price : 450000,
					description : "Per year",
					hostPhone : 3937838392,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/lagos/bathroom-shelving-mirror_925x.jpg",
					title : "Shared Space in Banana Island",
					address : "26 Bruce Street, Banana Island", 
					price : 450000,
					description : "Per year",
					hostPhone : +2348093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/lagos/bedroom-with-heart-pillows_925x.jpg",
					title : "Shared Space in Lekki Phase 2", 
					address : "Plot 26 Lekki way, Lekki",
					price : 440000,
					description : "Per year",
					hostPhone : 08093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/lagos/bed-bedside-table_925x.jpg",
					title : "2 bedroom Shared Space in Ikeja", 
					address : "Plot 26 Airforce base, Ikeja",
					price : 380000,
					description : "Per year",
					hostPhone : +2338093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/lagos/books-on-sofa-in-sunbeam_925x.jpg",
					title : "Shared Space in Ikoyi", 
					address : "Plot 26 Arewa close, Ikoyi",
					price : 250000,
					description : "Per year",
					hostPhone : 3937838392,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/lagos/teak-headboard-table_925x.jpg",
					title : "Shared 2 Bedroom Space in Yaba", 
					address : "Plot 26 Mobil quarters, Yaba",
					price : 280000,
					description : "Per year",
					hostPhone : +2348093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/lagos/yellow-pillow-bedside-table_925x.jpg",
					title : "Shared 2 Bedroom Flat in Ajah", 
					address : "Plot 26 Tinibu close, Ajah",
					price : 360000,
					description : "Per year",
					hostPhone : 2147483647,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				}
			]
		},
		{
			name : "Abuja", 
			thumbnail : "assets/images/landmarks/abuja_city1.jpg",
			photos : [
				{	
					src : "assets/images/homes/abuja/diy-organic-candle_925x.jpg",
					title : "Shared Apartment in Abuja", 
					address : 'Plot 2 Wuse close', 
					price : 350000,
					description : "Per year",
					hostPhone : 08093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				}, 
				{	
					src : "assets/images/homes/abuja/gas-cooking-range-in-a-large-home-kitchen_925x.jpg",
					title : "Cozy Shared Apartment in Maitama, Abuja", 
					address : "Plot 26 Gowon close, Maitama",
					price : 460000,
					description : "Per year",
					hostPhone : 2147483647,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				}, 
				{	
					src : "assets/images/homes/abuja/hotel-bed-with-bamboo-details_925x (1).jpg",
					title : "Shared 2 Bedroom Flat in Abuja", 
					address : "Plot 26 Shagari close, Maitama",
					price : 400000,
					description : "Per year",
					hostPhone : 3937838392,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'					      	  
				},
				{	
					src : "assets/images/homes/abuja/large-grey-sofa-by-brick-wall_925x.jpg",
					title : "Shared 2 Bedroom Flat in Abuja", 
					address : "Plot 8 Gowon close, Maitama",
					price : 370000,
					description : "Per year",
					hostPhone : +2348093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
					
				},
				{	
					src : "assets/images/homes/abuja/livingroom-rainbows_925x.jpg",
					title : "Shared 2 Bedroom Flat in Wuse 1, Abuja", 
					address : "Plot 26 Babangida boulevard, Wuse 1",
					price : 400000,
					description : "Per year",
					hostPhone : +2338093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
					
				},
				{	
					src : "assets/images/homes/abuja/loftstyle-bedroom-with-throw-pillows_925x.jpg",
					title : "Loft Style 2 Bedroom Flat in Garki, Abuja", 
					address : "Plot 10 Gowon close, Garki",
					price : 420000,
					description : "Per year",
					hostPhone : 2147483647,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/abuja/modern-updated-kitchen-interior-home_925x.jpg",
					title : "Ultra Modern 3 Bedroom Flat in Maitama, Abuja", 
					address : "Plot 24 yabi close, Maitama",
					price : 300000,
					description : "Per year",
					hostPhone : +2348093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/abuja/cozy-livingroom-with-window_925x.jpg",
					title : "Modern Shared Apartment in Wuse 2, Abuja", 
					address : "Plot 26 Harbert Way, Wuse 2",
					price : 350000,
					description : "Per year",
					hostPhone : 3937838392,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				}
				
				     
			]
		},
		{
			name : "Calabar", 
			thumbnail : "assets/images/landmarks/crossriver_city1.jpg",
			photos : [
				{	
					src : "assets/images/homes/calabar/bungalow-house-exterior_925x.jpg",
					title : "Shared flat in Calabar South", 
					address : "Plot 10 Yakubu lane, Calabar south",
					price : 300000,
					description : "Per year",
					hostPhone : +2338093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				}, 
				{	
					src : "assets/images/homes/calabar/casual-sitting-area-with-cactus_925x.jpg",
					title : "Shared Flat in Ndidem Usang Isong",
					address : "Plot 1 Esuene close, Ndidem Usang Isong",
					price : 250000,
					description : "Per year",
					hostPhone : 2147483647,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				}, 
				{	
					src : "assets/images/homes/calabar/brick-country-home_925x.jpg",
					title : "Brick Country Home By MCC Road, Calabar", 
					address : "Plot 4 Esuene close, Ndidem Usang Isong",
					price : 170000,
					description : "Per year",
					hostPhone : 3937838392,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/calabar/bedroom-bed-with-brown-throw-pillows_925x.jpg",
					title : "Shared Apartment in Ikot Efa Road Off Old Parliamentary Calabar", 
					address : "Plot 20 Esuene close, Ndidem Usang Isong",
					price : 180000,
					description : "Per year",
					hostPhone : +2348093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/calabar/bedroom-end-table-with-dad-gift_925x.jpg",
					title : "Shared Apartment in Murtala Mohammed Highway",
					address : "51 Mariam Babangida avenue", 
					price : 190000,
					description : "Per year",
					hostPhone : 08093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/calabar/bedroom-side-table-light_925x.jpg",
					title : "Shared Apartment in Ekorinim Industrial Estate Off M/M Highway",
					address : "Plot 1 Ekorinim Industrial Estate", 
					price : 150000,
					description : "Per year",
					hostPhone : 3937838392,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/calabar/comfortable-living-room-cat_925x.jpg",
					title : "Shared Apartment 45th Street, State Housing Estate", 
					address : "Plot 21 State Housing Estate",
					price : 150000,
					description : "Per year",
					hostPhone : +2348093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/calabar/country-house_925x.jpg",
					title : "Shared Country Home in Northern Industrial Layout, Esuk Utan", 
					address : "Plot 21 Northern Industrial Layout, Esuk Utan",
					price : 150000,
					description : "Per year",
					hostPhone : 2147483647,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/calabar/cute-cat-photo_925x.jpg",
					title : "Shared Apartment in Abasi Obori Layout By System Metal (Off RCC Junction", 
					address : "Plot 21 Abasi Obori Layout By System Metal (Off RCC Junction",
					price : 200000,
					description : "Per year",
					hostPhone : +2338093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				}
				  
			]
		},
		{
			name : "Uyo", 
			thumbnail : "assets/images/landmarks/uyo_city1.jpg",
			photos : [
				{	
					src : "assets/images/homes/uyo/dinner-party_925x.jpg",
					title : "Shared Apartment in Shelter Afrique",
					address : "Plot 21 Shelter Afrique",
					price : 200000,
					description : "Per year",
					hostPhone : 92874738922,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/uyo/hotel-room-bed_925x.jpg",
					title : "Shared Apartment in Shelter Afrique", 
					address : "Plot 21 Abasi Obori Layout By System Metal (Off RCC Junction",
					price : 150000,
					description : "Per year",
					hostPhone : 92874738922,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/uyo/cat-on-sofa-near-window_925x.jpg",
					title : "Shared Apartment in Shelter Afrique", 
					address : "Plot 52 Shelter Afrique",
					price : 100000,
					description : "Per year",
					hostPhone : +2348093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/uyo/bright-hotel-room-bed_925x.jpg",
					title : "Shared Apartment in Ewet Housing Estate", 
					address : "Plot 21 Ewet Housing Estate",
					price : 150000,
					description : "Per year",
					hostPhone : 3937838392,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/uyo/a-home-filled-with-elaborate-gold-decor_925x.jpg",
					title : "Shared Apartment in Federal Housing Estate", 
					address : "Plot 21 Federal Housing Estate",
					price : 250000,
					description : "Per year",
					hostPhone : 2147483647,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/uyo/rainy-day-poolside_925x.jpg",
					title : "Shared Apartment in Wellington Bassey Road", 
					address : "20 Wellington Bassey Road",
					price : 200000,
					description : "Per year",
					hostPhone : +2338093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/uyo/soft-livingroom-sofa_925x.jpg",
					title : "Shared Apartment in Osongama Estate", 
					address : "20 Gloria Anana, Osongama Estate",
					price : 200000,
					description : "Per year",
					hostPhone : +2348093059833,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				},
				{	
					src : "assets/images/homes/uyo/red-and-yellow-daisies_925x.jpg",
					title : "Shared Apartment in Ewet Housing Estate", 
					address : "18 Ewet Housing Estate",
					price : 180000,
					description : "Per year",
					hostPhone : 3937838392,
					bedroom : 2,
					service : 'No',
					electricity : 'Shared Prepaid Meter',
					gen : 'Yes',
					kitchen : 'Shared',
					tv : 'Yes',
					wifi : 'No',
					unisex : 'Yes',
					bath : 'Self Contained',
					toilet : 'Self Contained'
				}
			]
		}

	]
};