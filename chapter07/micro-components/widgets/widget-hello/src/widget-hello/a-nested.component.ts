import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exclamations',
  template: `
  <span style="color: blue">!!!</span>
  `
})
export class ANestedComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
