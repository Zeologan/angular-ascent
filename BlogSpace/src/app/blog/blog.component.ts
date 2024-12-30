import { Component,Input } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  @Input() blog: any[] = [];

  constructor(private subService:SubscribeService){

  }

  onSubscribe(){
    this.subService.onSubscribeClicked('BlogSpace');
  }
}