import http from "../../helpers/interceptors/http";

const deleteAddressBookAction = async (id) => {
    try {
        const req = await http.delete(`/address-books/${id}`);
        return Promise.resolve(req.data);
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
}

export default deleteAddressBookAction;