import { Component, inject, OnInit } from '@angular/core';
import { getToken, Messaging, onMessage } from '@angular/fire/messaging';
import { RouterOutlet } from '@angular/router';
import { EMPTY, Observable, tap } from 'rxjs';
import { FcmService } from './service/fcm.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'noti-test-by-wy';
  message$: Observable<any> = EMPTY;

  private fcmService = inject (FcmService);

  // private messaging = inject(Messaging);

  constructor() {
    // console.log("messaging : ", this.messaging);
    // Notification.requestPermission().then(
    //   (notificationPermissions: NotificationPermission) => {
    //     if (notificationPermissions === "granted") {
    //       console.log("Granted");
    //     }
    //     if (notificationPermissions === "denied") {
    //       console.log("Denied");
    //     }
    //   });
    // navigator.serviceWorker
    //   .register("../assets/firebase-messaging-sw.js", {
    //     type: "module",
    //   })
    //   .then((serviceWorkerRegistration) => {
    //     getToken(this.messaging, {
    //       vapidKey: `BLrdwVhyMfINgeXI5tge1fOiGI41DUjFSfWiwvLVDNrFD73qeyH5RVE4tlf0Ov6z8_15i8tvxSKNZfu10pQBPJM`,
    //       serviceWorkerRegistration: serviceWorkerRegistration,
    //     }).then((x) => {
    //       console.log('my fcm token', x);
    //       // This is a good place to then store it on your database for each user
    //     });
    //   });
    // this.message$ = new Observable((sub) => onMessage(this.messaging, (msg) =>
    //   sub.next(msg))).pipe(
    //     tap((msg) => {
    //       console.log("My Firebase Cloud Message", msg);
    //     })
    //   );
  }

  ngOnInit(): void {
    this.fcmService.reuquestPermission();
    this.fcmService.listenMessages();
  }
}
