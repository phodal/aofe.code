import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';

export const ROUTES: Routes = [
  { path: '', component: ReportsComponent }
];

@NgModule({
  declarations: [ReportsComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ]
})
export class ReportsModule { }
