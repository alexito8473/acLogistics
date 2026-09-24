import { Component, inject, OnInit } from '@angular/core';
import { translations } from '../../../../translations/translations';
import { Language, LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  readonly translations = translations;

  private languageService = inject(LanguageService);

  ngOnInit() {}

  // get
  get currentLanguage(): Language {
    return this.languageService.currentLanguage();
  }
}
