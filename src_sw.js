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


//const queue = new workbox.backgroundSync.Queue('booking_form_data');

//function onsyncRequest() {
 /*self.addEventListener('fetch', (event) => {

    if (event.request.method === 'POST') {
     // if (!navigator.onLine) {
        console.log('we are offline')
        console.log('cloned event ',event.request)
        // Clone the request to ensure it's save to read when
        // adding to the Queue.
        const promiseChain = fetch(event.request.clone())
        .catch((err) => {
            return queue.shiftRequest({request: event.request});
        });

        event.waitUntil(promiseChain);
      //}
    }  
  });*/
//}


//var queue = new workbox.backgroundSync.Queue('booking_form_data');
/*self.addEventListener('fetch', (event) => {

  if (event.request.method === 'POST') {
    
    console.log('post to php fired ',event.request)

    //var data = event.request;
    
      // Clone the request to ensure it's save to read when
      // adding to the Queue.
      
      
          dbPromise.then(function(db) {
          var tx = db.transaction('booking_form_data', 'readwrite');
          var store = tx.objectStore('booking_form_data');
          
          
          store.put(event.request.json());
          return tx.complete;
        }).then(function() {
          console.log('added item to the store os!');
        });
  }
  
});*/



/*
let bgQueue = new workbox.backgroundSync.QueuePlugin({
  callbacks: {
    replayDidSucceed: async(hash, res) => {
    self.registration.showNotification('Background sync demo', {
    body: 'Product has been purchased.',
    icon: '/images/shop-icon-384.png',
  });
},
replayDidFail: (hash) => {},
requestWillEnqueue: (reqData) => {},
requestWillDequeue: (reqData) => {},
},
});
*/

workbox.routing.registerRoute(
  new RegExp('.*\.php'),
  new workbox.strategies.NetworkFirst(function() {
    console.log('get php fired')
  })
);

var queue = new workbox.backgroundSync.Queue('booking_form_data');
var myPlugin = {

  requestWillFetch: async ({request}) => {
    // Return `request` or a different Request
    console.log('this is request', request)
    return request;      
  },
  fetchDidFail: async ({originalRequest, request, error, event}) => {
    console.error('Replay failed for request', event.request, error);
   /* var log = document.getElementById('warning');
    log.innerText = 'No network, no worries, we will try again when you are back online';*/
    // Put the entry back in the queue and re-throw the error:
    await queue.unshiftRequest({request: event.request});
    //throw error
  },
  fetchDidSucceed: async ({request, response}) => {
    // Return `response` to use the network response as-is,
    // or alternatively create and return a new Response object.
    return response;
  },
  onSync: async (queue) => {
    try {
      await queue.replayRequests();
      
      // The replay was successful! Notification logic can go here.
      console.log('Replay complete!');
    } catch (error) {
      // The replay failed...
      console.log(error);
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




workbox.precaching.precacheAndRoute([]);