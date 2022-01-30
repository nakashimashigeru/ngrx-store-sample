import { animate, style, transition, trigger } from "@angular/animations";

const open = style({
  opacity: '1',
  overflow: 'hidden',
  height: '*'
});

const close = style({
  opacity: '0',
  overflow: 'hidden',
  height: '0px'
});

export const expandAnimation = trigger('expand', [
  transition(':enter', [close, animate('200ms ease-in-out', open)]),
  transition(':leave', [open, animate('200ms ease-in-out', close)])
]);
