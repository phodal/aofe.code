import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-hello',
  template: `
  <div class="card">
    <div class="card-block">
      <div class="card-title">
        widget-hello
      </div>
      <div class="card-text">
        Hello World <exclamations></exclamations>
      </div>
    </div>
  </div>
  `
})
export class WidgetHelloComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
