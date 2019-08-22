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




workbox.precaching.precacheAndRoute([]);