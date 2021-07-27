/* eslint-disable */ 
import {
    GET_EVENT_DETAILS,
    GET_EVENT_DETAIL_ID,
    SET_EVENT_LOADING
} from "./types";

const initialState = {
    loading: false,
    eventsAllDetails: [],
    eventDetail: {},
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_EVENT_LOADING:
            return {
                ...state,
                loading : true,
                eventsAllDetails : [],
                eventDetail: {},
            }
        case GET_EVENT_DETAILS:
            return {
                ...state,
                loading: false,
                eventsAllDetails: action.payload
            }
        case GET_EVENT_DETAIL_ID:
            return {
                ...state,
                loading: false,
                eventDetail: action.payload
            }
        default:
            return state;
    }
}