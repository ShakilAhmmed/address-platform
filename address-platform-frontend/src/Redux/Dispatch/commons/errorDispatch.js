import {
    COMMON_ERROR,
    BAD_REQUEST,
    SERVER_ERROR,
    CLEAR_ERROR_MESSAGES,
    VALIDATION_ERROR,
    HTTP_CONFLICT,
} from '../../Types/errors/error.type';

export const errorDispatch = (dispatch, error) => {
    if (error === undefined || error.response === undefined) {
        return;
    }

    let type = 'COMMON_ERROR';

    switch (error.response.code) {
        case 400:
            type = BAD_REQUEST;
            break;
        case 409:
            type = HTTP_CONFLICT;
            break;
        case 500:
            type = SERVER_ERROR;
            break;
        default:
            type = COMMON_ERROR;
            break;
    }
    const {hasError, isRedirect, response} = error;

    dispatch({
        type,
        hasError: hasError || true,
        isRedirect,
        response,
    });
};

export const errorClearDispatch = (dispatch) => dispatch({
    type: CLEAR_ERROR_MESSAGES, hasError: false, isRedirect: false, response: {},
});

export const errorValidationDispatch = (dispatch, message) => {
    if (message !== undefined) {
        const error = {
            code: 400,
            error: {
                details: [{message}],
            },
        };
        dispatch({
            type: VALIDATION_ERROR, hasError: true, isRedirect: false, response: error,
        });
    }
};
