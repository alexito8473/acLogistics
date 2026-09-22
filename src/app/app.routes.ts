import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InformationComponent } from './pages/information/information.component';
import { AboutUsComponent } from './pages/aboutUs/aboutUs.component';
import { QuoteComponent } from './pages/quote/quote.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },

  {
    path: 'information',
    component: InformationComponent,
  },

  {
    path: 'quote',
    component: QuoteComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },

  // Any unknown URL goes back to Home
  {
    path: '**',
    redirectTo: '',
  },
];
