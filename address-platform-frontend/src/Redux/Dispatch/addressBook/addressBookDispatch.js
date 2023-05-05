import {GET_ADDRESS_BOOKS} from "../../Types/addressBook/addressBook.type";

export const getAddressBookDispatch = (dispatch, addressBooks) => dispatch({
    type: GET_ADDRESS_BOOKS, addressBooks,
});
