import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './head/header/header'
import { AboutMe } from './about-me/about-me';
import { Tecnologias } from './tecnologias/tecnologias';
import { Proyectos } from './proyectos/proyectos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,AboutMe,Tecnologias,Proyectos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'Proyecto1';
}
