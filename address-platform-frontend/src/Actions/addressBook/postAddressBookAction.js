import http from "../../helpers/interceptors/http";

const postAddressBookAction = async (data) => {
    try {
        const req = await http.post('/address-books', data);
        return Promise.resolve(req.data);
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
}

export default postAddressBookAction;