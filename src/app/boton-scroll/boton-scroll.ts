import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-scroll',
  imports: [],
  templateUrl: './boton-scroll.html',
  styleUrl: './boton-scroll.css'
})
export class BotonScroll {
scrollToTecnologias() {
  const body = document.body;

  // Reiniciar si ya tenía la clase (permite reusar)
  body.classList.remove('flash-effect');
  void body.offsetWidth;

  // ⚡ Disparo del parpadeo
  body.classList.add('flash-effect');

  // Limpieza de clase al terminar la animación (opcional)
  setTimeout(() => {
    body.classList.remove('flash-effect');
  }, 450); // un poco más que la duración de la animación

  // Scroll lento
  const elements = document.getElementsByClassName('Tecnologias');
  if (elements.length === 0) return;

  const target = elements[0] as HTMLElement;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 2000;
  let start: number | null = null;

  function step(timestamp: number) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);
    window.scrollTo(0, startPosition + distance * easeInOutQuad(percent));
    if (progress < duration) {
      requestAnimationFrame(step);
    }
  }

  function easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(step);
}

}