/* eslint-disable */ 
import {
    GET_ALL_TEMPLES,
    GET_TEMPLE_DETAIL_ID,
    SET_TEMPLE_LOADING,
} from "./types";

const initialState = {
    loading: false,
    templeAllDetails: [],
    templeDetail: {},
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_TEMPLE_LOADING:
            return {
                ...state,
                loading : true,
                templeAllDetails : [],
                templeDetail: {}
            }
        case GET_ALL_TEMPLES:
            return {
                ...state,
                loading: false,
                templeAllDetails: action.payload
            }
        case GET_TEMPLE_DETAIL_ID:
            return {
                ...state,
                loading: false,
                templeDetail: action.payload
            }
        default:
            return state;
    }
}