import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const element = this.el.nativeElement;
    
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const parallaxValue = scrollPosition * 0.5; // Adjust speed (0.5 = slower)
      element.style.backgroundPosition = `center ${-parallaxValue}px`;
    });
  }
}
