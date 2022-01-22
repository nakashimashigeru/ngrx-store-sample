import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface State {
  count: number;
}

@Injectable()
export class CounterStore extends ComponentStore<State> {
  constructor() {
    super({ count: 0 });
  }

  public readonly count$: Observable<number> = this.select((state) => state.count);

  public readonly increment = this.updater((state) => ({ count: state.count + 1 }));

  public readonly decrement = this.updater((state) => ({ count: state.count - 1 }));
}
