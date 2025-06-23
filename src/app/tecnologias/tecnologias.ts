import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Technology {
  name: string;
  iconPath: string;
  color: string;
}

@Component({
  selector: 'app-tecnologias',
  imports: [CommonModule],
  templateUrl: './tecnologias.html',
  styleUrl: './tecnologias.css'
})
export class Tecnologias {
  technologies: Technology[] = [ //'images/py.png'
    { name: 'Python', iconPath: 'svg/python.svg', color: '#1f1f1f' },
    { name: 'JavaScript', iconPath: 'svg/javascript.svg', color: '#1f1f1f' }, 
    { name: 'Angular', iconPath: 'svg/angular.svg', color: '#1f1f1f' },
    { name: 'Node.js', iconPath: 'svg/nodejs.svg', color: '#1f1f1f' },
    { name: 'HTML&CSS', iconPath: 'images/html-css-logo.jpg', color: '#1f1f1f' },
    { name: 'Latex', iconPath: 'images/latex.png', color: '#1f1f1f' },
    { name: 'Matlab&Simulink', iconPath: 'svg/matlab.svg', color: '#1f1f1f' },
    { name: 'Simul8', iconPath: 'images/simul8.png', color: '#1f1f1f' },
    { name: 'Selenium', iconPath: 'images/selenium.png', color: '#1f1f1f' },
    { name: 'Java', iconPath: 'images/selenium.png', color: '#1f1f1f' },
    { name: 'Electron', iconPath: 'svg/electron.svg', color: '#1f1f1f' },
    { name: 'MongoDb', iconPath: 'svg/mongodb.svg', color: '#1f1f1f' },
    { name: 'Typescript', iconPath: 'svg/typescript.svg', color: '#1f1f1f' },
    { name: 'Git', iconPath: 'svg/git.svg', color: '#1f1f1f' },
    { name: 'Django', iconPath: 'svg/django.svg', color: '#1f1f1f' },
    { name: 'Atlassian', iconPath: 'svg/atlassian.svg', color: '#1f1f1f' },
    { name: 'Astro', iconPath: 'svg/astro.svg', color: '#1f1f1f' },
  
    

  ];
  
  // Método para agregar nueva tecnología
  addTechnology(name: string, iconPath: string, color: string): void {
    this.technologies.push({ name, iconPath, color });
  }

  // Método para remover tecnología
  removeTechnology(name: string): void {
    this.technologies = this.technologies.filter(tech => tech.name !== name);
  }

  // Método para manejar errores de carga de imagen
  onImageError(event: any): void {
    // Imagen por defecto si falla la carga
    event.target.src = 'assets/icons/default.png';
    console.warn('Error cargando imagen:', event.target.src);
  }
}