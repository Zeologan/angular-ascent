import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashSync';

  // ngClass & ngStyle
  isActive: boolean = true;

  // add Employeee use *ngif 
  isAddEmployeeVisible: boolean = false;
  AddEmployee() {
    this.isAddEmployeeVisible = !this.isAddEmployeeVisible;
  }

  // Login Button use *ngif
  isLoggedIn: boolean = true;
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  // use *ngfor 
  Project: any[] = [
    { icon: "fa-solid fa-bars-progress", ptitle: "Total Projects", count: 10000, desc: "All running & Completed Projects" },
    { icon: "fa-solid fa-list-check", ptitle: "Completed Projects", count: 9100, desc: "12+ Completed Rate This Year" },
    { icon: "fa-solid fa-chart-line", ptitle: "Running Projects", count: 900, desc: "Running projects increasing" },
    { icon: "fa-solid fa-chart-column", ptitle: "Team Performance", count: "90%", desc: "Exceeds Expectations" },
    { icon: "fa-regular fa-calendar", ptitle: "Upcoming Event", count: "10 Dec", desc: "Meeting Zoom Link" },
  ];

  // use *ngfor 
  EmployeeList: any[] = [
    { id: 567, ename: "Maria Anders", designation: "Application Developer", salary: 25000, email: "Maria@eco.com" },
    { id: 234, ename: "Francisco Chang", designation: "Tester", salary: 20000, email: "francisco@eco.com" },
    { id: 98, ename: "Roland Mendel", designation: "UI Designer", salary: 27000, email: "rolandmendel@eco.com" },
    { id: 653, ename: "Helen Bennett", designation: "R&D", salary: 30000, email: "Helen@eco.com" },
    { id: 120, ename: "Yoshi Tannamuri", designation: "Software Developer", salary: 40000, email: "Yoshi@eco.com" },
  ];


  // Start--- App New Employeee
  newEmployee = {
    id: null,
    ename: '',
    designation: '',
    salary: null,
    email: ''
  };

  onSubmit() {
    // Check if all fields are filled
    if (this.newEmployee.id && this.newEmployee.ename && this.newEmployee.designation && this.newEmployee.salary && this.newEmployee.email) {
      // Add new employee to the list
      this.EmployeeList.push({ ...this.newEmployee });
      // Reset form
      this.newEmployee = {
        id: null,
        ename: '',
        designation: '',
        salary: null,
        email: ''
      };
      this.AddEmployee();
    } else {
      alert('Please fill out all fields');
    }
  }
  // End--- App New Employeee

  // Pure and Impure Pipes 
  searchText: string = '';

  // Pipes Uppercase, Lowercase, Date 
  sidebar : any = ["Dashborad","Total Project",'Running',"Performance"];

  today = new Date();
}
