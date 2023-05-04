import axios from "axios";
import {ACCESS_TOKEN, API} from "../../constants/application";
import {getCookie} from "../utils/cookie";

let token = getCookie(ACCESS_TOKEN);

const http = axios.create({
    baseURL: `${API}`,
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + token}
});

export default http;