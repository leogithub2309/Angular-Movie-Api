import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

export let token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTRmNDJjN2ZmMzQ4ODYyZGQ0NTkxM2VjMTMwNzcxOCIsIm5iZiI6MTczNzEzOTk2NC42MjcsInN1YiI6IjY3OGFhNmZjNTVlNDliZWQ1ZTk3YzMyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VkGKP_6pjj9Bh-i1BB6_Gzp40CGpEJnAFi1lzpw3MPw';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
