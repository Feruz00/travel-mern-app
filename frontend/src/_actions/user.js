import { user_auth, user_login_fail, user_login_request, user_login_success, user_logout, user_register_fail, user_register_request, user_register_success } from "../constants/all"
import axios from 'axios';

export const User_Login = (value) => async (dispatch) =>{
    dispatch({type: user_login_request});
    await axios.post('http://localhost:3001/api/users/login', value)
    .then( res => {
        if( res.loginSuccess ){
            dispatch({type: user_login_success});
        }
        else{
            dispatch({type: user_login_fail, payload: res.data.message});
        }
    } )
    .catch(error => { 
        dispatch({type: user_login_fail, error: error.message})
    })

}
export const User_Register = (value) => async (dispatch) =>{
    dispatch({type: user_register_request});
    await axios.post('http://localhost:3001/api/users/auth', value)
    .then( res => {
        console.log(res);
        if( res.success ){
            dispatch({type: user_register_success});
        }
        else{
            dispatch({type: user_register_fail, payload: res.data.message});
        }
    } )
    .catch(error => { 
        dispatch({type: user_register_fail, error: error.message})
    })
}

export const User_Auth = () => async (dispatch) =>{
    try {
        const {data} = await axios.get('http://localhost:3001/api/users/auth');
        dispatch({type: user_auth, payload: data});
    } catch (error) {

    }
}

export const User_Logout = () => async (dispatch) =>{
    try {
        const {data} = await axios.get('http://localhost:3001/api/users/logout');
        dispatch({type: user_logout, payload: data});
    } catch (error) {
    }
}
