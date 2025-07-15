import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from 'sonner';

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogOut = () => {
        const loading_toast = toast.loading("Logging out...");
        localStorage.removeItem("accessToken");
        setTimeout(() => {
            navigate("/login");
            toast.dismiss(loading_toast);
            toast.success('Successfully logged out');
        }, 2000);
    };

    return (
        <div className="navbar bg-[rgb(32,32,32)] shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl tracking-widest">ASG_D30</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a onClick={handleLogOut}>Log Out</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}