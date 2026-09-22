import { Component, inject, OnInit } from '@angular/core';
import { translations } from '../../translations/translations';
import { Language, LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent {
  submitted = false;
  readonly translations = translations;

  private languageService = inject(LanguageService);

  submitQuote(): void {
    this.submitted = true;
  }
  // get
  get currentLanguage(): Language {
    return this.languageService.currentLanguage();
  }
}
