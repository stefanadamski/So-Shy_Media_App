import React from "react";
import {useHistory} from "react-router-dom";
import swal from 'sweetalert';
import 'react-simple-hook-modal/dist/styles.css';
import Bubbles from "../Dashboard/Bubbles/Bubbles";
import Navigation from "../Dashboard/Navigation/Navigation";
import Footer from "../Dashboard/Footer/Footer";
import Posts from "./Posts";

const Wall = () => {
    return (
        <div className='container'>
            <Bubbles/>
            <Navigation/>
            <div className='wall_content'>
                <div className="quote">Your personal Wall</div>
                    <Posts/>
            </div>
            <Footer/>
        </div>
    );
};

export default Wall;



