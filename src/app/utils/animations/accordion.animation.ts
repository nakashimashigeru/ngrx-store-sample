import { animate, state, style, transition, trigger } from "@angular/animations";

export const accordionAnimation = trigger('accordion', [
  state('void', style({ 'max-height': 0, opacity: 0 })),
  state('*', style({ 'max-height': '1000px', opacity: 1 })),
  transition(':enter', animate('500ms ease-in')),
  transition(':leave', animate('500ms ease-out'))
]);
