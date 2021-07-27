/* eslint-disable */ 
import {
    GET_TOURS_TRAVEL_DETAILS,
    GET_TOURS_TRAVEL_DETAIL_ID,
    SET_TOURS_TRAVEL_LOADING
} from "./types";

const initialState = {
    loading: false,
    travelAllDetails: [],
    toursTravelDetail: {},
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_TOURS_TRAVEL_LOADING:
            return {
                ...state,
                loading : true,
                travelAllDetails : [],
                toursTravelDetail: {},
            }
        case GET_TOURS_TRAVEL_DETAILS:
            return {
                ...state,
                loading: false,
                travelAllDetails: action.payload
            }
        case GET_TOURS_TRAVEL_DETAIL_ID:
            return {
                ...state,
                loading: false,
                toursTravelDetail: action.payload
            }
        default:
            return state;
    }
}