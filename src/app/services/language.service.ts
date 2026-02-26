import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<Language>(
    (localStorage.getItem('language') as Language) || 'es'
  );

  public language$: Observable<Language> = this.currentLanguage.asObservable();

  constructor() {
    // Sincronizar el idioma con el almacenamiento local
    this.language$.subscribe(lang => {
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
    });
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage.value;
  }

  setLanguage(lang: Language): void {
    if (lang !== this.currentLanguage.value) {
      this.currentLanguage.next(lang);
    }
  }

  toggleLanguage(): void {
    const newLang = this.currentLanguage.value === 'es' ? 'en' : 'es';
    this.setLanguage(newLang);
  }
}
