/* eslint-disable */ 
import axios from 'axios';
import setAuthToken from 'src/utils/setAuthToken'
import jwt_decode from "jwt-decode";

import {
    SET_CURRENT_USER,
    SET_CURRENT_USER_OFF,
} from './auth/types'

import {
    GET_ERROR,
    SET_ERROR_CLEAN
} from './error/types'

import { 
    GET_ALL_USERS,
    SET_USERS_LOADING
} from './user/types';

import { 
    GET_ALL_CHARITY, 
    SET_CHARITY_LOADING 
} from './charity/types';

import { 
    GET_ALL_TEMPLES, 
    SET_TEMPLE_LOADING 
} from './temple/types';

import { 
    GET_ALL_MEDITATION_DETAILS,
    SET_MEDITATION_LOADING
} from './meditation/types';

import { 
    GET_TOURS_TRAVEL_DETAILS, 
    SET_TOURS_TRAVEL_LOADING 
} from './travel/types';

import { 
    GET_VEGAN_SHOP_DETAILS, 
    SET_VEGAN_SHOP_LOADING 
} from './veganShop/types';

import {
    GET_EVENT_DETAILS,
    SET_EVENT_LOADING
} from './events/types'

const HOST = `http://18.224.141.133/api`;

const REACT_API_TOKEN = localStorage.YT_Token

