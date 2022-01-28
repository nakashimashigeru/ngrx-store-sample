import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserFacade } from './+state/user.facade';
import { User } from './models/user.model';

import * as UserActions from './../users/+state/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  users$: Observable<User[]> = this.userFacade.users$;

  public get loadUsers() {
    return this.userFacade.loadUsers();
  }

  constructor(
    private userFacade: UserFacade,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers;
  }

  ngOnDestroy(): void {
    this.userFacade.initializeLoadUsers();
  }

  updateUser(id: number) {
    this.router.navigate([`/users/edit/${id}`]);
  }

  deleteUser(id: number) {
    this.store.dispatch(UserActions.deleteUser({ id: id }));
  }
}
