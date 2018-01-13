import { keyframes, style } from '@angular/animations';

export const slideOutLeft = [
  style({transform: 'translate3d(0, 0, 0)', offset: 0}),
  style({transform: 'translate3d(-150%, 0, 0)', opacity: 0, offset: 1}),
];

export const zoomOutRight = [
  style({transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)', offset: .4}),
  style({transform: 'scale(.1) translate3d(2000px, 0, 0)', 'transform-origin': 'right center', offset: 1}),
];
