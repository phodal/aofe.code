import { Component } from '@angular/core';
import {mooaPlatform} from 'mooa';
import {Router} from "@angular/router";

@Component({
  selector: 'app-three',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  navigateToApp1() {
    mooaPlatform.navigateTo({
      appName: 'applicationthree',
      router: 'home'
    });
  }

  constructor(private router: Router) {
    mooaPlatform.handleRouterUpdate(this.router, 'applicationthree');
  }



}
