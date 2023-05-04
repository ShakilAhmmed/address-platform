import {combineReducers} from 'redux';

import app from '../Reducers/appReducer';
import error from "../Reducers/errors/errorReducer";
export default combineReducers({
    app,
    error,
});
