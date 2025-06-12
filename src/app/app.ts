import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './head/header/header'
import { AboutMe } from './about-me/about-me';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,AboutMe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'Proyecto1';
}
