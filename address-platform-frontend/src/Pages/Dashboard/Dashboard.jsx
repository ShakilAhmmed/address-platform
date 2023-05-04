import {useLocation} from "react-router-dom";
import Login from "../Auth/Login";
import Layout from "../Layout/Layout";

const Dashboard = () => {
    let {pathname} = useLocation();
    const renderChildren = () => {
        if (pathname === "/") {
            return <Login/>
        }
        return <Layout/>
    }
    return renderChildren();
};

export default Dashboard;