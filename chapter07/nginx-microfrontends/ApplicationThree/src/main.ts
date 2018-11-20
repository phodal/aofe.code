import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {mooaPlatform} from 'mooa';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));


mooaPlatform.mount('applicationthree').then((opts) => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .then((module) => {
      opts['attachUnmount'](module);
      // Do something with props if you want
      // Ex : module.instance.setSomething(...)
    })
    .catch(err => console.log(err));
})
