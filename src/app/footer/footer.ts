import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/charls767',
      icon: 'images/github.png',
      title: 'GitHub'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/carlos-alberto-acevedo-carmona-5178b02a4/',
      icon: 'images/linkedin.png',
      title: 'LinkedIn'
    },
    {
      name: 'Email',
      url: 'mailto:caacevedo@unal.edu.co',
      icon: 'images/email.png',
      title: 'Email'
    }
  ];
}
