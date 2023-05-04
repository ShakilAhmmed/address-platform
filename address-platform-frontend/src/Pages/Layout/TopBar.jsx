import postLogoutAction from "../../Actions/auth/postLogoutAction";
import {accessTokenDispatch, isLoggedInDispatch} from "../../Redux/Dispatch/auth/appDispatch";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {setCookie} from "../../helpers/utils/cookie";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../../constants/application";

const TopBar = () => {
    const dispatch = useDispatch();

    const app = useSelector((state) => state.app);

    const {auth} = app;
    const handleLogOut = () => {
        postLogoutAction()
            .then((response) => {
                isLoggedInDispatch(dispatch, false);
                accessTokenDispatch(dispatch, null);
                setCookie(ACCESS_TOKEN, '', -1);
                setCookie(REFRESH_TOKEN, '', -1);
                window.location.replace('/')
            })
            .catch((error) => {
                toast.error(error?.message);
            })
    }
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"/>
                </button>

                {/* Topbar Search */}
                <form
                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"/>
                            </button>
                        </div>
                    </div>
                </form>

                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                    {/* Nav Item - Search Dropdown (Visible Only XS) */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="searchDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <i className="fas fa-search fa-fw"/>
                        </a>
                        {/* Dropdown - Messages */}
                        <div
                            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control bg-light border-0 small"
                                        placeholder="Search for..."
                                        aria-label="Search"
                                        aria-describedby="basic-addon2"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    {/* Nav Item - Alerts */}

                    {/* Nav Item - Messages */}

                    <div className="topbar-divider d-none d-sm-block"/>

                    {/* Nav Item - User Information */}
                    <li className="nav-item dropdown no-arrow">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="userDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{auth.name}</span>
                            <img className="img-profile rounded-circle" src="img/undraw_profile.svg"/>
                        </a>
                        {/* Dropdown - User Information */}
                        <div
                            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                            <div className="dropdown-divider"/>
                            <a className="dropdown-item" style={{
                                cursor: "pointer"
                            }} onClick={handleLogOut}>
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"/>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default TopBar;