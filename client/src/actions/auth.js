
import{ apiCall, setTokenHeader } from '../services/api';
import { addError, removeError } from './error';
import {SET_CURRENT_USER } from "../constants/ActionsTypes";

export function setCurrentUser(user){
    return{
        type:SET_CURRENT_USER,
        user
    }
}
export function setAuthorizationToken(token){
    setTokenHeader(token);
}
export function logout(){
    return dispatch => {
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}))
    }
}

export function authUser(type, userData){
    return dispatch => {
        return new Promise((resolve, reject)=>{
            return apiCall("post",  `/api/auth/${type}`, userData)
            .then(({token, ...user})=>{
                localStorage.setItem('jwtToken', token)
                setAuthorizationToken(token)
                dispatch(setCurrentUser(user))
                dispatch(removeError())
                resolve();
            })
            .catch(err =>{
                console.log(err)
                dispatch(addError(err.message));
                reject();
            })
            
        })
    }
}