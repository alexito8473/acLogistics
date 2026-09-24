import { Component, inject, OnInit } from '@angular/core';
import { Language, LanguageService } from '../../../../services/language.service';
import { translations } from '../../../../translations/translations';
import { ServiceCardComponent } from '../../../../shared/card/serviceCard/serviceCard.component';

@Component({
  selector: 'app-services',
  imports: [ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  readonly translations = translations;

  private languageService = inject(LanguageService);

  ngOnInit() {}

  // get
  get currentLanguage(): Language {
    return this.languageService.currentLanguage();
  }
}
