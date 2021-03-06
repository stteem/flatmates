//importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
//importScripts('assets/js/idb.js');
/*importScripts('assets/js/workbox-v4.3.1/workbox-sw.js');


workbox.setConfig({
  modulePathPrefix: 'assets/js/workbox-v4.3.1/'
});*/


//function createDB() {
  	/*var dbPromise = idb.open('booking_form', 2, function(upgradeDb) {
  		console.log('Making a new object store');
  		if (!upgradeDb.objectStoreNames.contains('booking_form_data')) {
  		  var store = upgradeDb.createObjectStore('booking_form_data', {autoIncrement:true});
  		}
    });
//}

self.addEventListener('activate', function(event) {
  event.waitUntil(
    dbPromise
  );
});*/


/*self.addEventListener('install', function(event) {
  self.skipWaiting();
});*/


workbox.routing.registerRoute(
  new RegExp('.*\.php'),
  new workbox.strategies.NetworkFirst(function() {
    console.log('get php fired')
  })
);



/*const title = 'Flatmates Africa';
const options = {
  body: 'You are back online and your post was successfully sent!',
  icon: '/build/assets/images/icons-transparent/icon-72x72.png'
};

const displayNotification = () => {
  // Otherwise, we need to ask the user for permission
  if (Notification.permission !== "denied") {
    alert("You must allow notifications to enable the complete user experience of this app");
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        navigator.serviceWorker.getRegistration()
        .then(reg => {
          reg.showNotification(title, options);
        });
      }
    });
  } 
};*/

self.addEventListener('sync', function (event) {
  if (event.tag === 'booking_form_data') {
    Notification.requestPermission().then(permission => {
      console.log('Notification status ',permission)
      if(permission === "granted") {
            navigator.serviceWorker.getRegistration()
            .then(reg => {
              reg.showNotification(titless, options);
            });
        }
    })
  }
});

var queue = new workbox.backgroundSync.Queue('booking_form_data');
var myPlugin = {

  requestWillFetch: async ({request}) => {
    // Return `request` or a different Request
    console.log('this is request', request)
    return request;      
  },
  fetchDidFail: async ({originalRequest, request, error, event}) => {
    console.error('Replay failed for request', event.request, error);
   
    // Put the entry back in the queue and re-throw the error:
    await queue.unshiftRequest({request: event.request});
    //throw error
     var clientId = Client.id;
      // Exit early if we don't have access to the client.
      // Eg, if it's cross-origin.
      if (!event.clientId) return;

      // Get the client.
      const client = await Clients.get(event.clientId);
      // Exit early if we don't get the client.
      // Eg, if it closed.
      if (!client) return;

      // Send a message to the client.
      client.postMessage({
        msg: "Hey I just got a fetch from you!",
        url: event.request.referrer
      });      
  },
  fetchDidSucceed: async ({request, response}) => {
    // Return `response` to use the network response as-is,
    // or alternatively create and return a new Response object.
    return response;
  },
  onSync: async (queue) => {
    try {
      await queue.replayRequests();
       var clientId = Client.id;
      // Exit early if we don't have access to the client.
      // Eg, if it's cross-origin.
      if (!event.clientId) return;

      // Get the client.
      const client = await Clients.get(event.clientId);
      // Exit early if we don't get the client.
      // Eg, if it closed.
      if (!client) return;

      // Send a message to the client.
      client.postMessage({
        msg: "Hey I just got a fetch from you!",
        url: event.request.referrer
      });      
      // The replay was successful! Notification logic can go here.
      console.log('Replay complete!');
    } catch (error) {
      // The replay failed...
      console.log(error);
    } finally {
      console.log('Replay complete!');
      
    }
  }
}; 


/*const bgSyncPlugin = new workbox.backgroundSync.Plugin('booking_form_data', {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours
});*/

workbox.routing.registerRoute(
  new RegExp('.*\.index.php'),
  new workbox.strategies.NetworkOnly({
    plugins: [myPlugin]
  }),
  'POST'
);

//for cross origin requests
/*workbox.routing.registerRoute(
  new RegExp("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js"),
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  new RegExp("https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"),
  workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
  new RegExp("https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css"),
  workbox.strategies.networkFirst()
);*/

//for same origin requests
workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('.*\.html'),
  new workbox.strategies.CacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('.*\.css'),
  new workbox.strategies.CacheFirst()
);




