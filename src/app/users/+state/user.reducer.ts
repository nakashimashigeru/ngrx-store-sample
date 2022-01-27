import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';

import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  loading: boolean;
  users: User[];
  user: User;
  error?: any;
}

export const initialState: State = {
  loading: false,
  users: [],
  user: {
    id: 0,
    name: ''
  },
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
  }),
  on(UserActions.loadUser, state => {
    return { ...state, loading: true };
  }),
  on(UserActions.loadUserSuccess, (state, { user }) => {
    return { ...state, loading: false, user: user };
  }),
  on(UserActions.loadUserFailure, (state, { error }) => {
    return { ...state, loading: false, error: error };
  }),
  on(UserActions.createUser, state => {
    return { ...state, loading: true };
  }),
  on(UserActions.createUserSuccess, (state, { user }) => {
    return { ...state, loading: false, user: user, error: null };
  }),
  on(UserActions.createUserFailure, (state, { error }) => {
    return { ...state, loading: false, error: error };
  }),
  on(UserActions.deleteUser, state => {
    return { ...state, loading: true };
  }),
  on(UserActions.deleteUserSuccess, (state, { id }) => {
    return { ...state, loading: false, users: state.users.filter(x => x.id !== id) };
  }),
  on(UserActions.deleteUserFailure, (state, { error }) => {
    return { ...state, loading: false, error: error };
  })
);
