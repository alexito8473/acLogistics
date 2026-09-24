import { Component, inject, OnInit } from '@angular/core';
import { translations } from '../../translations/translations';
import { Language, LanguageService } from '../../services/language.service';
import { ServiceCardComponent } from '../../shared/card/serviceCard/serviceCard.component';
import { RouterLink } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SolutionComponent } from './components/solution/solution.component';
import { TrustBarComponent } from './components/trustBar/trustBar.component';
import { ServicesComponent } from './components/services/services.component';
import { CtaComponent } from './components/cta/cta.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    HeroComponent,
    AboutComponent,
    SolutionComponent,
    TrustBarComponent,
    ServicesComponent,
    CtaComponent,
  ],
})
export class HomeComponent {}
