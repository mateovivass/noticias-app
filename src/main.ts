import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Routes } from '@angular/router';
import { AppComponent } from './app/app.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
 
  const routes: Routes = [
    { path: './app.component', component: AppComponent  }
  ];
  
  