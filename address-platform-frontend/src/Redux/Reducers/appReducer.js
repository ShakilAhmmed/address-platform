import {ACCESS_TOKEN, AUTH_DATA, IS_LOGGED_IN} from "../Types/auth/auth.type";

const initialState = {
    loading: true,
    isLoggedIn: false,
    accessToken: null,
    auth: {},
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOGGED_IN: {
            return {
                ...state, isLoggedIn: action.isLoggedIn,
            };
        }
        case ACCESS_TOKEN: {
            return {
                ...state, accessToken: action.accessToken,
            };
        }
        case AUTH_DATA: {
            return {
                ...state, auth: action.auth,
            };
        }
        default:
            return state;
    }
};

export default AppReducer;
