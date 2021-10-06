import React from 'react';
import Webcam from "react-webcam";
import Bubbles from "../Dashboard/Bubbles/Bubbles";
import Navigation from "../Dashboard/Navigation/Navigation";
import Footer from "../Dashboard/Footer/Footer";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
};

const Photo = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    return (
        <div>
            <Bubbles/>
            <Navigation/>
            <div className="quote">  “Taking an image, freezing a moment,<br/> reveals how rich reality truly is.”
            </div>
            <div className='photo_container'>
                <Webcam
                    className="webcam"
                    audio={false}
                    height={360}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={640}
                    videoConstraints={videoConstraints}
                />
                <div className="media_buttons">
                    <button className="media_button6" onClick={capture}> </button>
                    <button className="media_button7" onClick={capture}> </button>
                </div>
                <div>{imgSrc && (
                    <img style={{
                        width: "320px",
                        height: "180px",
                        borderRadius: "10%",
                        border: "2px solid white",
                        boxShadow: '0 0 20px white',
                        margin: '30px'
                    }}
                         src={imgSrc}
                    />
                )} </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Photo;
