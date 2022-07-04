import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    AUTHENTICATED_FAIL,
    AUTHENTICATED_SUCCESS,
    USER_LOADED_SUCCESS,
    UPDATE_USER,
    USER_LOADED_FAIL,
    UPDATE_PIC,
   
} from '../actiontypes/authactiontypes';

import { storetoken,removetoken } from '../../hooks/token';

const initialState = {
    token: null,
    isAuthenticated: null,
    user: null,
    
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                token:payload.token,
                user:payload.user,
                isAuthenticated: true,
            }
        case UPDATE_USER:
            return {
                ...state,
                token:payload.token,
                user:payload.user,
                isAuthenticated: true,
            }
        case UPDATE_PIC:
            console.log(payload);
            return {
                ...state,
                user:payload.user,
                isAuthenticated: true,
            }
        case LOGIN_SUCCESS:
            storetoken('access_token',payload.token);
            
            return {
                ...state,
                user:payload.user,
                isAuthenticated: true,
                token: payload.token,
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case SIGNUP_SUCCESS:
            
            storetoken('access_token',payload.token);
            return {
                ...state,
                user:payload.user,
                isAuthenticated: true,
                token: payload.token,
            }
        case AUTHENTICATED_FAIL:
           
            return {
                ...state,
                token:null,
                user:null,
                isAuthenticated: false,
            }
        case USER_LOADED_FAIL:
           
            return {
                ...state,
                token:null,
                user:null,
                isAuthenticated: false,
            }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            removetoken('access_token')
            return {
                ...state,
                token:null,
                isAuthenticated: false,
                user: null
            }
        default:
            return state
    }
}