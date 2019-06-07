importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');
importScripts('assets/js/idb.js');



function createDB() {
  	var dbPromise = idb.open('booking-db', 1, function(upgradeDb) {
		console.log('Making a new object store');
		if (!upgradeDb.objectStoreNames.contains('booking_form_data')) {
		  var store = upgradeDb.createObjectStore('booking_form_data', {keyPath: 'hostPhone'});
		}

	});
}

self.addEventListener('activate', function(event) {
  event.waitUntil(
    createDB()
  );
});

/*self.addEventListener('message', function (event) {
  console.log('form data is', event.data)
  if (event.data.hasOwnProperty('formData')) {
    // receives form data from script.js upon submission
    formData = event.data.formData
  }
});*/


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

