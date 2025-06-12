import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,           
  imports: [CommonModule],                
  templateUrl: './header.html',
  styleUrls: ['./header.css'] 
})
export class HeaderComponent {
  copiarCorreo(): void {
    const correo = 'caacevedo@unal.edu.co';
    navigator.clipboard.writeText(correo).then(() => {
      alert('Correo copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar el correo: ', err);
    });
  }
}