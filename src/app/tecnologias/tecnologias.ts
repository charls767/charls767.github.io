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
  technologies: Technology[] = [
    { name: 'Python', iconPath: 'images/py.png', color: '#1f1f1f' },
    { name: 'JavaScript', iconPath: 'images/js.png', color: '#1f1f1f' }, 
    { name: 'Angular', iconPath: 'images/angular.png', color: '#1f1f1f' },
    { name: 'Node.js', iconPath: 'images/node.png', color: '#1f1f1f' },
    { name: 'HTML&CSS', iconPath: 'images/html-css-logo.jpg', color: '#1f1f1f' },
    { name: 'Latex', iconPath: 'images/latex.png', color: '#1f1f1f' },
    { name: 'Matlab&Simulink', iconPath: 'images/matlab.jpeg', color: '#1f1f1f' },
    { name: 'Simul8', iconPath: 'images/simul8.png', color: '#1f1f1f' },
    { name: 'Selenium', iconPath: 'images/selenium.png', color: '#1f1f1f' },
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