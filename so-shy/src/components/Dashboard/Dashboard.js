import React from 'react';
import Navigation from "./Navigation/Navigation";
import Main from "./Media/Main";
import Footer from "./Footer/Footer";
import Bubbles from "./Bubbles/Bubbles";
import './dashboard.css';
import Reviews from "./Reviews/Reviews";

const Dashboard = () => {
    return (
        <div className='container_dashboard'>
            <Bubbles/>
            <Navigation/>
            <Main/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Dashboard;
