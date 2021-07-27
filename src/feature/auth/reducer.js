/* eslint-disable */ 
import {
    SET_CURRENT_USER,
    SET_CURRENT_USER_OFF
} from "./types";

const initialState = {
    isAuth: false,
    user : {}
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuth: true,
                user: action.payload
            }
        case SET_CURRENT_USER_OFF:
            return {
                ...state,
                isAuth: false,
                user: {}
            }
        default:
            return state;
    }
}