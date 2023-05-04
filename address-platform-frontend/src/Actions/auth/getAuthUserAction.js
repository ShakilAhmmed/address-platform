import http from "../../helpers/interceptors/http";


const getAuthUserAction = async () => {
    try {
        const req = await http.get('/auth-user');
        return Promise.resolve(req.data);
    } catch (error) {
        return Promise.reject(error?.response?.data);
    }

};

export default getAuthUserAction;
