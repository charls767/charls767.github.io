import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { TranslatePipe } from '../services/translate.pipe';
import { translations } from '../services/translations';

interface Technology {
  name: string;
  iconPath: string;
}
interface Project {
  id: number;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  imagePath: string;
  technologies: Technology[];
  demoUrl?: string;
  codeUrl?: string;
  iconPath: string;
}

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {
  constructor(public languageService: LanguageService) {}
  
  projects: Project[] = [
    {
      id: 1,
      titleKey: 'tepTitulo',
      subtitleKey: 'tepSubtitulo',
      descriptionKey: 'tepDescripcion',
      imagePath: 'images/TEP.png',
      iconPath: 'images/TEP-logo.png',
      technologies: [
        { name: 'Python', iconPath: 'svg/python.svg' },
        { name: 'pandas', iconPath: 'images/pandas.png' },
        { name: 'scikit-learn', iconPath: 'images/Scikit_learn_logo_small.png' },
        { name: 'NumPy', iconPath: 'images/numpy-logo.png' },
        { name: 'Matplotlib', iconPath: 'images/matplotlib.png' },
      ],
      demoUrl: 'https://datasciencetep.vercel.app',
      codeUrl: 'https://github.com/charls767/datascience_tep'
    },
    {
      id: 2,
      titleKey: 'pidTitulo',
      subtitleKey: 'pidSubtitulo',
      descriptionKey: 'pidDescripcion',
      imagePath: 'images/PID_controller.png',
      iconPath: 'images/PID_logo.png',
      technologies: [
        { name: 'Python', iconPath: 'svg/python.svg' },
        { name: 'Streamlit', iconPath: 'images/streamlit.png' },
        { name: 'python-control', iconPath: 'images/control-lib.jpg' },
      ],
      demoUrl: 'https://pid-controller-tuner.streamlit.app/',
      codeUrl: 'https://github.com/charls767/PID-Controller-Tuner'
    },
    {
      id: 3,
      titleKey: 'ternariosTitulo',
      subtitleKey: 'ternariosSubtitulo',
      descriptionKey: 'ternariosDescripcion',
      imagePath: 'images/Captura_ternarios2.png',
      iconPath: 'images/Ternarios_Icon.png',
      technologies: [
        { name: 'Python', iconPath: 'svg/python.svg' },
        { name: 'Flask', iconPath: 'svg/flask.svg' },
        { name: 'JavaScript', iconPath: 'svg/javascript.svg' },
      ],
      demoUrl: 'https://ternariosapp.vercel.app',
      codeUrl: 'https://github.com/charls767/ternarios'
    }
  ];

  // Método para obtener el texto traducido
  getTranslatedText(key: any): string {
    const lang = this.languageService.getCurrentLanguage();
    return translations[lang][key as keyof typeof translations['es']] || key;
  }

  // Método para agregar nuevo proyecto
  addProject(project: Project): void {
    this.projects.push(project);
  }

  // Método para remover proyecto
  removeProject(id: number): void {
    this.projects = this.projects.filter(project => project.id !== id);
  }

  // Método para manejar errores de carga de imagen
  onImageError(event: any): void {
    event.target.src = 'assets/images/default-project.jpg';
    console.warn('Error cargando imagen del proyecto:', event.target.src);
  }

  // Método para abrir enlaces
  openLink(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}