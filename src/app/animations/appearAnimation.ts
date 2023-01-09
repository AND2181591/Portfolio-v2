import { style, animate, animation } from '@angular/animations';

export const appearAnimation = animation([
  style({
    opacity: '{{ opacity }}', 
  }), 
  animate('{{ time }}')
]);
