import React from 'react';
import ReactPlayer from 'react-player'
import Bubbles from "../Dashboard/Bubbles/Bubbles";
import Navigation from "../Dashboard/Navigation/Navigation";
import Footer from "../Dashboard/Footer/Footer";

const Music = () => {
    const style = {
        margin: '10px',
        border: '2px solid white',
        boxShadow: '0 0 30px white',
        opacity: '0.7'
    }
    return (
        <div>
            <Bubbles/>
            <Navigation/>
            <div className="quote">“Music is the soundtrack of your life.”</div>
            <div className="players">
                <ReactPlayer style={style} width="360px" height="288px" url='https://www.youtube.com/watch?v=e_04ZrNroTo'/>
                <ReactPlayer style={style} width="360px" height="288px" url='https://www.youtube.com/watch?v=G6k7dChBaJ8'/>
                <ReactPlayer style={style} width="360px" height="288px" url='https://www.youtube.com/watch?v=dpnUYVezBVw'/>
            </div>
            <div className='review'>
                <a href="https://youtube.com">
                    <button className="review_button"> Review! </button>
                </a>
            </div>
            <Footer/>
        </div>
    );
};

export default Music;
