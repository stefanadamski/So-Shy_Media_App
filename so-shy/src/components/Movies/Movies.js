import React from 'react';
import Bubbles from "../Dashboard/Bubbles/Bubbles";
import Navigation from "../Dashboard/Navigation/Navigation";
import ReactPlayer from "react-player";
import Footer from "../Dashboard/Footer/Footer";

const Movies = () => {
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
            <div className="quote">"Cinema can fill in the empty spaces of your life and your loneliness"</div>
            <div className="players">
                <ReactPlayer style={style} width="360px" height="288px" url='https://www.youtube.com/watch?v=PJlmYh27MHg'/>
                <ReactPlayer style={style} width="360px" height="288px" url='https://www.youtube.com/watch?v=sFBv3VL5GrA'/>
                <ReactPlayer style={style} width="360px" height="288px" url='https://www.youtube.com/watch?v=0xWMqsZOYWg'/>
            </div>
            <div className='review'>
                <a href="https://www.imdb.com/title/tt0107290/">
                    <button className="review_button"> Review! </button>
                </a>
            </div>
            <Footer/>
        </div>
    );
};

export default Movies;
