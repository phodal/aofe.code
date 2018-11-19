import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
  { path: 'settings', loadChildren: '../settings/settings.module#SettingsModule' },
  { path: 'reports', loadChildren: '../reports/reports.module#ReportsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
