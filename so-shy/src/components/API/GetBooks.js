import React, {useState, useEffect} from 'react';

const GetBooks = ({isbn}) => {
    const [description, setDescription] = useState("");

    useEffect(()=> {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(res => res.json())
            .then(book => setDescription(book.items[0].volumeInfo.description))
    }, []);
    return (<>
            <div className="book_synopsis">{description}</div>
        </>
    );
};

export default GetBooks;
