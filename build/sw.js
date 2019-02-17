importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');
importScripts('assets/js/idb.js');



function createDB() {
  	var dbPromise = idb.open('booking-db', 1, function(upgradeDb) {
		console.log('Making a new object store');
		if (!upgradeDb.objectStoreNames.contains('booking_form_data')) {
		  var store = upgradeDb.createObjectStore('booking_form_data', {keyPath: 'id', autoIncrement: true});
		}

	});
}

self.addEventListener('activate', function(event) {
  event.waitUntil(
    createDB()
  );
});

self.addEventListener('message', function (event) {
  console.log('form data is', event.data)
  if (event.data.hasOwnProperty('formData')) {
    // receives form data from script.js upon submission
    formData = event.data.formData
  }
});


workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  new RegExp('.*\.html'),
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  new RegExp('.*\.css'),
  workbox.strategies.networkFirst()
);


workbox.precaching.precacheAndRoute([
  {
    "url": "app.yaml",
    "revision": "dce2d0174366baf2ff4988b789169a05"
  },
  {
    "url": "assets/css/about.css",
    "revision": "b562bdfd458c52d6dd43bd8674ea2f62"
  },
  {
    "url": "assets/css/bootstrap.css",
    "revision": "c17ae4f0529e0bc2fc887d2471ae124b"
  },
  {
    "url": "assets/css/bootstrap.min.css",
    "revision": "5057f321f0dc85cd8da94a0c5f67a8f4"
  },
  {
    "url": "assets/css/collections.css",
    "revision": "fa3e8bf6467e4ab8c08948c69270aa8e"
  },
  {
    "url": "assets/css/register_style.css",
    "revision": "a81c1b7b32052b9b06b3b8f32e4f2af5"
  },
  {
    "url": "assets/css/style.css",
    "revision": "b63e4e5dd53b30d5e20364b66658c21b"
  },
  {
    "url": "assets/fonts/Bellota-Bold.otf",
    "revision": "7c05e22a32c4c01a2efb7899d590e97a"
  },
  {
    "url": "assets/fonts/Bellota-BoldItalic.otf",
    "revision": "e3063f15eed3e1e115919d29b5a9520d"
  },
  {
    "url": "assets/fonts/Bellota-Italic.otf",
    "revision": "272827e64185d198ac8b7082f1338c19"
  },
  {
    "url": "assets/fonts/Bellota-Light.otf",
    "revision": "2946b86561eb615869084c133a52e82b"
  },
  {
    "url": "assets/fonts/Bellota-LightItalic.otf",
    "revision": "b2fc4f56a0920d69ab2b823c3e78880c"
  },
  {
    "url": "assets/fonts/Bellota-Regular.otf",
    "revision": "5520767c7419e677b1bdcac00ab0dd75"
  },
  {
    "url": "assets/fonts/SIL Open Font License.txt",
    "revision": "38b2a40055ad276915a84e7a8e83c51f"
  },
  {
    "url": "assets/images/homes/abuja/cozy-livingroom-with-window_925x.jpg",
    "revision": "a9ed4513240a83d1240955b47751b8e8"
  },
  {
    "url": "assets/images/homes/abuja/diy-organic-candle_925x.jpg",
    "revision": "a1eb6af2fc6b2859ccab53c9e848e0c2"
  },
  {
    "url": "assets/images/homes/abuja/gas-cooking-range-in-a-large-home-kitchen_925x.jpg",
    "revision": "110e2301b15943e1adeb7d6808a293f6"
  },
  {
    "url": "assets/images/homes/abuja/hotel-bed-with-bamboo-details_925x (1).jpg",
    "revision": "cef5abb29a9e30cf69bf9f4af411111b"
  },
  {
    "url": "assets/images/homes/abuja/large-grey-sofa-by-brick-wall_925x.jpg",
    "revision": "516d25e02e040f7775ac64afe3442991"
  },
  {
    "url": "assets/images/homes/abuja/livingroom-rainbows_925x.jpg",
    "revision": "235f61f9f7988991895e2d120598ccd7"
  },
  {
    "url": "assets/images/homes/abuja/loftstyle-bedroom-with-throw-pillows_925x.jpg",
    "revision": "2168bd78bc8e0d3caf911eb73c54e561"
  },
  {
    "url": "assets/images/homes/abuja/modern-updated-kitchen-interior-home_925x.jpg",
    "revision": "69ccc3889a0a121cf0a474c47c09a7fc"
  },
  {
    "url": "assets/images/homes/calabar/bedroom-bed-with-brown-throw-pillows_925x.jpg",
    "revision": "9b7cbecc92d9fd323638eda445e0c6a2"
  },
  {
    "url": "assets/images/homes/calabar/bedroom-end-table-with-dad-gift_925x.jpg",
    "revision": "c005b57e3e342b1dd2548f2da8443c8b"
  },
  {
    "url": "assets/images/homes/calabar/bedroom-side-table-light_925x.jpg",
    "revision": "a580ae7086665731fd80a4a5c5b3ebe6"
  },
  {
    "url": "assets/images/homes/calabar/brick-country-home_925x.jpg",
    "revision": "136342d38408adf0c37e592fed058708"
  },
  {
    "url": "assets/images/homes/calabar/bungalow-house-exterior_925x.jpg",
    "revision": "09063a155ce6fec7af2fc1d91af41743"
  },
  {
    "url": "assets/images/homes/calabar/casual-sitting-area-with-cactus_925x.jpg",
    "revision": "2d5a2cf3ab5beae5b038a61c2d930824"
  },
  {
    "url": "assets/images/homes/calabar/comfortable-living-room-cat_925x.jpg",
    "revision": "9e4c5644f0b8a861774c0c1fcb80fe71"
  },
  {
    "url": "assets/images/homes/calabar/country-house_925x.jpg",
    "revision": "9ea267e1c1296e03cafe1d53b4379ce9"
  },
  {
    "url": "assets/images/homes/calabar/cute-cat-photo_925x.jpg",
    "revision": "d39d3a0179cea1b24a9ad2984e4a8030"
  },
  {
    "url": "assets/images/homes/lagos/bathroom-shelving-mirror_925x.jpg",
    "revision": "50b826f72fcb3b16f26beaf3f4b65686"
  },
  {
    "url": "assets/images/homes/lagos/bed-bedside-table_925x.jpg",
    "revision": "94011a12618b1930b9426f9f9521e197"
  },
  {
    "url": "assets/images/homes/lagos/bedroom-with-heart-pillows_925x.jpg",
    "revision": "15aa7c6bcbc5adfad1bcf24c1c963071"
  },
  {
    "url": "assets/images/homes/lagos/books-on-sofa-in-sunbeam_925x.jpg",
    "revision": "419e07f737bac7d0c4c68d3e422ab3d7"
  },
  {
    "url": "assets/images/homes/lagos/cat-rests-in-bedroom_925x.jpg",
    "revision": "af9c52859dbccc4245c8610a66f40421"
  },
  {
    "url": "assets/images/homes/lagos/condominium-interior-livingroom_925x.jpg",
    "revision": "04409e645a464a54db1f83f2baf7f84f"
  },
  {
    "url": "assets/images/homes/lagos/home-tv-stand-shelves_925x.jpg",
    "revision": "f90e68106b8620443212191707cc12d7"
  },
  {
    "url": "assets/images/homes/lagos/hotel-bed-and-side-table_925x.jpg",
    "revision": "9dc9b8ca1d36c17d246a4984026b33a7"
  },
  {
    "url": "assets/images/homes/lagos/house-plant-in-white-pot_925x.jpg",
    "revision": "7353eded69f1cecfdd90e1f6b3edc9e5"
  },
  {
    "url": "assets/images/homes/lagos/laptop-in-modern-office_925x.jpg",
    "revision": "5b4973d22a44d5fd16c49fb5b5e71f61"
  },
  {
    "url": "assets/images/homes/lagos/man-controls-all-video-games_925x.jpg",
    "revision": "5b3bbf52c4a9068f79d1ce14bef81eb8"
  },
  {
    "url": "assets/images/homes/lagos/teak-headboard-table_925x.jpg",
    "revision": "a4c0ce5d618e6a08a56373a5d5ebec2e"
  },
  {
    "url": "assets/images/homes/lagos/yellow-couch-by-black-and-white-mural_925x.jpg",
    "revision": "7c41648e2441b4157a4e8d11d302052a"
  },
  {
    "url": "assets/images/homes/lagos/yellow-pillow-bedside-table_925x.jpg",
    "revision": "c6cc37ba796714c6a3d1ba01714b0a1e"
  },
  {
    "url": "assets/images/homes/uyo/a-home-filled-with-elaborate-gold-decor_925x.jpg",
    "revision": "19c17531c53992b1c341747175af4f03"
  },
  {
    "url": "assets/images/homes/uyo/bright-hotel-room-bed_925x.jpg",
    "revision": "11505970c498281614f3a8eb2e588819"
  },
  {
    "url": "assets/images/homes/uyo/cat-on-sofa-near-window_925x.jpg",
    "revision": "7ed358d6ef63c7d3bf849af3d6575065"
  },
  {
    "url": "assets/images/homes/uyo/dinner-party_925x.jpg",
    "revision": "4ad34c4c69a229a27438d4fa36a652b9"
  },
  {
    "url": "assets/images/homes/uyo/hotel-room-bed_925x.jpg",
    "revision": "dce657d3a788f6db42dc8f01b14a4172"
  },
  {
    "url": "assets/images/homes/uyo/laptop-in-modern-office_4460x4460.jpg",
    "revision": "794f939fcb0c0c129a55e1fd2dd67c88"
  },
  {
    "url": "assets/images/homes/uyo/living-room-brick-wall_925x.jpg",
    "revision": "4e59236f04284166bcbb9d94e242d850"
  },
  {
    "url": "assets/images/homes/uyo/loft-style-bedroom_925x.jpg",
    "revision": "094ecfda6a22b590fcf8aa7f8c4a31c4"
  },
  {
    "url": "assets/images/homes/uyo/natural-white-sofa-on-wood-frame_925x.jpg",
    "revision": "f489092324948e4998f6920e52ff30ba"
  },
  {
    "url": "assets/images/homes/uyo/rainy-day-poolside_925x.jpg",
    "revision": "f66175158eebfd7efcca863e1974dc04"
  },
  {
    "url": "assets/images/homes/uyo/red-and-yellow-daisies_925x.jpg",
    "revision": "b8b64f8111a9a0b2d356df62f0d3afe5"
  },
  {
    "url": "assets/images/homes/uyo/soft-livingroom-sofa_925x.jpg",
    "revision": "562cca59f21ace74697e0117d1ed3ad9"
  },
  {
    "url": "assets/images/icons/icon-128x128.png",
    "revision": "52a22072df0c6ecdab4e737f29a1a1ad"
  },
  {
    "url": "assets/images/icons/icon-144x144.png",
    "revision": "d5d890e6f05b1e487a5829d5270eb68c"
  },
  {
    "url": "assets/images/icons/icon-152x152.png",
    "revision": "a1e5f2933d0639edcad7c7b4923105a3"
  },
  {
    "url": "assets/images/icons/icon-192x192.png",
    "revision": "3014987885b36bd369ee7827e838ef2f"
  },
  {
    "url": "assets/images/icons/icon-384x384.png",
    "revision": "7cc2988a5c6b44f93e9c4fd8e3c03540"
  },
  {
    "url": "assets/images/icons/icon-512x512.png",
    "revision": "db5376f41a32c535ca07839d1b881523"
  },
  {
    "url": "assets/images/icons/icon-72x72.png",
    "revision": "a0364e974e28351080a15e4fa5896842"
  },
  {
    "url": "assets/images/icons/icon-96x96.png",
    "revision": "1181b71403d37c2fb4d32b62d62ad3fc"
  },
  {
    "url": "assets/images/IMG-20171108-WA0051.jpg",
    "revision": "d36deb412b04cdd55844bd3d92e345f1"
  },
  {
    "url": "assets/images/landmarks/abuja_city1.jpg",
    "revision": "d5673b70deaf05e13445668c00c2529c"
  },
  {
    "url": "assets/images/landmarks/crossriver_city1.jpg",
    "revision": "47106c569c77538b035c78c3925e9877"
  },
  {
    "url": "assets/images/landmarks/lagos_city1.jpg",
    "revision": "bfe9c59950dcb106b056caa9ee955d06"
  },
  {
    "url": "assets/images/landmarks/owerri_city1.jpg",
    "revision": "e1360777a1af9d57fea9b173f7e6ec51"
  },
  {
    "url": "assets/images/landmarks/port-harcourt_city1.jpg",
    "revision": "571fdf1167c8672235db9ab091b02ac6"
  },
  {
    "url": "assets/images/landmarks/uyo_city1.jpg",
    "revision": "e7eb4b70e968125fca88233c5a1cc63b"
  },
  {
    "url": "assets/images/LogoMakr_2vw9g6.png",
    "revision": "5acb4fd65f45904b71a8b7c66948337f"
  },
  {
    "url": "assets/images/LogoMakr_3X8Dfe.png",
    "revision": "6555c5d078ffe22130f67982d4f49482"
  },
  {
    "url": "assets/images/LogoMakr_7pay1X.png",
    "revision": "09a3628008805db0c44c18e9e9ec6422"
  },
  {
    "url": "assets/images/LogoMakr_9X4bSd.png",
    "revision": "803eb0cd3bce364587cda8169e03f256"
  },
  {
    "url": "assets/images/three-friends-working-on-couch_925x.jpg",
    "revision": "a7866e6816a1532a7591e5e2d8769065"
  },
  {
    "url": "assets/js/bootstrap.min.js",
    "revision": "e7d9a06cf9053c51cd4ad3386da0659a"
  },
  {
    "url": "assets/js/collections.js",
    "revision": "8ffc6102aad4c1e9b3769b877bbca52e"
  },
  {
    "url": "assets/js/gallery.js",
    "revision": "853be88eaea3c8198823d791b8a3f360"
  },
  {
    "url": "assets/js/handlebars-v3.0.3.js",
    "revision": "baf8e33c73b515a6d285ae5e552d8b30"
  },
  {
    "url": "assets/js/idb.js",
    "revision": "c06c5349be2a5370c8ff50145d5fc269"
  },
  {
    "url": "assets/js/jquery-3.3.1.min.js",
    "revision": "378087a64e1394fc51f300bb9c11878c"
  },
  {
    "url": "assets/js/register.js",
    "revision": "0fb3a5058cc845673033ce34d7964672"
  },
  {
    "url": "index.html",
    "revision": "cad36adaf654dd68a375834e885a14ee"
  },
  {
    "url": "manifest.json",
    "revision": "bac0e294a590b3d6c9692e793923f101"
  }
]);

