import { inject, Injectable } from "@angular/core";
import { getToken, Messaging, onMessage } from "@angular/fire/messaging";
import { EMPTY, Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  private messaging = inject(Messaging);
  message$: Observable<any> = EMPTY;
  constructor() { }

  reuquestPermission() {
    getToken(this.messaging, {
      vapidKey: 'BLrdwVhyMfINgeXI5tge1fOiGI41DUjFSfWiwvLVDNrFD73qeyH5RVE4tlf0Ov6z8_15i8tvxSKNZfu10pQBPJM'
    })
      .then(token => {
        console.log("My Firebase Cloud Message token : ", token);
      })
      .catch(err => {
        console.log("My Firebase Cloud Message error : ", err);
      })
  }

  listenMessages() {
    onMessage(this.messaging, (payload) => {
      console.log("My Firebase Cloud Message payload : ", payload);
    })
  }
}