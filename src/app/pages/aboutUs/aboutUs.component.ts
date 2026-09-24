import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Language, LanguageService } from '../../services/language.service';
import { translations } from '../../translations/translations';
import * as L from 'leaflet';
import { HeroComponent } from './components/hero/hero.component';
import { WhoWeAreComponent } from './components/whoWeAre/whoWeAre.component';
import { ValuesComponent } from './components/values/values.component';
import { UbicationComponent } from './components/ubication/ubication.component';
@Component({
  selector: 'app-aboutUs',
  imports: [HeroComponent, WhoWeAreComponent, ValuesComponent, UbicationComponent],
  templateUrl: './aboutUs.component.html',
  styleUrls: ['./aboutUs.component.css'],
})
export class AboutUsComponent {}
