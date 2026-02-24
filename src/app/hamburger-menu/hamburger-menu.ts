import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hamburger-menu.html',
  styleUrls: ['./hamburger-menu.css']
})
export class HamburgerMenuComponent {
  isOpen = false;

  menuItems = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Sobre Mí', id: 'sobre-mi' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Tecnologías', id: 'tecnologias' },
    { label: 'Formación', id: 'formacion' }
  ];

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  navigateTo(id: string) {
    this.isOpen = false; // Close menu after navigation
    
    const sectionMap: { [key: string]: string } = {
      'inicio': 'body',
      'sobre-mi': '.AlgoSobreMi',
      'proyectos': '.Proyectos',
      'tecnologias': '.Tecnologias',
      'formacion': 'app-formacion'
    };

    setTimeout(() => {
      const element = document.querySelector(sectionMap[id]);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
