import http from "../../helpers/interceptors/http";

const getAddressBookAction = async (data) => {
    try {
        const req = await http.get('/address-books', {
            params: {...data}
        });
        return Promise.resolve(req.data);
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
}

export default getAddressBookAction;