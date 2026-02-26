import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';
import { TranslatePipe } from '../services/translate.pipe';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {
  constructor(public languageService: LanguageService) {}
}
