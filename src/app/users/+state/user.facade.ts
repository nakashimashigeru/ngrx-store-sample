import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as UserSelectors from './user.selectors';
import * as UserActions from './user.actions';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  loading$ = this.store.pipe(select(UserSelectors.getLoading));
  users$ = this.store.pipe(select(UserSelectors.getUsers));
  user$ = this.store.pipe(select(UserSelectors.getUser));

  constructor(private store: Store) {}

  initializeLoadUsers() {
    this.store.dispatch(UserActions.initializeLoadUsers());
  }

  loadUsers() {
    this.store.dispatch(UserActions.loadUsers());
  }

  loadUser(id: number) {
    this.store.dispatch(UserActions.loadUser({ id: id }));
  }
}
