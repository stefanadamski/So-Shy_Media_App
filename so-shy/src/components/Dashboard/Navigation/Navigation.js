import React from "react";
import { useHistory } from "react-router-dom";
import './navigation.css';

const Navigation = () => {
    let history = useHistory();
    const handleLogout = (e) => {
        e.preventDefault();
        history.push("/");
    }
    return (
        <div className="container nav_container">
            <div className='menu'>
                <div className='small_logo'>
                    <div className='dashboard_logo'> So-shy Media </div>
                </div>
                <div className='menu_right'>
                    <div className="avatar_big"> </div>
                    <button className="logout_button"
                            onClick={(e) => handleLogout(e)}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navigation;


