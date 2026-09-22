import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Language, LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // variable
  menuOpen = signal<boolean>(false);

  private languageService = inject(LanguageService);
  constructor() {}

  ngOnInit() {}

  // get

  get currenLanguage(): string {
    return this.languageService.currentLanguage();
  }
  // on

  onToggleMenu(): void {
    this.menuOpen.update((result) => !result);
  }

  onCloseMenu(): void {
    this.menuOpen.update(() => false);
  }

  onChangeLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }
}
