import { Component } from '@angular/core';
import {HeaderComponent} from './head/header/header'
import { AboutMe } from './about-me/about-me';
import { Tecnologias } from './tecnologias/tecnologias';
import { Proyectos } from './proyectos/proyectos';
import { Formacion } from './formacion/formacion';
import { LanguageSelectorComponent } from './language-selector/language-selector';
/*import { BotonScroll } from './boton-scroll/boton-scroll'; */

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,AboutMe,Tecnologias,Formacion,Proyectos, LanguageSelectorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'Proyecto1';
}
