# 🌍 Sistema de Internacionalización (i18n)

Este documento explica cómo funciona el sistema de traducción multiidioma implementado en la aplicación.

## 📁 Estructura de Archivos

```
src/app/
├── services/
│   ├── language.service.ts      # Servicio de gestión de idioma
│   ├── translations.ts           # Archivo de traducciones (ES/EN)
│   └── translate.pipe.ts         # Pipe para traducir en templates
├── language-selector/
│   └── language-selector.ts     # Componente del selector de idioma
└── [otros componentes]
```

## 🎯 Características

- ✅ Soporte para **Español** e **Inglés**
- ✅ Persistencia en **localStorage** (el idioma se recuerda)
- ✅ **Selector visual** minimalista y responsivo
- ✅ Actualización reactiva en tiempo real
- ✅ Fácil de extender con nuevos idiomas

## 🚀 Cómo Usar

### 1. Usar el pipe de traducción en Templates

```html
<h1>{{ 'sobreMiTitulo' | translate }}</h1>
<p>{{ 'sobreMiDescripcion' | translate }}</p>
```

### 2. Agregar nuevas traducciones

Abre el archivo [translations.ts](../../src/app/services/translations.ts) y agrega nuevas claves:

```typescript
export const translations = {
  es: {
    miLlave: 'Mi texto en español',
  },
  en: {
    miLlave: 'My text in English',
  }
};
```

### 3. Cambiar idioma programáticamente

```typescript
import { LanguageService } from '../services/language.service';

export class MiComponente {
  constructor(private languageService: LanguageService) {}

  cambiarIdioma() {
    this.languageService.setLanguage('en'); // Cambiar a inglés
    // o
    this.languageService.toggleLanguage();  // Alternar entre idiomas
  }
}
```

## 📝 Agregar Traducciones a un Componente

### Paso 1: Importar servicios

```typescript
import { LanguageService } from '../services/language.service';
import { TranslatePipe } from '../services/translate.pipe';

@Component({
  selector: 'app-mi-componente',
  imports: [CommonModule, TranslatePipe], // Agregar TranslatePipe
  templateUrl: './mi-componente.html',
  styleUrl: './mi-componente.css'
})
export class MiComponente {
  constructor(public languageService: LanguageService) {}
}
```

### Paso 2: Usar en el template

```html
<h2>{{ 'miTitulo' | translate }}</h2>
<p>{{ 'miDescripcion' | translate }}</p>
```

### Paso 3: Agregar en translations.ts

```typescript
export const translations = {
  es: {
    miTitulo: 'Mi Título',
    miDescripcion: 'Mi Descripción',
  },
  en: {
    miTitulo: 'My Title',
    miDescripcion: 'My Description',
  }
};
```

## 🎨 Selector de Idioma

El componente `LanguageSelectorComponent` se incluye automáticamente en el Header. Características:

- **Botones con banderas** (🇪🇸 🇺🇸)
- **Diseño responsive** (muestra/oculta texto en móvil)
- **Efectos hover** con gradientes
- **Glassmorphism** moderno

## 💾 Persistencia

El idioma seleccionado se guarda en `localStorage` con la clave `language`:

```javascript
localStorage.getItem('language') // Obtener idioma actual
localStorage.setItem('language', 'es') // Establecer idioma
```

Al cargar la página, se restaura el idioma guardado o por defecto es Español.

## 🔄 Reactividad

El sistema usa RxJS `BehaviorSubject` para actualizaciones reactivas:

```typescript
this.languageService.language$.subscribe(lang => {
  // Se ejecuta cuando cambia el idioma
  console.log('Idioma cambiado a:', lang);
});
```

## 📱 Responsividad

El selector de idioma es completamente responsive:
- **Desktop**: Muestra banderas y etiquetas
- **Tablet**: Muestra banderas y etiquetas (menor tamaño)
- **Mobile**: Solo muestra banderas (con espaciado optimizado)

## 🌍 Extensión a Otros Idiomas

Para agregar un nuevo idioma (ej. Portugués):

1. Agrega en [translations.ts](../../src/app/services/translations.ts):
```typescript
export const translations = {
  es: { /* ... */ },
  en: { /* ... */ },
  pt: { /* Nuevas traducciones */ }
};
```

2. Actualiza el type:
```typescript
export type Language = 'es' | 'en' | 'pt';
```

3. Agrega botones en [language-selector.ts](../../src/app/language-selector/language-selector.ts)

## 📚 Archivo de Traducciones Actual

El archivo de traducciones incluye:
- **Header & Navigation**: Navegación principal
- **About Me**: Sección de presentación
- **Technologies**: Títulos de tecnologías
- **Projects**: Textos de proyectos
- **Formation**: Educación y formación
- **Language Toggle**: Etiquetas del seletor

---

**Últimas actualización**: Febrero 2026
