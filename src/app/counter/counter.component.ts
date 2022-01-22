import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as CounterReducer from './state/counter.reducer';
import * as CounterActions from './state/counter.actions';
import { getCount } from './state';
import { CounterStore } from './counter.store';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  faCoffee = faCoffee;

  constructor(
    private store: Store<CounterReducer.State>,
    private counterStore: CounterStore
    ) {
    // this.count$ = store.select(getCount);
    this.count$ = counterStore.count$;
  }

  ngOnInit(): void {
  }

  increment() {
    // this.store.dispatch(new CounterActions.CountIncrement());
    this.counterStore.increment();
  }

  decrement() {
    // this.store.dispatch(new CounterActions.CountDecrement());
    this.counterStore.decrement();
  }

}
