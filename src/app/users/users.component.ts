import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserFacade } from './+state/user.facade';
import { User } from './models/user.model';

import * as UserActions from './../users/+state/user.actions';
import { Router } from '@angular/router';
import { expandAnimation } from '../utils/animations/expand.animation';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { verticalFlipAnimation } from '../utils/animations/bounce.animation';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [expandAnimation, verticalFlipAnimation]
})
export class UsersComponent implements AfterViewInit, OnDestroy {

  users$: Observable<User[]> = this.userFacade.users$;

  showGuidance: boolean = false;

  faExclamationTriangle = faExclamationTriangle;

  public get loadUsers() {
    return this.userFacade.loadUsers();
  }

  public readonly existUser$: Observable<boolean> = this.userFacade.users$.pipe(
    map((entity) => {
      return Boolean(entity.length > 0);
    })
  );

  constructor(
    private userFacade: UserFacade,
    private store: Store,
    private router: Router
  ) {
    this.loadUsers;
  }

  ngAfterViewInit(): void {
    this.loadUsers;
    this.users$ = this.userFacade.users$;
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
