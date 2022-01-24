import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, userFeatureKey } from './user.reducer';

const getState = createFeatureSelector<State>(userFeatureKey);
export const getLoading = createSelector(getState, state => state.loading);
export const getUsers = createSelector(getState, state => state.users);
