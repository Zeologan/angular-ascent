import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router: Router){

  }

  onContactUs(){
    // this.router.navigateByUrl('/contact-us');
    this.router.navigate(['/contact-us']);
  }
} 