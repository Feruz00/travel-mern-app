
import {combineReducers} from 'redux';
import { auth, login_user, logout, register_user } from './user';

export const Reducers = combineReducers({
    login: login_user,
    register: register_user,
    user: auth,
    logout: logout
});