export const setLogin = (data) => async dispatch => {

    try{

        const config = {
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.post(
            `${HOST}/users/admin/signin`, 
            data, 
            config
        ).then((res) => {
            const {token} = res.data.data;
            localStorage.setItem("YT_Token", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
            dispatch(setErrorCleanup());
        })

    } catch(err) {
        if(err.response.data.code !== 200) {
            dispatch({
                type: GET_ERROR,
                payload: err.response.data
            })
        }
    }
}

export const setCurrentUser = (data) => {
    return{
        type: SET_CURRENT_USER,
        payload: data
    }
}

export const setLogout = () => dispatch => {
    localStorage.removeItem("YT_Token");
    dispatch(setCurrentUserOff());
}

export const setCurrentUserOff = () => {
    return{
        type: SET_CURRENT_USER_OFF
    }
}

export const setErrorCleanup = () => dispatch => {
    dispatch({
        type: SET_ERROR_CLEAN
    }) 
}

export const getAllUsers = () => async dispatch => {
    try {

        dispatch({
            type: SET_USERS_LOADING
        })

        const config = {
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.get(
            `${HOST}/users/details`, 
            config
        ).then((res) => {
            dispatch({
                type: GET_ALL_USERS,
                payload: res.data.data
            })
        })

    } catch(error) {
        if(error.response.data.code !== 200) {
            dispatch({
                type: GET_ERROR,
                payload: error.response.data
            })
        }
    }
}

export const setUserStatus = (id, value) => async dispatch => {
    try {

        const config = {
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.put(
            `${HOST}/users/status/${id}?active=${value}`, 
            config
        )

    } catch(error) {
        if(error.response.data.code !== 200) {
            dispatch({
                type: GET_ERROR,
                payload: error.response.data
            })
        }
    }
}

//Charity Functions

export const getAllCharities = () => async dispatch => {

    try {
        dispatch({
            type: SET_CHARITY_LOADING,
        });

        const config = {
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.get(
            `${HOST}/charities`, 
            config
        )
        .then((res) => dispatch({
            type: GET_ALL_CHARITY,
            payload: res.data.code === 200 && res.data.data 
        }))
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};

export const setCharityDetail = (data, navigate) => async dispatch => {

    try {

        dispatch({
            type: SET_CHARITY_LOADING,
        });

        const config = {
            headers:{
                Authorization: `Bearer ${REACT_API_TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.post(
            `${HOST}/charities`, 
            data,
            config
        )
        .then(() => navigate('/app/charity'))
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};

//Temple Functions

export const getAllTemples = () => async dispatch => {

    try {

        dispatch({
            type: SET_TEMPLE_LOADING,
        });

        const config = {
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.get(
            `${HOST}/temples`, 
            config
        )
        .then((res) => dispatch({
            type: GET_ALL_TEMPLES,
            payload: res.data.code === 200 && res.data.data 
        }))
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};

export const setTempleDetail = (data, navigate) => async dispatch => {

    try {

        dispatch({
            type: SET_TEMPLE_LOADING,
        });

        const config = {
            headers:{
                Authorization: `Bearer ${REACT_API_TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.post(
            `${HOST}/temples`, 
            data,
            config
        )
        .then(() => navigate('/app/temple'))
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};

//Meditation Functions

export const getAllMeditations = () => async dispatch => {

    try {

        dispatch({
            type: SET_MEDITATION_LOADING,
        });

        const config = {
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.get(
            `${HOST}/buddhist-meditation-classes`, 
            config
        )
        .then((res) => dispatch({
            type: GET_ALL_MEDITATION_DETAILS,
            payload: res.data.code === 200 && res.data.data 
        }))
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};

export const setBuddistMeditationDetail = (data, navigate) => async dispatch => {

    try {

        dispatch({
            type: SET_MEDITATION_LOADING,
        });

        const config = {
            headers:{
                Authorization: `Bearer ${REACT_API_TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.post(
            `${HOST}/buddhist-meditation-classes`, 
            data,
            config
        )
        .then(() => navigate('/app/meditation'))
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};

//Travels Functions

export const getAllTravels = () => async dispatch => {

    try {
        dispatch({
            type: SET_TOURS_TRAVEL_LOADING,
        });

        const config = {
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.get(
            `${HOST}/tour-travels`, 
            config
        )
        .then((res) => dispatch({
            type: GET_TOURS_TRAVEL_DETAILS,
            payload: res.data.code === 200 && res.data.data 
        }))
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};

export const setToursAndTravelDetail = (data, navigate) => async dispatch => {

    try {

        dispatch({
            type: SET_TOURS_TRAVEL_LOADING,
        });

        const config = {
            headers:{
                Authorization: `Bearer ${REACT_API_TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.post(
            `${HOST}/tour-travels`, 
            data,
            config
        )
        .then(() => navigate('/app/travel'))
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};

//Vegan Shop Function

export const getAllVeganShops = () => async dispatch => {

    try {

        dispatch({
            type: SET_VEGAN_SHOP_LOADING,
        });

        const config = {
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.get(
            `${HOST}/vegan-shops`, 
            config
        )
        .then((res) => dispatch({
            type: GET_VEGAN_SHOP_DETAILS,
            payload: res.data.code === 200 && res.data.data 
        }))
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};

export const setVeganShopDetail = (data, navigate) => async dispatch => {

    try {

        dispatch({
            type: SET_VEGAN_SHOP_LOADING,
        });

        const config = {
            headers:{
                Authorization: `Bearer ${REACT_API_TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.post(
            `${HOST}/vegan-shops`, 
            data,
            config
        )
        .then(() => navigate('/app/shop'))
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};

//Events Functions

export const getAllEvents = () => async dispatch => {

    try {
        dispatch({
            type: SET_EVENT_LOADING,
        });

        const config = {
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.get(
            `${HOST}/events`, 
            config
        )
        .then((res) => dispatch({
            type: GET_EVENT_DETAILS,
            payload: res.data.code === 200 && res.data.data 
        }))
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};

export const setEventsActivitiesInfo = (data, navigate) => async dispatch => {

    try {

        dispatch({
            type: SET_EVENT_LOADING,
        });

        const config = {
            headers:{
                Authorization: `Bearer ${REACT_API_TOKEN}`,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }

        await axios.post(
            `${HOST}/events`, 
            data,
            config
        )
        .then(() => navigate('/app/events'))
        
    } catch (error) {
        dispatch({
            type: GET_ERROR,
            payload: error
        })
    }

};