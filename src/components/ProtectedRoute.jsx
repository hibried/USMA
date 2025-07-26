import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("accessToken");
    
    if (!token) {
        return <Navigate to="/landing" replace />;
    }

    return <>
        <Navbar />
        {children || <Outlet />}
    </>
};

export default ProtectedRoute;