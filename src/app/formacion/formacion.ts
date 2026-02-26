import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { TranslatePipe } from '../services/translate.pipe';

interface FormacionItem {
  icono: string;
  titulo: string;
  descripcion: string;
  subdescripcion: string;
  estado: string;
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
      titulo: 'Ingenierio Quimico',
      descripcion: 'Universidad Nacional de Colombia',
      subdescripcion: "Orientado al análisis, simulación y automatización de procesos químicos e industriales.",
      estado: 'Terminada',
      escudo: '🎓'
    },
    {
     icono: '💻',
    titulo: 'Ingeniería de Sistemas',
    descripcion: 'Universidad Nacional de Colombia',
    subdescripcion: 'Formación complementaria en desarrollo de software, simulación e inteligencia artificial.',
    estado: 'En curso',
    escudo: '🎓'
    },
    {
    icono: '📚',
    titulo: 'Formación complementaria en programación y ciencia de datos',
    descripcion: 'Plataformas: Udemy, DataCamp, Coursera',
    subdescripcion: 'Cursos avanzados en desarrollo de aplicaciones web modernas con Angular, Node.js, FastAPI y arquitecturas RESTful; procesamiento de datos con Python, visualización, y fundamentos de machine learning.',
    estado: 'Finalizado',
    escudo: '🏅'
  }
  ];
}
