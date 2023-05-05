import {combineReducers} from 'redux';

import app from '../Reducers/appReducer';
import error from "../Reducers/errors/errorReducer";
import addressBook from "../Reducers/addressBook/addressBookReducer";
export default combineReducers({
    app,
    error,
    addressBook
});
