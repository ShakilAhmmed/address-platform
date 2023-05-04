import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import LoginSchema from "../../SchemaValidation/LoginSchema";
import {useDispatch, useSelector} from "react-redux";
import postLoginAction from "../../Actions/auth/postLoginAction";
import {accessTokenDispatch, authDispatch, isLoggedInDispatch} from "../../Redux/Dispatch/auth/appDispatch";
import {toast, ToastContainer} from "react-toastify";
import {Form} from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";
import {setCookie} from "../../helpers/utils/cookie";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../../constants/application";

const Login = () => {

    const dispatch = useDispatch();

    const app = useSelector((state) => state.app);

    const {isLoggedIn} = app;

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(LoginSchema)
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        const payload = {...data};
        setLoading(true);
        postLoginAction(payload)
            .then((response) => {
                if (response.code === 200) {
                    isLoggedInDispatch(dispatch, true);
                }
                authDispatch(dispatch, response.data);
                accessTokenDispatch(dispatch, response.access_token)
                setCookie(ACCESS_TOKEN, response.access_token, response.expires_in_days);
                setCookie(REFRESH_TOKEN, response.access_token, response.expires_in_days);
                window.location.replace('/home');
            })
            .catch((error) => {
                toast.error(error?.message);
            })
    };
    if (isLoggedIn) {
        window.location.replace('/home');
        return;
    }
    return (
        <>
            <div className="container">
                <ToastContainer/>
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"/>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <Form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className={`form-control form-control-user ${errors.email && 'invalid-input'}`}
                                                        id="exampleInputEmail"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."
                                                        {...register("email")}
                                                    />
                                                    <span className="text-danger">{errors.email?.message}</span>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className={`form-control form-control-user ${errors.password && 'invalid-input'}`}
                                                        id="exampleInputPassword"
                                                        placeholder="Password"
                                                        {...register("password")}
                                                    />
                                                    <span className="text-danger">{errors.password?.message}</span>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheck"
                                                        />
                                                        <label className="custom-control-label" htmlFor="customCheck">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                                    Login
                                                </button>
                                                <hr/>
                                            </Form>
                                            <hr/>
                                            <div className="text-center">
                                                <a className="small" href="#">
                                                    Forgot Password?
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;