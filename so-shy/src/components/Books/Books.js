import React from 'react';
import GetBooks from "../API/GetBooks";
import Bubbles from "../Dashboard/Bubbles/Bubbles";
import Navigation from "../Dashboard/Navigation/Navigation";
import Footer from "../Dashboard/Footer/Footer";

const Books = () => {
    const listOfBooks = [];
    return (
        <div>
            <Bubbles/>
            <Navigation/>
            <div className="quote">“Once you learn to read, you will be forever free.” </div>
            <div>
                <div className="book_boxes">
                    <div className="books_body">
                        <div className="book1_image"> </div>
                        <GetBooks isbn="151243941X"/>
                    </div>
                    <div className="books_body">
                        <div className="book2_image"> </div>
                        <GetBooks isbn="1338322966"/>
                    </div>
                    <div className="books_body">
                        <div className="book3_image"> </div>
                        <GetBooks isbn="1841261939"/>
                    </div>
                </div>
                <div className='review'>
                 <a href="https://lubimyczytac.pl/">
                     <button className="review_button"> Review! </button>
                 </a>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Books;
