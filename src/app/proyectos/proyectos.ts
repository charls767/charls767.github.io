import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
interface Technology {
  name: string;
  iconPath: string;
}
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  technologies: Technology[];
  demoUrl?: string;
  codeUrl?: string;
  iconPath: string;
}

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {
  projects: Project[] = [
    {
      id: 1,
      title: 'Gestor Termodinámico',
      subtitle: 'Software cientifico',
      description: 'Aplicación para gestionar, calcular y visualizar ensayos de laboratorio termodinámico.',
      imagePath: 'images/example1.png',
      iconPath: 'images/py.png',
      technologies: [
        { name: 'Python', iconPath: 'images/py.png' }, 
        { name: 'Django', iconPath: 'images/django.png' }
      ],
      demoUrl: 'https://demo.example.com',
      codeUrl: 'https://github.com/user/project'
    },
    {
      id: 2,
      title: 'Hackeo Matrix',
      subtitle: 'Mi obra maestra',
      description: 'Migración del Matrix al mundo real y hackeo del sistema ficticio para salvar a la humanidad.',
      imagePath: 'assets/images/matrix-hack.jpg',
      iconPath: 'images/py.png',
      technologies: [
        { name: 'Binario', iconPath: 'assets/icons/binary.png' }
      ],
      demoUrl: 'https://matrix.example.com'
    }
  ];

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