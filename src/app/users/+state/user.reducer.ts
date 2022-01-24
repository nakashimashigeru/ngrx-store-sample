import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';

import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  loading: boolean;
  users: User[];
  error?: any;
}

export const initialState: State = {
  loading: false,
  users: []
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => {
    return { ...state, loading: true };
  }),
  on(UserActions.loadUsersSuccess, (state, { users }) => {
    return { ...state, loading: false, users: [...state.users, ...users] };
  }),
  on(UserActions.loadUsersFailure, (state, { error }) => {
    return { ...state, loading: false, error };
  })
);
