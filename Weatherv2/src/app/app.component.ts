import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';

  // String Interpolation(One - Way binding)------
  weatherStatus = ["Sunny", "Storm", "Rain"];
  // weatherStatus: string[] = ["Sunny", "Storm", "Rain"];



  // Event Binding -------
  isDarkTheme = false;
  // isDarkTheme: boolean = false;
  changeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme');
    console.log('click')
  }


  // Property Binding 
  weatherImg = ['assets/sun.png','assets/storm.png','assets/weather.png'];


  //2 Way Data Binding [NOte : for using ngModul You must need FormsModule]
  date: string = 'Monday, 21 september'; 
}
