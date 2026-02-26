import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { TranslatePipe } from '../services/translate.pipe';
import { translations } from '../services/translations';

interface FormacionItem {
  icono: string;
  tituloKey: string;
  institucionKey: string;
  descKey: string;
  estadoKey: string;
  escudo: string;
}

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './formacion.html',
  styleUrls: ['./formacion.css']
})
export class Formacion {
  constructor(public languageService: LanguageService) {}
  
  formaciones: FormacionItem[] = [
    {
      icono: '🧪',
      tituloKey: 'ingQuimicoTitulo',
      institucionKey: 'ingQuimicoInstitucion',
      descKey: 'ingQuimicoDesc',
      estadoKey: 'terminada',
      escudo: '🎓'
    },
    {
      icono: '💻',
      tituloKey: 'ingSistemasTitulo',
      institucionKey: 'ingSistemasInstitucion',
      descKey: 'ingSistemasDesc',
      estadoKey: 'enCurso',
      escudo: '🎓'
    },
    {
      icono: '📚',
      tituloKey: 'formacionCompTitulo',
      institucionKey: 'formacionCompInstitucion',
      descKey: 'formacionCompDesc',
      estadoKey: 'finalizado',
      escudo: '🏅'
    }
  ];

  getTranslatedText(key: string): string {
    const lang = this.languageService.getCurrentLanguage();
    return translations[lang][key as keyof typeof translations['es']] || key;
  }
}
