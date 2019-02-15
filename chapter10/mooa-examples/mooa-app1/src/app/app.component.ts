import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mooaPlatform } from 'mooa';

@Component({
  selector: 'app-app1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    mooaPlatform.handleRouterUpdate(this.router, 'app1');
  }
}
