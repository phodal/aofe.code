import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-todays-date',
  template: `
  <div class="card">
    <div class="card-block">
      <div class="card-title">
        widget-todays-date
      </div>
      <div class="card-text">
        {{currentDate | date}}
      </div>
    </div>
  </div>
  `
})
export class WidgetTodaysDateComponent implements OnInit {

  currentDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
