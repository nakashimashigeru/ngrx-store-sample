import { animate, style, transition, trigger } from "@angular/animations";

export const verticalFlipAnimation = trigger('verticalFlip', [
  transition('void => *', [
    style({
      transform: 'scaleY(0)'
    }),
    animate('200ms ease-out', style({ transform: 'scaleY(1)' }))
  ]),
  transition('* => void', [
    style({
      transform: 'scaleY(1)'
    }),
    animate('200ms ease-out', style({ transform: 'scaleY(0)' }))
  ])
]);
