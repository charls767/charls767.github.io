import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAnimatedScroll]',
  standalone: true
})
export class AnimatedScrollDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const element = this.el.nativeElement;
    
    // Add initial styles
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger animation when element enters viewport
          element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          
          // Stop observing after animation
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    observer.observe(element);
  }
}
