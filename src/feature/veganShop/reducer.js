/* eslint-disable */ 
import {
    GET_VEGAN_SHOP_DETAILS,
    GET_VEGAN_SHOP_DETAIL_ID,
    SET_VEGAN_SHOP_LOADING,
} from "./types";

const initialState = {
    loading: false,
    VeganShopAllDetails: [],
    veganShopDetail: {},
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case SET_VEGAN_SHOP_LOADING:
            return {
                ...state,
                loading : true,
                VeganShopAllDetails : [],
                veganShopDetail: {},
            }
        case GET_VEGAN_SHOP_DETAILS:
            return {
                ...state,
                loading: false,
                VeganShopAllDetails: action.payload
            }
        case GET_VEGAN_SHOP_DETAIL_ID:
            return {
                ...state,
                loading: false,
                veganShopDetail: action.payload
            }
        default:
            return state;
    }
}