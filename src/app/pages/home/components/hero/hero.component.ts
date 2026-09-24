import { Component, inject, OnInit } from '@angular/core';
import { Language, LanguageService } from '../../../../services/language.service';
import { translations } from '../../../../translations/translations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  readonly translations = translations;

  private languageService = inject(LanguageService);

  ngOnInit() {}

  // get
  get currentLanguage(): Language {
    return this.languageService.currentLanguage();
  }
}
