import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetHelloComponent } from './widget-hello.component';
import { ANestedComponent } from './a-nested.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WidgetHelloComponent,
    ANestedComponent
  ],
  entryComponents: [WidgetHelloComponent],
  providers: [{
    provide: 'widget-hello',
    useValue: WidgetHelloComponent
  }]
})
export class WidgetHelloModule { }
