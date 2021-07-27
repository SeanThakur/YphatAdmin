/* eslint-disable */ 
import {
    GET_ALL_USERS,
    SET_USERS_LOADING
} from "./types";

const initialState = {
    isLoad: false,
    users: []
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_USERS_LOADING:
            return {
                ...state,
                isLoad: true,
                users: []
            }
        case GET_ALL_USERS:
            return {
                ...state,
                isLoad: false,
                users: action.payload
            }
        default:
            return state;
    }
}