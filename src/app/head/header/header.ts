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
  copyNotification = { show: false, message: '' };

  copiarCorreo(): void {
    const correo = 'caacevedo@unal.edu.co';
    navigator.clipboard.writeText(correo).then(() => {
      this.showNotification('¡Correo copiado!');
    }).catch(err => {
      this.showNotification('Error al copiar', true);
      console.error('Error al copiar el correo: ', err);
    });
  }

  private showNotification(message: string, isError = false) {
    this.copyNotification.message = message;
    this.copyNotification.show = true;
    
    setTimeout(() => {
      this.copyNotification.show = false;
    }, 2000);
  }
}