import { StateType } from 'typesafe-actions';
import { combineReducers } from 'redux';

import { counterReducer as counter } from './counter/counter.reducer';

export const reducer = combineReducers({ counter });

export type RootState = StateType<typeof reducer>;

export { RootAction } from './root.action';
