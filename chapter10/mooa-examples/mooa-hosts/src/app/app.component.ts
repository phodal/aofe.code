import {Component, Renderer2} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NavigationEnd, Router} from '@angular/router';
import Mooa, {mooaRouter} from 'mooa';
import {IAppOption} from 'mooa/dist/types/model/IAppOption';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mooa-hosts';
  private mooa: Mooa;

  constructor(private renderer: Renderer2, http: HttpClient, private router: Router) {
    this.mooa = new Mooa({
      debug: true,
      parentElement: 'app-home',
      urlPrefix: 'app',
      switchMode: 'coexist'
    });
    http.get<IAppOption[]>('/assets/apps.json')
      .subscribe(
        data => {
          this.createApps(data);
        },
        err => console.log(err)
      );
  }

  private createApps(data: IAppOption[]) {
    data.map((config) => {
      this.mooa.registerApplication(config.name, config, mooaRouter.matchRoute(config.prefix));
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mooa.reRouter(event);
      }
    });

    return this.mooa.start();
  }
}
