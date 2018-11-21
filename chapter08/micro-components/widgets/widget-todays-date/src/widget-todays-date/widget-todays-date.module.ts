import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetTodaysDateComponent } from './widget-todays-date.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WidgetTodaysDateComponent],
  entryComponents: [WidgetTodaysDateComponent],
  providers: [{
    provide: 'widget-todays-date',
    useValue: WidgetTodaysDateComponent
  }]
})
export class WidgetTodaysDateModule { }
