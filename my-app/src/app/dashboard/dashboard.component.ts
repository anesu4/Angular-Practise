import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Tour of Heroes';
  content = '';

  constructor() {
    this.content = 'This is the dashboard';
  }
}
