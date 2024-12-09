import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
  .then(() => console.log('service worker registered'))
  .catch((err) => console.log('service worker not registered', err));
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
