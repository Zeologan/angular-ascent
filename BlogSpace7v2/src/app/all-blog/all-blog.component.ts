import { Component,Input } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.css'], //2. What to provide
})
export class AllBlogComponent {
  blog: any[] = [];
  //1.How to Provide Dependency
  constructor(private subService:SubscribeService, private dataService: DataService){

  }

  ngOnInit(){
    this.blog = this.dataService.getData();
  }

  onSubscribe(){
    this.subService.onSubscribeClicked('Blog Space');
  }
}
  