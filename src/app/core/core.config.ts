import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpService } from './services/http.service';

export const coreConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([])),
    HttpService,
    // Add other core providers here
  ],
};
