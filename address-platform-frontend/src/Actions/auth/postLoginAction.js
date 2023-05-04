import http from "../../helpers/interceptors/http";

const postLoginAction = async (data) => {
    try {
        const req = await http.post('/login', data);
        return Promise.resolve(req.data);
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
}

export default postLoginAction;