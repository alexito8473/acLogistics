import { Component, inject, OnInit } from '@angular/core';
import { translations } from '../../translations/translations';
import { Language, LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  readonly translations = translations;

  private languageService = inject(LanguageService);

  ngOnInit() {}

  // get
  get currentLanguage(): Language {
    return this.languageService.currentLanguage();
  }
}
