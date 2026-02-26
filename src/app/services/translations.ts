export const translations = {
  es: {
    // Header & Navigation
    inicio: 'Inicio',
    sobreMi: 'Sobre mí',
    tecnologias: 'Tecnologías',
    proyectos: 'Proyectos',
    formacion: 'Formación',
    contacto: 'Contacto',
    ingeniero: 'Ingeniero',
    desarrollador: 'Desarrollador',

    // About Me
    sobreMiTitulo: 'Sobre mí',
    sobreMiDescripcion: 'Soy Carlos A. Acevedo, ingeniero apasionado por la tecnología, el desarrollo de software y la resolución de problemas complejos. Me gusta aprender constantemente y construir soluciones que combinen lógica, creatividad y eficiencia. Creo firmementente que la curiosidad, la disciplina y la ética son pilares fundamentales en mi crecimiento personal y profesional.',

    // Technologies
    tecnologiasTitulo: 'Tecnologías',
    frontend: 'Frontend',
    backend: 'Backend',
    aprendiendo: 'Aprendiendo',
    herramientas: 'Herramientas',

    // Projects
    proyectosTitulo: 'Proyectos',
    verDemo: 'Ver Demo',
    verCodigo: 'Ver Código',

    // Formation
    formacionTitulo: 'Formación',
    educacion: 'Educación',
    cursos: 'Cursos',

    // Language Toggle
    idioma: 'Idioma',
    espanol: 'Español',
    ingles: 'English',
  },
  en: {
    // Header & Navigation
    inicio: 'Home',
    sobreMi: 'About Me',
    tecnologias: 'Technologies',
    proyectos: 'Projects',
    formacion: 'Formation',
    contacto: 'Contact',
    ingeniero: 'Engineer',
    desarrollador: 'Developer',

    // About Me
    sobreMiTitulo: 'About Me',
    sobreMiDescripcion: 'I\'m Carlos A. Acevedo, an engineer passionate about technology, software development, and solving complex problems. I like to learn constantly and build solutions that combine logic, creativity, and efficiency. I firmly believe that curiosity, discipline, and ethics are fundamental pillars in my personal and professional growth.',

    // Technologies
    tecnologiasTitulo: 'Technologies',
    frontend: 'Frontend',
    backend: 'Backend',
    aprendiendo: 'Learning',
    herramientas: 'Tools',

    // Projects
    proyectosTitulo: 'Projects',
    verDemo: 'View Demo',
    verCodigo: 'View Code',

    // Formation
    formacionTitulo: 'Formation',
    educacion: 'Education',
    cursos: 'Courses',

    // Language Toggle
    idioma: 'Language',
    espanol: 'Español',
    ingles: 'English',
  }
};

export type TranslationKey = keyof typeof translations.es;
