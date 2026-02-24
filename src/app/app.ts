import { Component } from '@angular/core';
import {HeaderComponent} from './head/header/header'
import { AboutMe } from './about-me/about-me';
import { Tecnologias } from './tecnologias/tecnologias';
import { Proyectos } from './proyectos/proyectos';
import { Formacion } from './formacion/formacion';
import { FooterComponent } from './footer/footer';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top';
import { AnimatedScrollDirective } from './directives/animated-scroll.directive';
import { BreadcrumbNavComponent } from './breadcrumb-nav/breadcrumb-nav';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu';
import { ParallaxDirective } from './directives/parallax.directive';
/*import { BotonScroll } from './boton-scroll/boton-scroll'; */

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,AboutMe,Tecnologias,Formacion,Proyectos,FooterComponent,ScrollToTopComponent,AnimatedScrollDirective,BreadcrumbNavComponent,HamburgerMenuComponent,ParallaxDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'Proyecto1';
}
