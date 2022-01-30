import { animate, state, style, transition, trigger } from "@angular/animations";

export const fadeInAnimation = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),
  state('*', style({ opacity: 1 })),
  transition(':enter', animate('500ms ease-in'))
]);
