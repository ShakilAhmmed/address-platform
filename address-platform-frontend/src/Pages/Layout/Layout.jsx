import LeftSideBar from "./LeftSideBar";
import TopBar from "./TopBar";
import {Route, Routes} from "react-router-dom";
import Home from "../Dashboard/Home";
import {ToastContainer} from 'react-toastify';
import InPrivateRoute from "./InPrivateRoute";

const Layout = () => {
    return (
        <>
            <div id="wrapper">
                <LeftSideBar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar/>
                        <ToastContainer/>
                        <div className="container-fluid">
                            <Routes>
                                <Route path="/home" element={
                                    <InPrivateRoute>
                                        <Home/>
                                    </InPrivateRoute>
                                }/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;