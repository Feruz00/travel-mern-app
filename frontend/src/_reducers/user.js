import { user_auth, user_login_fail, user_login_request, user_login_success, user_logout, user_register_fail, user_register_request, user_register_success } from "../constants/all";

function register_user( state = {} , action ){
    switch (action.type) {
        case user_register_request:
            return {loading: true, succes: false, err: null};
        case user_register_success:
            return {loading: false, success: action.payload};
        case user_register_fail:
            return {loading: false, succes: false, err: action.payload};
        default:
            return state;
    }
}

function login_user( state = {} , action ){
    switch (action.type) {
        case user_login_request:
            return {loading: true, succes: false, err: null};
        case user_login_success:
            return {loading: false, success: action.payload};
        case user_login_fail:
            return {loading: false, succes: false, err: action.payload};
        default:
            return state;
    }
}

function auth(state = null, action){
    switch (action.type) {
        case user_auth:
            return {user: action.payload}
        default:
            return state;
    }
}
function logout(state=false , action ){
    switch (action.payload) {
        case user_logout:
            return true;
        default:
            return state;
    }
}
export {login_user, register_user, auth, logout};