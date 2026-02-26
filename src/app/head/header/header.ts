import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageSelectorComponent } from '../../language-selector/language-selector';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../services/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,           
  imports: [CommonModule, LanguageSelectorComponent, TranslatePipe],                
  templateUrl: './header.html',
  styleUrls: ['./header.css'] 
})
export class HeaderComponent {
  constructor(public languageService: LanguageService) {}

  copiarCorreo(): void {
    const correo = 'caacevedo@unal.edu.co';
    navigator.clipboard.writeText(correo).then(() => {
      alert('Correo copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar el correo: ', err);
    });
  }
}