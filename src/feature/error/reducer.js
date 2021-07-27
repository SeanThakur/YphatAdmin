/* eslint-disable */ 
import {
    GET_ERROR,
    SET_ERROR_CLEAN
} from "./types";

const initialState = {}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_ERROR:
            return action.payload;
        case SET_ERROR_CLEAN:
            return {};
        default:
            return state;
    }
}