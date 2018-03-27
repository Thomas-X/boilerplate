import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user, { defaultState as userInitialState } from './user';

export default combineReducers({
    form: formReducer,
    user,
} as any);

export interface ReduxStateUser {
    isLoggedIn: boolean;
    token: string;
    error: any;
}

export interface ReduxState {
      user: ReduxStateUser;
}

export interface ActionType {
    type: string;
    payload: any;
}

export const initialState = {
    user: {
        ...userInitialState,
    },
};