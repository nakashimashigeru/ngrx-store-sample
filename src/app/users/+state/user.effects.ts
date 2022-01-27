import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
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
            users => UserActions.loadUsersSuccess({ users: users })
          ),
          catchError(
            error => of(UserActions.loadUsersFailure({ error }))
          )
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      switchMap((action) =>
        this.userService.getUser(action.id).pipe(
          map(
            (user: any) => UserActions.loadUserSuccess({ user: user })
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
      switchMap((action) =>
        this.userService.createUser(action.user).pipe(
          map(
            (user: any) => UserActions.createUserSuccess({ user: user })
          ),
          catchError(
            error => of(UserActions.createUserFailure({ error }))
          )
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      switchMap((action) =>
        this.userService.updateUser(action.id, action.user).pipe(
          map(
            (user: any) => UserActions.updateUserSuccess({ user: user })
          ),
          catchError(
            error => of(UserActions.updateUserFailure({ error }))
          )
        )
      )
    )
  );

  updateUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.updateUserSuccess),
        tap(action => {
          console.log(action.type);
        })
      ),
    { dispatch: false }
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap((action) =>
        this.userService.deleteUser(action.id).pipe(
          map(
            (user: any) => UserActions.deleteUserSuccess({ id: action.id })
          ),
          catchError(
            error => of(UserActions.deleteUserFailure({ error }))
          )
        )
      )
    )
  );
}
