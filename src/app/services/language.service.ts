import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: BehaviorSubject<Language>;

  public language$: Observable<Language>;

  constructor() {
    // Obtener idioma de localStorage o usar español por defecto
    const savedLanguage = localStorage.getItem('language');
    const initialLanguage: Language = (savedLanguage === 'en' ? 'en' : 'es');
    
    this.currentLanguage = new BehaviorSubject<Language>(initialLanguage);
    this.language$ = this.currentLanguage.asObservable();

    // Establecer el idioma inicial
    this.setLanguage(initialLanguage);
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage.value;
  }

  setLanguage(lang: Language): void {
    // Siempre actualizar el idioma
    this.currentLanguage.next(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  }

  toggleLanguage(): void {
    const newLang = this.currentLanguage.value === 'es' ? 'en' : 'es';
    this.setLanguage(newLang);
  }
}
