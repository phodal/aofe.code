import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WidgetConfig } from './widget-config.model';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }

  private readonly url = 'assets/widgets/widgets.config.json';

  getWidgetConfigs(): Observable<WidgetConfig[]> {
    return this.http.get<WidgetConfig[]>(this.url);
  }

}
