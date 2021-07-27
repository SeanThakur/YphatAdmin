/* eslint-disable */ 
import {
    GET_ALL_MEDITATION_DETAILS,
    GET_BUDDIST_MEDITATION_DETAIL_ID,
    SET_MEDITATION_LOADING,
} from "./types";

const initialState = {
    loading: false,
    meditationAllDetails: [],
    buddistMeditationDetail: {},
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_MEDITATION_LOADING:
            return {
                ...state,
                loading : true,
                meditationAllDetails : [],
                buddistMeditationDetail: {},
            }
        case GET_ALL_MEDITATION_DETAILS:
            return {
                ...state,
                loading: false,
                meditationAllDetails: action.payload
            }
        case GET_BUDDIST_MEDITATION_DETAIL_ID:
            return {
                ...state,
                loading: false,
                buddistMeditationDetail: action.payload
            }
        default:
            return state;
    }
}