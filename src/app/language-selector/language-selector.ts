import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../services/language.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-fab" [class.expanded]="isExpanded">
      <!-- Botón flotante principal -->
      <button 
        class="fab-button"
        (click)="toggleMenu()"
        title="Language"
        aria-label="Change language">
        <span class="fab-icon">🌍</span>
      </button>

      <!-- Opciones desplegables -->
      <div class="fab-menu" *ngIf="isExpanded">
        <button 
          class="fab-option"
          [class.active]="currentLanguage === 'es'"
          (click)="changeLanguage('es')"
          title="Español">
          <span class="flag">🇪🇸</span>
          <span class="lang-label">ES</span>
        </button>
        <button 
          class="fab-option"
          [class.active]="currentLanguage === 'en'"
          (click)="changeLanguage('en')"
          title="English">
          <span class="flag">🇺🇸</span>
          <span class="lang-label">EN</span>
        </button>
      </div>

      <!-- Overlay para cerrar el menú -->
      <div 
        class="fab-backdrop" 
        *ngIf="isExpanded"
        (click)="closeMenu()">
      </div>
    </div>
  `,
  styles: [`
    .language-fab {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 1000;
    }

    .fab-button {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
      border: 2px solid rgba(255, 255, 255, 0.2);
      color: white;
      cursor: pointer;
      font-size: 24px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .fab-button:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
      background: linear-gradient(135deg, #3d4758 0%, #2a303c 100%);
      border-color: rgba(255, 255, 255, 0.3);
    }

    .fab-button:active {
      transform: scale(0.95);
    }

    .fab-icon {
      display: inline-block;
      animation: spin 0.6s ease-in-out;
    }

    @keyframes spin {
      from { transform: rotateY(0deg); }
      to { transform: rotateY(360deg); }
    }

    .fab-menu {
      position: absolute;
      bottom: 70px;
      right: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
      animation: slideUp 0.3s ease-out;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .fab-option {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
      border: 2px solid rgba(255, 255, 255, 0.2);
      color: white;
      cursor: pointer;
      font-size: 20px;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2px;
    }

    .fab-option:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.4);
    }

    .fab-option.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-color: rgba(102, 126, 234, 0.5);
      box-shadow: 0 2px 12px rgba(102, 126, 234, 0.3);
    }

    .flag {
      font-size: 24px;
      display: block;
    }

    .lang-label {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .fab-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      animation: fadeIn 0.2s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @media (max-width: 768px) {
      .language-fab {
        bottom: 1.5rem;
        right: 1.5rem;
      }

      .fab-button {
        width: 50px;
        height: 50px;
        font-size: 20px;
      }

      .fab-option {
        width: 46px;
        height: 46px;
        font-size: 18px;
      }
    }

    @media (max-width: 480px) {
      .language-fab {
        bottom: 1rem;
        right: 1rem;
      }

      .fab-button {
        width: 48px;
        height: 48px;
        font-size: 18px;
      }

      .fab-option {
        width: 44px;
        height: 44px;
        font-size: 16px;
      }
    }
  `]
})
export class LanguageSelectorComponent implements OnInit, OnDestroy {
  currentLanguage: Language = 'es';
  isExpanded = false;
  private destroy$ = new Subject<void>();

  constructor(private languageService: LanguageService) {
    // Inicializar con el idioma actual del servicio
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  ngOnInit(): void {
    // Suscribirse a cambios de idioma
    this.languageService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe(lang => {
        this.currentLanguage = lang;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  toggleMenu(): void {
    this.isExpanded = !this.isExpanded;
  }

  closeMenu(): void {
    this.isExpanded = false;
  }

  changeLanguage(lang: Language): void {
    this.languageService.setLanguage(lang);
    this.closeMenu();
  }
}

