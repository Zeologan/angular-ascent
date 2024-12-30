import { Component,Input,OnInit } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() logo : string = '';

  ngOnInit(): void {
    // Initialization logic here
    console.log('NavbarComponent initialized with logo:', this.logo);
  }


  // SubscribeService with Dependency Injection 
  constructor(private subService:SubscribeService){

  }

  onSubscribe(){
    this.subService.onSubscribeClicked('BlogSpace');
  }
}
