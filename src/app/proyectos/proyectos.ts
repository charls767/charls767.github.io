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
  title: 'Diagramas Ternarios',
  subtitle: 'Visualización de Datos Composicionales',
  description: 'Aplicación web para la creación y análisis de diagramas ternarios a partir de datos composicionales, con soporte para múltiples series y exportación de resultados en formatos de imagen y PDF.',
  imagePath: 'images/imagen_Caputra_app_ternarios.png',
  iconPath: 'images/Ternarios_icon.png',
  technologies: [
    { name: 'Python', iconPath: 'svg/python.svg' },
    { name: 'Flask', iconPath: 'svg/flask.svg' },
    { name: 'JavaScript', iconPath: 'svg/javascript.svg' },
    
  ],
  demoUrl: 'https://ternariosapp.vercel.app',
  codeUrl: 'https://github.com/charls767/ternarios' 
},
//
 //   {
  //    id: 2,
   //   title: 'E-Commerce ',
    //  subtitle: 'Mi obra maestra',
     // description: 'Migración del Matrix al mundo real y hackeo del sistema ficticio para salvar a la humanidad.',
      //imagePath: 'assets/images/matrix-hack.jpg',
     // iconPath: 'images/py.png',
     // technologies: [
     //   { name: 'Binario', iconPath: 'assets/icons/binary.png' }
     // ],
     // demoUrl: 'https://matrix.example.com'
    //}
   //  
    
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