import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'es';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage = signal<Language>('es');

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
  }

  toggleLanguage(): void {
    this.currentLanguage.update((current) => (current === 'en' ? 'es' : 'en'));
  }
}
