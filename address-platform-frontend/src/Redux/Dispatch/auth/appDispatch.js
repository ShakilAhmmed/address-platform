import {ACCESS_TOKEN, AUTH_DATA, IS_LOGGED_IN} from "../../Types/auth/auth.type";

export const isLoggedInDispatch = (dispatch, isLoggedIn) => dispatch({
    type: IS_LOGGED_IN, isLoggedIn,
});

export const accessTokenDispatch = (dispatch, accessToken) => dispatch({
    type: ACCESS_TOKEN, accessToken,
});

export const authDispatch = (dispatch, auth) => dispatch({
    type: AUTH_DATA, auth,
});








