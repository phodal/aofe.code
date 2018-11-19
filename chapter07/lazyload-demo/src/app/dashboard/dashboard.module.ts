import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ]
})
export class DashboardModule { }
