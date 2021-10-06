import React from 'react'
import { useReactMediaRecorder } from "react-media-recorder";
import Bubbles from "../Dashboard/Bubbles/Bubbles";
import Navigation from "../Dashboard/Navigation/Navigation";
import Footer from "../Dashboard/Footer/Footer";
import '../Audio/audio.css';
import './video.css';

const Video = () => {
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
    } = useReactMediaRecorder({ video: true });

    return (
        <div>
            <Bubbles/>
            <Navigation/>
            <div className='audio_content'>
                <div className="quote">“Filmmaking is a chance to live many lifetimes.”</div>
                <video className="video_player" src={mediaBlobUrl} controls loop />
                <div className="media_buttons">
                    <div className="media_button4" onClick={startRecording}> </div>
                    <div className="media_button5" onClick={stopRecording}> </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Video;
