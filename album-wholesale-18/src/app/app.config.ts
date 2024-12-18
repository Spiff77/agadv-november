import {ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import {AppModule} from './app.module';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
   // provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
   // provideStore(),
   // provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
   // provideEffects(),
    importProvidersFrom(AppModule)

  ]
};
