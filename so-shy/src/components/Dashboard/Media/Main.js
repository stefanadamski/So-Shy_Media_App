import React from "react";
import {useHistory} from "react-router-dom";
import './main.css';

function Main() {
    let history = useHistory();
    const handleVideo = (e) => {
        e.preventDefault();
        history.push("/recorder");
    }
    const handleCamera = (e) => {
        e.preventDefault();
        history.push("/photo");
    }
    const handleAudio = (e) => {
        e.preventDefault();
        history.push("/audio");
    }
    const handleWall = (e) => {
        e.preventDefault();
        history.push("/wall");
    }
    return (<>
            <div className="container main">
                <div className="main_heading">
                    "Shy people notice everything but they don't get noticed..."
                    <div className='media_buttons'>
                        <div className="circle" onClick={(e) => handleWall(e)}>
                            <div className="circle_icon1"> </div>
                            <div className="circle_info">Go to your Wall!</div>
                        </div>
                        <div className="circle" onClick={(e) => handleAudio(e)}>
                            <div className="circle_icon2"> </div>
                            <div className="circle_info">
                                Record your voice!</div>
                        </div>
                        <div className="circle" onClick={(e) => handleVideo(e)}>
                            <div className="circle_icon3"> </div>
                            <div className="circle_info">
                                Record a video!</div>
                        </div>
                        <div className="circle" onClick={(e) => handleCamera(e)}>
                            <div className="circle_icon4"> </div>
                            <div className="circle_info">
                                Take a picture! </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
