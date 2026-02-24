import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Section {
  id: string;
  label: string;
}

@Component({
  selector: 'app-breadcrumb-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumb-nav.html',
  styleUrls: ['./breadcrumb-nav.css']
})
export class BreadcrumbNavComponent implements OnInit, OnDestroy {
  sections: Section[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'formacion', label: 'Formación' }
  ];

  activeSection: string = 'inicio';
  isVisible: boolean = false;
  private scrollListener: (() => void) | null = null;

  ngOnInit() {
    this.scrollListener = this.detectActiveSection.bind(this);
    window.addEventListener('scroll', this.scrollListener);
    this.detectActiveSection();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private detectActiveSection() {
    const scrollPosition = window.scrollY + 100;
    this.isVisible = window.scrollY > 300;

    // Get all section elements
    const aboutMeSection = document.querySelector('.AlgoSobreMi');
    const projectsSection = document.querySelector('.Proyectos');
    const techSection = document.querySelector('.Tecnologias');
    const formacionSection = document.querySelector('app-formacion')?.parentElement;

    const sections = [
      { element: aboutMeSection, id: 'sobre-mi' },
      { element: projectsSection, id: 'proyectos' },
      { element: techSection, id: 'tecnologias' },
      { element: formacionSection, id: 'formacion' }
    ];

    // Find which section is in view
    for (let section of sections) {
      if (section.element) {
        const rect = section.element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
          this.activeSection = section.id;
          break;
        }
      }
    }
  }

  navigate(sectionId: string) {
    const sectionMap: { [key: string]: string } = {
      'inicio': 'body',
      'sobre-mi': '.AlgoSobreMi',
      'proyectos': '.Proyectos',
      'tecnologias': '.Tecnologias',
      'formacion': 'app-formacion'
    };

    const selector = sectionMap[sectionId];
    const element = document.querySelector(selector);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }
}
