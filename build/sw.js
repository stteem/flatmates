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
    "revision": "a7a0e2cd206fd5d395f98882fa87b1eb"
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
    "url": "assets/images/animals-2739386_1280.jpg",
    "revision": "982ec78e0cbf47b124ee935688688f10"
  },
  {
    "url": "assets/images/favicon.png",
    "revision": "891501620e30acc04ce875ea0595cadc"
  },
  {
    "url": "assets/images/homes/a-home-filled-with-elaborate-gold-decor_925x.jpg",
    "revision": "19c17531c53992b1c341747175af4f03"
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
    "url": "assets/images/homes/american-flag-on-beach-cottage_925x.jpg",
    "revision": "576308eef9dcf297618af45d7671b3d8"
  },
  {
    "url": "assets/images/homes/babys-room_925x.jpg",
    "revision": "65431215379ca281b28e22f16701e715"
  },
  {
    "url": "assets/images/homes/book-flowers-glasses-flatlay_925x.jpg",
    "revision": "3aa4a0159ab3aa62792848d56f21a86f"
  },
  {
    "url": "assets/images/homes/brick-home-with-columns_925x.jpg",
    "revision": "b712e7e81e97a220f74ff55348d98737"
  },
  {
    "url": "assets/images/homes/bright-hotel-room-bed_925x.jpg",
    "revision": "11505970c498281614f3a8eb2e588819"
  },
  {
    "url": "assets/images/homes/cat-on-sofa-near-window_925x.jpg",
    "revision": "7ed358d6ef63c7d3bf849af3d6575065"
  },
  {
    "url": "assets/images/homes/colorful-heritage-homes_925x.jpg",
    "revision": "a55fcb0f98c7435e76800fa245c33c5a"
  },
  {
    "url": "assets/images/homes/cozy-livingroom-with-window_925x.jpg",
    "revision": "a9ed4513240a83d1240955b47751b8e8"
  },
  {
    "url": "assets/images/homes/cozy-spot-with-painted-designs-on-wall_925x.jpg",
    "revision": "7e2a9989d7c387346211e956c05acce1"
  },
  {
    "url": "assets/images/homes/fishing-boat-in-thailand_925x.jpg",
    "revision": "da5c406301f20ab9f3fcd5ebd35d8f90"
  },
  {
    "url": "assets/images/homes/gated-house-exterior_925x.jpg",
    "revision": "c692d53756a154d43920eecd4c9f4d3c"
  },
  {
    "url": "assets/images/homes/happy-woman-looking-out-woman-from-highrise-office_925x.jpg",
    "revision": "1670e9bc54a774bda0c85854a012032e"
  },
  {
    "url": "assets/images/homes/high-end-country-home-on-hillside_925x.jpg",
    "revision": "9a5abfe876dd4a10c9c7bc939019b8b9"
  },
  {
    "url": "assets/images/homes/historical-home-property-georgia_925x.jpg",
    "revision": "af4f934b2b118cc71d6676037b80df03"
  },
  {
    "url": "assets/images/homes/hotel-room-bed_925x.jpg",
    "revision": "dce657d3a788f6db42dc8f01b14a4172"
  },
  {
    "url": "assets/images/homes/house-exterior-in-tropics_925x.jpg",
    "revision": "2035c28412616da843e86cba92ce826c"
  },
  {
    "url": "assets/images/homes/house-in-trees_925x.jpg",
    "revision": "7e0162cc6820619be9b2022705228d4f"
  },
  {
    "url": "assets/images/homes/house-on-tropical-rock_925x.jpg",
    "revision": "f76c34571751f8ab32c68fc48afbfa99"
  },
  {
    "url": "assets/images/homes/house-with-garage_925x.jpg",
    "revision": "92581bbc54fa266fbb0ec3e54032c0a2"
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
    "url": "assets/images/homes/laptop-in-modern-office_4460x4460.jpg",
    "revision": "794f939fcb0c0c129a55e1fd2dd67c88"
  },
  {
    "url": "assets/images/homes/living-room-brick-wall_925x.jpg",
    "revision": "4e59236f04284166bcbb9d94e242d850"
  },
  {
    "url": "assets/images/homes/loft-style-bedroom_925x.jpg",
    "revision": "094ecfda6a22b590fcf8aa7f8c4a31c4"
  },
  {
    "url": "assets/images/homes/misty-mountains-with-buildings_925x.jpg",
    "revision": "332689d5c84e1f51e60ec39e40426ae6"
  },
  {
    "url": "assets/images/homes/modern-housing-with-blue-sky_925x.jpg",
    "revision": "c0944a3504aea92c167004b0c7b4cce1"
  },
  {
    "url": "assets/images/homes/natural-white-sofa-on-wood-frame_925x.jpg",
    "revision": "f489092324948e4998f6920e52ff30ba"
  },
  {
    "url": "assets/images/homes/Newyork/bedroom-bed-with-brown-throw-pillows_925x.jpg",
    "revision": "9b7cbecc92d9fd323638eda445e0c6a2"
  },
  {
    "url": "assets/images/homes/Newyork/bedroom-end-table-with-dad-gift_925x.jpg",
    "revision": "c005b57e3e342b1dd2548f2da8443c8b"
  },
  {
    "url": "assets/images/homes/Newyork/bedroom-side-table-light_925x.jpg",
    "revision": "a580ae7086665731fd80a4a5c5b3ebe6"
  },
  {
    "url": "assets/images/homes/Newyork/brick-country-home_925x.jpg",
    "revision": "136342d38408adf0c37e592fed058708"
  },
  {
    "url": "assets/images/homes/Newyork/bungalow-house-exterior_925x.jpg",
    "revision": "09063a155ce6fec7af2fc1d91af41743"
  },
  {
    "url": "assets/images/homes/Newyork/casual-sitting-area-with-cactus_925x.jpg",
    "revision": "2d5a2cf3ab5beae5b038a61c2d930824"
  },
  {
    "url": "assets/images/homes/Newyork/comfortable-living-room-cat_925x.jpg",
    "revision": "9e4c5644f0b8a861774c0c1fcb80fe71"
  },
  {
    "url": "assets/images/homes/Newyork/country-house_925x.jpg",
    "revision": "9ea267e1c1296e03cafe1d53b4379ce9"
  },
  {
    "url": "assets/images/homes/Newyork/cute-cat-photo_925x.jpg",
    "revision": "d39d3a0179cea1b24a9ad2984e4a8030"
  },
  {
    "url": "assets/images/homes/one-storey-home-exterior_925x.jpg",
    "revision": "11e834ab26ea68052b1a3172095da4ec"
  },
  {
    "url": "assets/images/homes/paris/dinner-party_925x.jpg",
    "revision": "4ad34c4c69a229a27438d4fa36a652b9"
  },
  {
    "url": "assets/images/homes/rainy-day-poolside_925x.jpg",
    "revision": "f66175158eebfd7efcca863e1974dc04"
  },
  {
    "url": "assets/images/homes/red-and-yellow-daisies_925x.jpg",
    "revision": "b8b64f8111a9a0b2d356df62f0d3afe5"
  },
  {
    "url": "assets/images/homes/row-of-city-houses_925x.jpg",
    "revision": "c4445b89d5ca75bbefb75ff89076a6fc"
  },
  {
    "url": "assets/images/homes/row-of-colorful-buildings-on-a-sunny-day_925x.jpg",
    "revision": "c2d26b836b101b9fc9029d2f4c321824"
  },
  {
    "url": "assets/images/homes/san-francisco-apartments_925x.jpg",
    "revision": "f3636b94c4dfb455f3a64066800e6fa9"
  },
  {
    "url": "assets/images/homes/soft-livingroom-sofa_925x.jpg",
    "revision": "562cca59f21ace74697e0117d1ed3ad9"
  },
  {
    "url": "assets/images/homes/stone-alley_925x.jpg",
    "revision": "f12adab6a3123985de47cedfaa5da064"
  },
  {
    "url": "assets/images/homes/suburban-house_925x.jpg",
    "revision": "21c1712c032d700a2db7f85f59d14812"
  },
  {
    "url": "assets/images/homes/urban-alley-china_925x.jpg",
    "revision": "3c048b084beab3f95931a3dc9bafd2cc"
  },
  {
    "url": "assets/images/homes/view-of-lisbon-hillside_925x.jpg",
    "revision": "f07896294ce6957ca24f6223d1519a24"
  },
  {
    "url": "assets/images/homes/view-of-village-below-mountains_925x.jpg",
    "revision": "1bd253a285dca41759e720301be0527e"
  },
  {
    "url": "assets/images/homes/vines-take-over-brick-home_925x.jpg",
    "revision": "b0d458862093db7ccef3905a8e236b10"
  },
  {
    "url": "assets/images/homes/white-house-on-the-edge-of-a-cliff_925x.jpg",
    "revision": "eeab1c0aec830322c509653171f9a120"
  },
  {
    "url": "assets/images/homes/window-light-through-office-window_925x.jpg",
    "revision": "79aacc95239bc9a7d4133f79f61cda85"
  },
  {
    "url": "assets/images/homes/woman-on-bed-in-candle-light_925x.jpg",
    "revision": "4631c36cbac952f50718b97be25cfd49"
  },
  {
    "url": "assets/images/homes/woman-on-bed-looking-away_925x.jpg",
    "revision": "527872a119d1ce5ba995ca5d375f558b"
  },
  {
    "url": "assets/images/homes/yellow-door-on-brick-home_925x.jpg",
    "revision": "46c9a82bb336117a4055971bf56cec74"
  },
  {
    "url": "assets/images/hotel-bed-and-side-table_4460x4460.jpg",
    "revision": "23eafa6645367d4a01cc7c4e382fe2d1"
  },
  {
    "url": "assets/images/icons/icon-128x128.png",
    "revision": "7a024ac5a2dfa457e12fbcd4e4a1bca0"
  },
  {
    "url": "assets/images/icons/icon-144x144.png",
    "revision": "298645d8e5c9eaa062ba6bbcb9784bf4"
  },
  {
    "url": "assets/images/icons/icon-152x152.png",
    "revision": "d20dd1d5b76afaa17f58d22c29ded020"
  },
  {
    "url": "assets/images/icons/icon-192x192.png",
    "revision": "c0c9cf191b9b0f92eb063f22fa0f0489"
  },
  {
    "url": "assets/images/icons/icon-384x384.png",
    "revision": "6c74e1f479387fbc41efa4a5d646b449"
  },
  {
    "url": "assets/images/icons/icon-512x512.png",
    "revision": "53001dbd1479efabbc74053f68ac9696"
  },
  {
    "url": "assets/images/icons/icon-72x72.png",
    "revision": "f0fc44cc560ec5be492adcb4393444e4"
  },
  {
    "url": "assets/images/icons/icon-96x96.png",
    "revision": "457e12b2b2f74dc6defc7e46d258e934"
  },
  {
    "url": "assets/images/IMG-20171108-WA0051.jpg",
    "revision": "d36deb412b04cdd55844bd3d92e345f1"
  },
  {
    "url": "assets/images/kitchen-2165756_1280.jpg",
    "revision": "5ec72e7fa6de998206f0215a6e1f8cd4"
  },
  {
    "url": "assets/images/landmarks/Abuja22.jpg",
    "revision": "a7f71dabc6017a99e5858ca8fd1da080"
  },
  {
    "url": "assets/images/landmarks/Abuja8.jpg",
    "revision": "15683d4bc4b64e343ed0d9e2b443cf84"
  },
  {
    "url": "assets/images/landmarks/amsterdam-1150319_640.jpg",
    "revision": "68983f4adc36ad536c60361d2baae8eb"
  },
  {
    "url": "assets/images/landmarks/architecture-3212248_640.jpg",
    "revision": "dc9c2abce5a1e4aca5ececc230deaffb"
  },
  {
    "url": "assets/images/landmarks/auckland-2144137_640.jpg",
    "revision": "b08104e3d5f4f29d68bccab81aa893a0"
  },
  {
    "url": "assets/images/landmarks/aukland-94142_640.jpg",
    "revision": "5695240fcf807c1c3cbb878a61b23434"
  },
  {
    "url": "assets/images/landmarks/big-ben-clock_925x.jpg",
    "revision": "b33697bfec5550d6adcb6d0a1c457894"
  },
  {
    "url": "assets/images/landmarks/bridge-944904_640.jpg",
    "revision": "4c7417e18792d2243021734f7cd84207"
  },
  {
    "url": "assets/images/landmarks/british-phonebooth_925x.jpg",
    "revision": "fa0c8e6580d67bce0174611572aa9487"
  },
  {
    "url": "assets/images/landmarks/brooklyn-bridge-with-flag_925x.jpg",
    "revision": "1584d166c3d5e2867f447c9814275b58"
  },
  {
    "url": "assets/images/landmarks/eiffel-tower-803488_640.jpg",
    "revision": "15e7f4baa2ed3229a4a8b75b2a1227cb"
  },
  {
    "url": "assets/images/landmarks/independence-square-2419577_640.jpg",
    "revision": "443e57c772ddd0754c0fbe08655a288e"
  },
  {
    "url": "assets/images/landmarks/lagos27.jpg",
    "revision": "8d72c375ef5cdb74bef832f9e182c55b"
  },
  {
    "url": "assets/images/landmarks/Lagos4.jpg",
    "revision": "74f82fd161ca1c5bafa75405191a9666"
  },
  {
    "url": "assets/images/landmarks/Lagos6.jpg",
    "revision": "3e78993ef8181b460b9550e50dbd2d1a"
  },
  {
    "url": "assets/images/landmarks/london-bridge-over-thames_925x.jpg",
    "revision": "e3f67e30faa5deac3b38fe66e5e0b64e"
  },
  {
    "url": "assets/images/landmarks/london-bus-1464576_640.jpg",
    "revision": "20c522e58b46f2517ec9e244d6f172b3"
  },
  {
    "url": "assets/images/landmarks/london-double-decker-bus_925x.jpg",
    "revision": "11de81ac2037435ffcc7578aa8622678"
  },
  {
    "url": "assets/images/landmarks/NationalMosqueAbuja.jpg",
    "revision": "78837c8d57231063e5bfeb9ee478eee9"
  },
  {
    "url": "assets/images/landmarks/paris-2534660_640.jpg",
    "revision": "8e78b8839d50c2ba48b5ccbd84d16599"
  },
  {
    "url": "assets/images/landmarks/paris-eifeel-tower_925x.jpg",
    "revision": "82020c5044ae4c7a099d3bc073e9f236"
  },
  {
    "url": "assets/images/landmarks/queen-of-liberty-202218_640.jpg",
    "revision": "d3b9a17d9647698d8c355a5c65a0e361"
  },
  {
    "url": "assets/images/landmarks/queen-street-west_925x.jpg",
    "revision": "6b158af629f2fbd8f118ab89594cb219"
  },
  {
    "url": "assets/images/landmarks/sidney-342584_640.jpg",
    "revision": "48a07dde2f23ee70e41a8410a79bdc0e"
  },
  {
    "url": "assets/images/landmarks/sydney-3184441_640.jpg",
    "revision": "66374d6e87c7fa60f32726e88b84f9aa"
  },
  {
    "url": "assets/images/landmarks/toronto-city-hall-sign_925x.jpg",
    "revision": "105829c5d0e92eaa98fa800c5b7b6855"
  },
  {
    "url": "assets/images/landmarks/towers-of-london-bridge_925x.jpg",
    "revision": "04b8177c43730dd70e1549e9c95a521a"
  },
  {
    "url": "assets/images/landmarks/xAso-rock.JPG.pagespeed.ic.AIsMybrL7k.jpg",
    "revision": "008b0cc9bacbee4c932e62307ba95b28"
  },
  {
    "url": "assets/images/living-room-2732939_1280.jpg",
    "revision": "a4e4daea26eb7830cf4046927d614efb"
  },
  {
    "url": "assets/images/living-room-2732939_640.jpg",
    "revision": "ff10c486e747ed7e1ab6da1191bc1e2c"
  },
  {
    "url": "assets/images/loft-style-bedroom_925x.jpg",
    "revision": "094ecfda6a22b590fcf8aa7f8c4a31c4"
  },
  {
    "url": "assets/images/LogoMakr_2vw9g6.png",
    "revision": "5acb4fd65f45904b71a8b7c66948337f"
  },
  {
    "url": "assets/images/LogoMakr_8aqNnQ.png",
    "revision": "12b0a00ba1a1c7ed8ba4f75c7f0ac651"
  },
  {
    "url": "assets/images/LogoMakr_9X4bSd.png",
    "revision": "803eb0cd3bce364587cda8169e03f256"
  },
  {
    "url": "assets/images/room-1336497_1280.jpg",
    "revision": "e5d62cb6a217ac266f4e6ca5de044bf1"
  },
  {
    "url": "assets/images/room-1336497_640.jpg",
    "revision": "2153cf36d656df2944978d58042537a3"
  },
  {
    "url": "assets/images/three-friends-working-on-couch_925x.jpg",
    "revision": "a7866e6816a1532a7591e5e2d8769065"
  },
  {
    "url": "assets/images/town-2430571_1280.jpg",
    "revision": "53e77c97a33f77a9e5742c8c7246baa4"
  },
  {
    "url": "assets/images/woman-3190829_1280.jpg",
    "revision": "a238af53be619c725ccdc4ca67b9536c"
  },
  {
    "url": "assets/js/bootstrap.min.js",
    "revision": "e7d9a06cf9053c51cd4ad3386da0659a"
  },
  {
    "url": "assets/js/collections.js",
    "revision": "653b0a60586e4a242308b8a0dd752c17"
  },
  {
    "url": "assets/js/gallery.js",
    "revision": "2296f155fc27e4df90e9222f00ef6e87"
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
    "revision": "ef6ae5bb401a3749818a94053815ab66"
  },
  {
    "url": "manifest.json",
    "revision": "6bf49629a100a7bdfd322b7ed5576c05"
  }
]);

