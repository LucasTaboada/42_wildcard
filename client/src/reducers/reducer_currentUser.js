import { SET_CURRENT_USER } from '../constants/ActionsTypes';

const DEFAULT_STATE = {
    isAuthenticated:false, // hopefully be true, when logged in 
    user: {} // all the user info when logged in
}

export default ( state = DEFAULT_STATE, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
        return{
            isAuthenticated: !!Object.keys(action.user).length,
            user:action.user
        };
        default:
            return state;
    }
}