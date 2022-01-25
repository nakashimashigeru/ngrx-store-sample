import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map(
            result => UserActions.loadUsersSuccess({ users: result })
          ),
          catchError(
            error => of(UserActions.loadUsersFailure({ error }))
          )
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUser),
      switchMap((result) =>
        this.userService.createUser(result.user).pipe(
          map(
            (user: any) => UserActions.createUserSuccess({ user: user })
          ),
          catchError(
            error => of(UserActions.loadUsersFailure({ error }))
          )
        )
      )
    )
  );
}
