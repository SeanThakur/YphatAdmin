/* eslint-disable */ 
import {
    GET_ALL_CHARITY,
    SET_CHARITY_LOADING,
    GET_CHARITY_DETAIL_ID,
} from "./types";

const initialState = {
    loading: false,
    charityAllDetails: [],
    charityDetail: {},
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_CHARITY_LOADING:
            return {
                ...state,
                loading : true,
                charityAllDetails : [],
                charityDetail: {},
            }
        case GET_ALL_CHARITY:
            return {
                ...state,
                loading: false,
                charityAllDetails: action.payload
            }
        case GET_CHARITY_DETAIL_ID:
            return {
                ...state,
                loading: false,
                charityDetail: action.payload
            }
        default:
            return state;
    }
}