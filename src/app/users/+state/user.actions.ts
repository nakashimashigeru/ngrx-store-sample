import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const loadUsers = createAction(
  '[User/API] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User/API] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User/API] Load Users Failure',
  props<{ error: any }>()
);

export const loadUser = createAction(
  '[User/API] Load User',
  props<{ id: number }>()
);

export const loadUserSuccess = createAction(
  '[User/API] Load User Success',
  props<{ user: User }>()
);

export const loadUserFailure = createAction(
  '[User/API] Load User Failure',
  props<{ error: any }>()
);

export const createUser = createAction(
  '[User/API] Create User',
  props<{ user: User }>()
);

export const createUserSuccess = createAction(
  '[User/API] Create User Success',
  props<{ user: User }>()
);

export const createUserFailure = createAction(
  '[User/API] Create User Failure',
  props<{ error: any }>()
);

export const updateUser = createAction(
  '[User/API] Update User',
  props<{ id: number; user: User; }>()
);

export const updateUserSuccess = createAction(
  '[User/API] Update User Success',
  props<{ user: User }>()
);

export const updateUserFailure = createAction(
  '[User/API] Update User Failure',
  props<{ error: any }>()
);

export const deleteUser = createAction(
  '[User/API] Delete User',
  props<{ id: number }>()
);

export const deleteUserSuccess = createAction(
  '[User/API] Delete User Success',
  props<{ id: number }>()
);

export const deleteUserFailure = createAction(
  '[User/API] Delete User Failure',
  props<{ error: any }>()
);
