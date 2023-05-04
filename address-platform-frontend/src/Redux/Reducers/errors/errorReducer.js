import {
    COMMON_ERROR, SERVER_ERROR, BAD_REQUEST, CLEAR_ERROR_MESSAGES, VALIDATION_ERROR, HTTP_CONFLICT,
} from '../../Types/errors/error.type';

const initialState = {
    hasError: false,
    isRedirect: false,
    response: {},
};

export const ErrorReducer = (state = initialState, action) => {
    const data = {
        ...state,
        hasError: action.hasError ? action.hasError : false,
        isRedirect: action.isRedirect ? action.isRedirect : false,
        response: action.response,
    };

    switch (action.type) {
        case COMMON_ERROR: {
            return data;
        }
        case BAD_REQUEST: {
            return data;
        }
        case SERVER_ERROR: {
            return data;
        }
        case CLEAR_ERROR_MESSAGES: {
            return data;
        }
        case VALIDATION_ERROR: {
            return data;
        }
        case HTTP_CONFLICT: {
            return data;
        }

        default:
            return initialState;
    }
};

export default ErrorReducer;
