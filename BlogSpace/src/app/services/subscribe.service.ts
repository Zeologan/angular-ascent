import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }

  onSubscribeClicked(name:string){
    Swal.fire({
      title: "Subscribe now!",
      text: "Join " + name + " and get personalized offers. Subscribe now!",
      icon: "warning"
    });
  }
}


// @Injectable({ providedIn: 'root' }): This makes the service available globally without needing to add it to the providers array in AppModule.