import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

// mooaPlatform.mount('help').then((opts) => {
//   platformBrowserDynamic().bootstrapModule(AppModule).then((module) => {
//     opts['attachUnmount'](module);
//   });
// });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

