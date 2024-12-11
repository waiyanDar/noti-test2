import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
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

  constructor() {}

  ngOnInit(): void {
    Notification.requestPermission().then(
      (notiPermission: NotificationPermission) => {
        if (notiPermission === "granted") {
          console.log("Granted");
          this.fcmService.reuquestPermission();
          this.fcmService.listenMessages();
        }
        if (notiPermission === "denied") {
          console.log("Denied");
        }
      }
    )
  }
}