workbox.precaching.precacheAndRoute([
  {
    "url": "app.yaml",
    "revision": "1a7edc0bb413b2824deb8e7949a37fce"
  },
  {
    "url": "assets/css/about.css",
    "revision": "80185b8c096d51d793c8d718c029884f"
  },
  {
    "url": "assets/css/bootstrap.css",
    "revision": "e3ecb1f64761daccef059bfc56f5abab"
  },
  {
    "url": "assets/css/bootstrap.min.css",
    "revision": "5057f321f0dc85cd8da94a0c5f67a8f4"
  },
  {
    "url": "assets/css/collections.css",
    "revision": "fefc9c33608675b30c885d8a2fa6ec1b"
  },
  {
    "url": "assets/css/register_style.css",
    "revision": "beefc4b082cc3f14791d14dd67c907f8"
  },
  {
    "url": "assets/css/style.css",
    "revision": "18cec1b4654fb1fd4a63277bc5e3e597"
  },
  {
    "url": "assets/fontawesome-free/css/all.css",
    "revision": "a207426366c2b281571ec581ca8acc62"
  },
  {
    "url": "assets/fontawesome-free/css/all.min.css",
    "revision": "10519cfd3206802f58315b877a9beab5"
  },
  {
    "url": "assets/fontawesome-free/css/brands.css",
    "revision": "50ae18beebd796d9b9082b9209918456"
  },
  {
    "url": "assets/fontawesome-free/css/brands.min.css",
    "revision": "38762c06ee069170da13ffb98351ef29"
  },
  {
    "url": "assets/fontawesome-free/css/fontawesome.css",
    "revision": "73cad59eb2860b3c468d5c3449b68dc5"
  },
  {
    "url": "assets/fontawesome-free/css/fontawesome.min.css",
    "revision": "990d1b83f594d7989624157b607e31ff"
  },
  {
    "url": "assets/fontawesome-free/css/regular.css",
    "revision": "c1dabf43b35754bfcd8cb8e573d97451"
  },
  {
    "url": "assets/fontawesome-free/css/regular.min.css",
    "revision": "0b52012237ecad2b82bbd8aea374b231"
  },
  {
    "url": "assets/fontawesome-free/css/solid.css",
    "revision": "f3ec1cd710f7f243ba42b55ffea5e6b0"
  },
  {
    "url": "assets/fontawesome-free/css/solid.min.css",
    "revision": "7b33067702cdc57fc1ce64bbcbaae492"
  },
  {
    "url": "assets/fontawesome-free/css/svg-with-js.css",
    "revision": "23c782c1fb927e632f74e293fc655968"
  },
  {
    "url": "assets/fontawesome-free/css/svg-with-js.min.css",
    "revision": "7b88c59c03106d736b4206c6ceafcf06"
  },
  {
    "url": "assets/fontawesome-free/css/v4-shims.css",
    "revision": "fe0f09381a1440722b64ac99c67e6809"
  },
  {
    "url": "assets/fontawesome-free/css/v4-shims.min.css",
    "revision": "25b2445e0c1838b110583405b3ec0177"
  },
  {
    "url": "assets/fontawesome-free/js/all.js",
    "revision": "a4b28c53f67b8e03ec3df1b4621febba"
  },
  {
    "url": "assets/fontawesome-free/js/all.min.js",
    "revision": "d0482db440697a659af4980d2e841891"
  },
  {
    "url": "assets/fontawesome-free/js/brands.js",
    "revision": "1a11bd6f2ba52b1a64917befd17cad9c"
  },
  {
    "url": "assets/fontawesome-free/js/brands.min.js",
    "revision": "db2c756dffd7a2ebd478d717d57f71f3"
  },
  {
    "url": "assets/fontawesome-free/js/fontawesome.js",
    "revision": "50af86747d568bafc71abdf45fcc6431"
  },
  {
    "url": "assets/fontawesome-free/js/fontawesome.min.js",
    "revision": "f2a6f85df075827ab70407f852cc4655"
  },
  {
    "url": "assets/fontawesome-free/js/regular.js",
    "revision": "aa19256d0b1a3ff10ade60fac1ab2f0b"
  },
  {
    "url": "assets/fontawesome-free/js/regular.min.js",
    "revision": "79cd9e30b4b211801e41beb79bc6a286"
  },
  {
    "url": "assets/fontawesome-free/js/solid.js",
    "revision": "868fdcf9c37b821a0edf28a7de13958c"
  },
  {
    "url": "assets/fontawesome-free/js/solid.min.js",
    "revision": "53b10f67bd9ae19de0f16e29c851c622"
  },
  {
    "url": "assets/fontawesome-free/js/v4-shims.js",
    "revision": "f9e2e19cffd1a01e870624f8c111277b"
  },
  {
    "url": "assets/fontawesome-free/js/v4-shims.min.js",
    "revision": "ee849cdefc4ea73142659f04402a1a99"
  },
  {
    "url": "assets/fontawesome-free/LICENSE.txt",
    "revision": "a26077e534d7a5b2bbf9c0fa32aad750"
  },
  {
    "url": "assets/fontawesome-free/package.json",
    "revision": "574684453195a0b792276a3d42b7ddc4"
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
    "url": "assets/images/icons-transparent/icon-128x128.png",
    "revision": "9a583b054432865c2241fbc843450a98"
  },
  {
    "url": "assets/images/icons-transparent/icon-144x144.png",
    "revision": "28cf0037cf7ffcbb4c84a0929c88451d"
  },
  {
    "url": "assets/images/icons-transparent/icon-152x152.png",
    "revision": "8e9c84a20bf56c51b6788498f85fdaa6"
  },
  {
    "url": "assets/images/icons-transparent/icon-192x192.png",
    "revision": "46fc5bc39a2fbd778549fdc042563fd8"
  },
  {
    "url": "assets/images/icons-transparent/icon-384x384.png",
    "revision": "add1ed2ce942f1aa40d42f2a32031d21"
  },
  {
    "url": "assets/images/icons-transparent/icon-512x512.png",
    "revision": "f6d7ad3e893fcafefcf61e8ffb021998"
  },
  {
    "url": "assets/images/icons-transparent/icon-72x72.png",
    "revision": "234195714f465be0a783e74af7983f40"
  },
  {
    "url": "assets/images/icons-transparent/icon-96x96.png",
    "revision": "42c87bfda725600e89de4ad2ff4acb28"
  },
  {
    "url": "assets/images/icons-w-background/icon-128x128.png",
    "revision": "ac3ed8c00685c06152753011366d49c9"
  },
  {
    "url": "assets/images/icons-w-background/icon-144x144.png",
    "revision": "35692684cecd6fe4f6915368501f0892"
  },
  {
    "url": "assets/images/icons-w-background/icon-152x152.png",
    "revision": "578cacf491c274927676b8bbdcfbaffb"
  },
  {
    "url": "assets/images/icons-w-background/icon-192x192.png",
    "revision": "1c6bc0981ef7e5d467c2e23a9a14164a"
  },
  {
    "url": "assets/images/icons-w-background/icon-384x384.png",
    "revision": "7264ced32884cac3066ad9588a7e453a"
  },
  {
    "url": "assets/images/icons-w-background/icon-512x512.png",
    "revision": "c5f0d57a5efdacf9476e32f663f466ef"
  },
  {
    "url": "assets/images/icons-w-background/icon-72x72.png",
    "revision": "25ea1fbb70e1ea39c5232c999a0d5aa3"
  },
  {
    "url": "assets/images/icons-w-background/icon-96x96.png",
    "revision": "99801a208214a508350259ebc37a3553"
  },
  {
    "url": "assets/images/icons-white/icon-128x128.png",
    "revision": "330af941751a5227ddb74d80f098a707"
  },
  {
    "url": "assets/images/icons-white/icon-144x144.png",
    "revision": "d6a2555b6f61336d1778ed6983c7b1fb"
  },
  {
    "url": "assets/images/icons-white/icon-152x152.png",
    "revision": "e2daa0f902f6613e87696b50ee2c421b"
  },
  {
    "url": "assets/images/icons-white/icon-192x192.png",
    "revision": "7f89cd9d8f6ba964ffe34dd51f35e90f"
  },
  {
    "url": "assets/images/icons-white/icon-384x384.png",
    "revision": "177d23dbf75649d04c340a1c640110e1"
  },
  {
    "url": "assets/images/icons-white/icon-512x512.png",
    "revision": "3522967fdf2f7775586b1bde3257ec2b"
  },
  {
    "url": "assets/images/icons-white/icon-72x72.png",
    "revision": "c89c71e4f96545b2c77b375dce89eb3b"
  },
  {
    "url": "assets/images/icons-white/icon-96x96.png",
    "revision": "208f7f61de362adf09cd1f55a2eb0b03"
  },
  {
    "url": "assets/images/icons/icon-128x128.png",
    "revision": "330af941751a5227ddb74d80f098a707"
  },
  {
    "url": "assets/images/icons/icon-144x144.png",
    "revision": "d6a2555b6f61336d1778ed6983c7b1fb"
  },
  {
    "url": "assets/images/icons/icon-152x152.png",
    "revision": "e2daa0f902f6613e87696b50ee2c421b"
  },
  {
    "url": "assets/images/icons/icon-192x192.png",
    "revision": "7f89cd9d8f6ba964ffe34dd51f35e90f"
  },
  {
    "url": "assets/images/icons/icon-384x384.png",
    "revision": "177d23dbf75649d04c340a1c640110e1"
  },
  {
    "url": "assets/images/icons/icon-512x512.png",
    "revision": "3522967fdf2f7775586b1bde3257ec2b"
  },
  {
    "url": "assets/images/icons/icon-72x72.png",
    "revision": "234195714f465be0a783e74af7983f40"
  },
  {
    "url": "assets/images/icons/icon-96x96.png",
    "revision": "42c87bfda725600e89de4ad2ff4acb28"
  },
  {
    "url": "assets/images/icons/icon-a96x96.png",
    "revision": "42c87bfda725600e89de4ad2ff4acb28"
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
    "url": "assets/images/landmarks/DJuAuvEU8AAG2XF.jpg",
    "revision": "b3aaadb75e44a6af6585d4220fec9626"
  },
  {
    "url": "assets/images/landmarks/lagos_city1.jpg",
    "revision": "bfe9c59950dcb106b056caa9ee955d06"
  },
  {
    "url": "assets/images/landmarks/LogoMakr_5sl3LX.png",
    "revision": "ac5b5962a9a1781055a212c708199d0d"
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
    "url": "assets/images/LogoMakr_20b7CE.png",
    "revision": "a953a8ab7de16ae626fb92ca131a32fa"
  },
  {
    "url": "assets/images/LogoMakr_2GCt8t.png",
    "revision": "ec5b8b57212281c336e38ccb12321c33"
  },
  {
    "url": "assets/images/three-friends-drinking-coffee.jpg",
    "revision": "b3aaadb75e44a6af6585d4220fec9626"
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
    "revision": "99466513d46503053375023b44622d99"
  },
  {
    "url": "assets/js/gallery.js",
    "revision": "8f017a5b3b912bc0ab55adcf5fa17fdd"
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
    "url": "assets/js/jquery-ui-1.12.1/AUTHORS.txt",
    "revision": "403511fc6c430ea6179ebcb4a9983eec"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/external/jquery/jquery.js",
    "revision": "fb2d334dabf4902825df4fe6c2298b4b"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/images/ui-bg_glass_55_fbf9ee_1x400.png",
    "revision": "05f30921147118c0ecb6563a02ae722a"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/images/ui-bg_glass_65_ffffff_1x400.png",
    "revision": "6d405c3629d91a95b7b31a5c23e91c1e"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/images/ui-bg_glass_75_dadada_1x400.png",
    "revision": "e10414255863f4e9035e6e313ee470f6"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/images/ui-bg_glass_75_e6e6e6_1x400.png",
    "revision": "51a618141c7cafd94cfc4e3fd8a48624"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/images/ui-bg_glass_95_fef1ec_1x400.png",
    "revision": "4f44e2893378b008dc68b6f87e76b35e"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/images/ui-bg_highlight-soft_75_cccccc_1x100.png",
    "revision": "e45099efbe463cbfe70b4122316d29a8"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/images/ui-icons_222222_256x240.png",
    "revision": "3861e9eb08528ed839cf22c3d51e2042"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/images/ui-icons_2e83ff_256x240.png",
    "revision": "18fbb5e53600e6deea5870799c7319a4"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/images/ui-icons_454545_256x240.png",
    "revision": "94c724823374be623fd19618399116e5"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/images/ui-icons_888888_256x240.png",
    "revision": "5b2c08ae1ffe76987b1ceb831c982c44"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/images/ui-icons_cd0a0a_256x240.png",
    "revision": "6e8da81c268f3800fc0e1f4264551079"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/index.html",
    "revision": "11f31c348968868d4ada89d6162c640e"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/jquery-ui.css",
    "revision": "f6dedad0e39d55c9ac8f809d8f9aa015"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/jquery-ui.js",
    "revision": "67ad6d2d9af82afeb3b9dc615a726188"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/jquery-ui.min.css",
    "revision": "644cfad51a19a49c15433842a875396a"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/jquery-ui.min.js",
    "revision": "cec386664a1df302b37a7c1c976d2a20"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/jquery-ui.structure.css",
    "revision": "899dac5b6f23c8e114d4858edb8be962"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/jquery-ui.structure.min.css",
    "revision": "095c78c561b224ce2ab446fa819a14f8"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/jquery-ui.theme.css",
    "revision": "bbbc2dd75c03d25e08f0f9eac4696156"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/jquery-ui.theme.min.css",
    "revision": "8aaf260d598d7e1f7a8a1877ef6fde28"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/LICENSE.txt",
    "revision": "e0c0d3d883e83f19efa64feb54d5f63d"
  },
  {
    "url": "assets/js/jquery-ui-1.12.1/package.json",
    "revision": "ff7dc0c7a69aa51cea5e37fa4dad9b38"
  },
  {
    "url": "assets/js/register.js",
    "revision": "0fb3a5058cc845673033ce34d7964672"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-background-sync.dev.js",
    "revision": "ed328bc7e31023203c286db32daa2d0c"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-background-sync.prod.js",
    "revision": "39793550463647e7c0de6e596b73b601"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-broadcast-update.dev.js",
    "revision": "d57d0b2581673d91c49ca911a05b0aa2"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-broadcast-update.prod.js",
    "revision": "1a0a5fd8f45cdd7d7622c75c047dd370"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-cacheable-response.dev.js",
    "revision": "1d60c59ad38f262f11ccbdc5e071f203"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-cacheable-response.prod.js",
    "revision": "208ddb754235411cd7ad1505ee219936"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-core.dev.js",
    "revision": "459e08f930061f50c6950c68f4a36816"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-core.prod.js",
    "revision": "6d0787ad5000c8e66c6ba49046cfbd62"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-expiration.dev.js",
    "revision": "83975ed39c895625a8c101b056d91f61"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-expiration.prod.js",
    "revision": "cf90701c83b19c444fdd958a736b3076"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-navigation-preload.dev.js",
    "revision": "277adc85d096aa2027011054172bf8e7"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-navigation-preload.prod.js",
    "revision": "c0b544ce3e822b9f13b7d70e45f420f3"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-offline-ga.dev.js",
    "revision": "d7418bfcbe667500e628de0d64903604"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-offline-ga.prod.js",
    "revision": "1fdae34f7697cd9132f331db17174244"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-precaching.dev.js",
    "revision": "222d289800aa3922b2e197b317c4333f"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-precaching.prod.js",
    "revision": "b036e1a7eacb7d06735c4878173d103c"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-range-requests.dev.js",
    "revision": "3c5a1bf649a929fd5c7618a22b695836"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-range-requests.prod.js",
    "revision": "5c3730ad5204385ea49adb923f8646a2"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-routing.dev.js",
    "revision": "4f1a25c75907dc9190dcdf0a9d3401c0"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-routing.prod.js",
    "revision": "41d9e7f521c3ad95d60921db4346ff20"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-strategies.dev.js",
    "revision": "f24c3e3d147442028af94ea32a7624c3"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-strategies.prod.js",
    "revision": "c11afdb39d8e4e762fac0b36d7e81686"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-streams.dev.js",
    "revision": "6b32f48e4ad3be4487979e0e3d282102"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-streams.prod.js",
    "revision": "a122e0a372bc617d65f7d26f227045a5"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-sw.js",
    "revision": "edf25979d5d95c54e61428c552da0d2e"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-window.dev.umd.js",
    "revision": "a9e46dd4ac9a26189ab41c60dfe296f1"
  },
  {
    "url": "assets/js/workbox-v4.3.1/workbox-window.prod.umd.js",
    "revision": "2072b10dd5eb2c312c5792ef0ac04336"
  },
  {
    "url": "index.html",
    "revision": "f44a46c7fdf3fdadb809a17bf66a0fb6"
  },
  {
    "url": "manifest.json",
    "revision": "d0b72962ee63c41dbc45a91661420db0"
  }
]);