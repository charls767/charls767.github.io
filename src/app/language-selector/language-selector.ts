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
    <div class="language-selector">
      <button 
        class="language-btn"
        [class.active]="currentLanguage === 'es'"
        (click)="changeLanguage('es')"
        title="Cambiar a Español"
        aria-label="Cambiar idioma a Español">
        <span class="flag">🇪🇸</span>
        <span class="text">ES</span>
      </button>
      <div class="separator"></div>
      <button 
        class="language-btn"
        [class.active]="currentLanguage === 'en'"
        (click)="changeLanguage('en')"
        title="Change to English"
        aria-label="Change language to English">
        <span class="flag">🇺🇸</span>
        <span class="text">EN</span>
      </button>
    </div>
  `,
  styles: [`
    .language-selector {
      display: flex;
      align-items: center;
      gap: 0;
      background: rgba(255, 255, 255, 0.08);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 50px;
      padding: 6px 8px;
      transition: all 0.3s ease;
    }

    .language-selector:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
    }

    .language-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 8px 14px;
      background: transparent;
      border: none;
      border-radius: 40px;
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    .language-btn:hover {
      color: rgba(255, 255, 255, 0.9);
      transform: scale(1.05);
    }

    .language-btn.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }

    .language-btn.active:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
    }

    .flag {
      font-size: 16px;
      display: inline-block;
    }

    .text {
      display: inline-block;
    }

    .separator {
      width: 1px;
      height: 20px;
      background: rgba(255, 255, 255, 0.2);
      margin: 0 4px;
    }

    @media (max-width: 768px) {
      .language-selector {
        padding: 6px 6px;
      }

      .language-btn {
        padding: 6px 10px;
        font-size: 12px;
      }

      .text {
        display: none;
      }

      .separator {
        height: 18px;
      }
    }
  `]
})
export class LanguageSelectorComponent implements OnInit, OnDestroy {
  currentLanguage: Language = 'es';
  private destroy$ = new Subject<void>();

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.language$
      .pipe(takeUntil(this.destroy$))
      .subscribe(lang => {
        this.currentLanguage = lang;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  changeLanguage(lang: Language): void {
    if (lang !== this.currentLanguage) {
      this.languageService.setLanguage(lang);
    }
  }
}
