import {GET_ADDRESS_BOOKS} from "../../Types/addressBook/addressBook.type";

const initialState = {
    loading: true,
    infinityLoading: 'stop',
    addressBooks: {},
};

const AddressBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADDRESS_BOOKS: {
            console.log(action)
            return {
                ...state, addressBooks: action.addressBooks,
            };
        }
        default:
            return state;
    }
};

export default AddressBookReducer;