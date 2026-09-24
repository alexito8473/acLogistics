import { Component, inject, OnInit } from '@angular/core';
import { translations } from '../../../../translations/translations';
import { Language, LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css'],
})
export class ValuesComponent implements OnInit {
  readonly translations = translations;

  // inject
  private languageService = inject(LanguageService);
  constructor() {}

  ngOnInit() {}

  // get
  get currentLanguage(): Language {
    return this.languageService.currentLanguage();
  }
}
