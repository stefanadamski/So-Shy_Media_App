import React from 'react';
import {useHistory} from "react-router-dom";

const Reviews = () => {
    let history = useHistory();
    const handleMovieAPI = (e) => {
        e.preventDefault();
        history.push("/movies");
    }
    const handleMusicAPI = (e) => {
        e.preventDefault();
        history.push("/music");
    }
    const handleBooksAPI = (e) => {
        e.preventDefault();
        history.push("/books");
    }
    return (
        <div className="media">
            <div className='row'>
                <button className="review_circle"
                        onClick={(e) => handleMusicAPI(e)}
                >
                    <div className="musicIcon"> </div>
                    Share music with Yourself! </button>
            </div>
            <div>
                <button className="review_circle"
                        onClick={(e) => handleBooksAPI(e)}
                >
                    <div className="booksIcon"> </div>
                    Tell us about your books!</button>
            </div>
            <div>

                <button className="review_circle"
                        onClick={(e) => handleMovieAPI(e)}
                >
                    <div className="moviesIcon"> </div>
                    Review Movies for Yourself!</button>
            </div>
        </div>
    );
};

export default Reviews;
