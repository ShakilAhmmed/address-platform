import {useDispatch, useSelector} from "react-redux";
import getAuthUserAction from "../../Actions/auth/getAuthUserAction";
import {authDispatch, isLoggedInDispatch} from "../../Redux/Dispatch/auth/appDispatch";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const InPrivateRoute = ({children}) => {
    const dispatch = useDispatch();
    const app = useSelector((state) => state.app);

    const {isLoggedIn} = app;
    const navigate = useNavigate();
    const checkIsLoggedIn = async () => {
        try {
            let response = await getAuthUserAction();
            if (response.code === 200) {
                isLoggedInDispatch(dispatch, true);
                authDispatch(dispatch, response.data)
            }
        } catch (error) {
            isLoggedInDispatch(dispatch, false);
            window.location.replace('/');
        }
    }

    useEffect( () => {
        if (!isLoggedIn) {
            navigate('/', {replace: true});
        }
    }, []);

    return (
        <>
            {isLoggedIn && children}
        </>
    );
};

export default InPrivateRoute;