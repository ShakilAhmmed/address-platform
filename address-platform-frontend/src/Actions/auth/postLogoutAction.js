import http from "../../helpers/interceptors/http";

const postLogoutAction = async (data) => {
    try {
        const req = await http.post('/logout', data);
        return Promise.resolve(req.data);
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }
}

export default postLogoutAction;