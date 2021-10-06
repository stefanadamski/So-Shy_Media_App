import React, {useState} from 'react'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import Bubbles from "../Dashboard/Bubbles/Bubbles";
import Navigation from "../Dashboard/Navigation/Navigation";
import Footer from "../Dashboard/Footer/Footer";

const AudioRecorder = () => {
    const [recordState, setRecordState] = useState(null);
    const [audio, setAudio] = useState([]);
    const [audioLink, setAudioLink] = useState("");

    const start = () => {
        setRecordState(RecordState.START);
    }
    const stop = () => {
        setRecordState(RecordState.STOP);
    }
    const onStop = (audioData) => {
        console.log('audioData', audioData)
        setAudio(audioData);
        setAudioLink(audioData.url);
    }
    const playAudio = (e) => {
        e.preventDefault();
        window.location.href = audioLink;
    }

    return (
        <div>
            <Bubbles/>
            <Navigation/>
            <div className='audio_content'>
                <div className="quote">“Those who wish to sing <br/>
                always find a song.”</div>
                <AudioReactRecorder
                    className="audio_player"
                    state={recordState}
                    onStop={onStop}
                    foregroundColor={"rgb(255,20,147)"}
                    backgroundColor={"rgb(255,192,203)"}
                />
                <div className="media_buttons">
                    <div className='media button media_button1' onClick={start}> </div>
                    <div className='media button media_button2' onClick={stop}> </div>
                    <div className='media button media_button3' onClick={playAudio}> </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AudioRecorder;
