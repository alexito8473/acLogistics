import { Component, inject, OnInit } from '@angular/core';
import { Language, LanguageService } from '../../services/language.service';
import { translations } from '../../translations/translations';

@Component({
  selector: 'app-aboutUs',
  templateUrl: './aboutUs.component.html',
  styleUrls: ['./aboutUs.component.css'],
})
export class AboutUsComponent implements OnInit {
  readonly translations = translations;

  private languageService = inject(LanguageService);

  ngOnInit() {}

  // get
  get currentLanguage(): Language {
    return this.languageService.currentLanguage();
  }
}
