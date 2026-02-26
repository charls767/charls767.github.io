import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service';
import { translations, TranslationKey } from './translations';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(key: TranslationKey): string {
    const lang = this.languageService.getCurrentLanguage();
    return translations[lang][key] || key;
  }
}
