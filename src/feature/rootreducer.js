/* eslint-disable */ 
import {combineReducers} from "redux";

import errorReducer from './error/reducer'
import authReducer from './auth/reducer'
import userReducer from './user/reducer'
import charityReducer from './charity/reducer'
import templeReducer from './temple/reducer'
import meditationReducer from './meditation/reducer'
import travelReducer from './travel/reducer'
import eventsReducer from './events/reducer'
import shopReducer from './veganShop/reducer'

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    fetchedUser: userReducer,
    charityInfo: charityReducer,
    templeInfo: templeReducer,
    meditationInfo: meditationReducer,
    travelInfo: travelReducer,
    EventsInfo: eventsReducer,
    veganShopInfo: shopReducer
})