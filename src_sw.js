importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');
importScripts('assets/js/idb.js');




/*self.addEventListener('message', function (event) {
  console.log('form data', event.data)
  if (event.data.hasOwnProperty('formdata')) {
    // receives form data from script.js upon submission
    var formdata = event.data.formdata;

  }
})*/

/*function createDB() {
  	var dbPromise = idb.open('workbox-precache-http___localhost_flatmates_build_', 2, function(upgradeDb) {
  		console.log('Making a new object store');
  		if (!upgradeDb.objectStoreNames.contains('booking_form_data')) {
  		  var store = upgradeDb.createObjectStore('booking_form_data', {keyPath: 'id', autoIncrement: true});
  		}
    });
}

self.addEventListener('activate', function(event) {
  event.waitUntil(
    dbPromise()
  );
});*/


/*const bgSyncPlugin = new workbox.backgroundSync.Plugin('booking_form_data', {
  maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

workbox.routing.registerRoute(
  '/index.php',
  workbox.strategies.networkOnly({
    plugins: [bgSyncPlugin]
  }),
  'POST'
);*/
const queue = new workbox.backgroundSync.Queue('booking_form_data');
workbox.routing.registerRoute(
  '/\/api\/.*\/*.php/',
  workbox.strategies.networkOnly(function() {
    self.addEventListener('fetch', (event) => {
      // Clone the request to ensure it's save to read when
      // adding to the Queue.
      const promiseChain = fetch(event.request.clone())
      .catch((err) => {
          return queue.pushRequest({request: event.request});
      });

      event.waitUntil(promiseChain);
    });
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


workbox.precaching.precacheAndRoute([]);

