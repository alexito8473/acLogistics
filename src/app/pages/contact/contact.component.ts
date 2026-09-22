import { Component, inject, OnInit } from '@angular/core';
import { translations } from '../../translations/translations';
import { Language, LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  submitted = false;
  readonly translations = translations;

  private languageService = inject(LanguageService);

  submitContact(): void {
    this.submitted = true;
  }
  ngOnInit(): void {}
  // get
  get currentLanguage(): Language {
    return this.languageService.currentLanguage();
  }
}
