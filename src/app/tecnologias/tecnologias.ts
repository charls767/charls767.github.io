import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Technology {
  name: string;
  iconPath: string;
  color: string;
}

interface TechCategory {
  name: string;
  technologies: Technology[];
}

@Component({
  selector: 'app-tecnologias',
  imports: [CommonModule],
  templateUrl: './tecnologias.html',
  styleUrl: './tecnologias.css'
})
export class Tecnologias {
  techCategories: TechCategory[] = [
    {
      name: 'Frontend',
      technologies: [
        { name: 'HTML&CSS', iconPath: 'images/html-css-logo.jpg', color: '#1f1f1f' },
        { name: 'JavaScript', iconPath: 'svg/javascript.svg', color: '#1f1f1f' },
        { name: 'Angular', iconPath: 'svg/angular.svg', color: '#1f1f1f' },
        { name: 'Typescript', iconPath: 'svg/typescript.svg', color: '#1f1f1f' },
        { name: 'Astro', iconPath: 'svg/astro.svg', color: '#1f1f1f' }
      ]
    },
    {
      name: 'Backend',
      technologies: [
        { name: 'Node.js', iconPath: 'svg/nodejs.svg', color: '#1f1f1f' },
        { name: 'Django', iconPath: 'svg/django.svg', color: '#1f1f1f' },
        { name: 'FastAPI', iconPath: 'svg/fastapi.svg', color: '#1f1f1f' },
        { name: 'Java', iconPath: 'images/selenium.png', color: '#1f1f1f' },
        { name: 'Python', iconPath: 'svg/python.svg', color: '#1f1f1f' },
        { name: 'MySQL', iconPath: 'svg/mysql.svg', color: '#1f1f1f' },
        { name: 'TensorFlow', iconPath: 'svg/tensorflow.svg', color: '#1f1f1f' },
        
      ]
    },
    {
      name: 'Aprendiendo',
      technologies: [
      
        
       { name: 'MongoDb', iconPath: 'svg/mongodb.svg', color: '#1f1f1f' },
        { name: 'Electron', iconPath: 'svg/electron.svg', color: '#1f1f1f' },
        { name: 'AWS', iconPath: 'svg/aws_light.svg', color: '#1f1f1f' },
      ]
    },
    {
      name: 'Herramientas',
      technologies: [
        { name: 'Git', iconPath: 'svg/git.svg', color: '#1f1f1f' },
        { name: 'Atlassian', iconPath: 'svg/atlassian.svg', color: '#1f1f1f' },
        { name: 'Matlab&Simulink', iconPath: 'svg/matlab.svg', color: '#1f1f1f' },
        { name: 'Selenium', iconPath: 'images/selenium.png', color: '#1f1f1f' },
        { name: 'Simul8', iconPath: 'images/simul8.png', color: '#1f1f1f' },
         { name: 'Latex', iconPath: 'images/latex.png', color: '#1f1f1f' },
      ]
    }
  ];

  onImageError(event: any): void {
    event.target.src = 'assets/icons/default.png';
    console.warn('Error cargando imagen:', event.target.src);
  }
}