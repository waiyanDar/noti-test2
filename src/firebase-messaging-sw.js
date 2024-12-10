// import { getMessaging, getToken } from "../firebase/messaging";

// const messaging = getMessaging();
// getToken(messaging, { vapidKey: 'BChibX9gVTtRHisKRPRWw6eSWwCkJ75XzjWwcKRcgQn6EFHySTUjYkXdO58zyD_i_OYyEWJMgAoQ_VgCp6fI9Nc' }).then((currentToken) => {
//   if (currentToken) {
//     console.log("Current token for client: ", currentToken);
//   } else {
//     console.log('No registration token available. Request permission to generate one.');
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
// });

// co0qI51nCxQdyka2qkPT2I:APA91bFhgLnaK2YDycBe4yT7iw_PqcQseya4imWJVMXHpC9WJpaBD7ryw3pSAlR6eoALsxsp1VjrKBm_1dy7YDbOm6wgFp9WZL1H5TCoFmKTzSQWfTl-sGc
self.addEventListener('push', function (event) {
    if (event.data) {
      const payload = event.data.json();
      const notification = payload.notification || {};
      console.log("notification : ", notification);
      
      const notificationTitle = notification.title || 'Default Title';
      const notificationOptions = {
        body: notification.body || 'Default Body',
        icon: notification.icon || 'assets/test.jpg',
        // link: notification.data.link || 'http://127.0.0.1:8080',
      };
  
      event.waitUntil(
        self.registration.showNotification(notificationTitle, notificationOptions)
      );
    }
  });
  
  self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    console.log("event : ", event);
    
    const url = 'http://127.0.0.1:8080';
    event.waitUntil(
      clients.matchAll({type : 'window'}).then(function(clientlist) {
        const client = clientlist.find(client => client.url.includes(url));
        if (client){
            client.focus();
            client.navigate(url);
        }else{
            clients.openWindow(url);
        }
      })
    );
  });