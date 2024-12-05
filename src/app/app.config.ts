import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({
      "projectId":"noti-test-by-wy",
      "appId":"1:96202926342:web:abcc4cdebc53a2cc5e9687",
      "storageBucket":"noti-test-by-wy.firebasestorage.app",
      "apiKey":"AIzaSyB5ydyjo9O9blpgSdRynO1ljSYcVi0vYgs",
      "authDomain":"noti-test-by-wy.firebaseapp.com",
      "messagingSenderId":"96202926342",
      "measurementId":"G-BR6YE7E9ZG"
    })), 
    provideMessaging(() => getMessaging()), 
    provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })]
};
