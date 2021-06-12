import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Saved.css'

import BookSaved from '../BookSaved'

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/books')
            .then(function (response) {
                // handle success
                setSavedBooks(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])

    useEffect(() => {
        console.log(savedBooks);
    }, [savedBooks])
    
    return (
        <div className="Saved">
            <h2>Saved Books</h2>
            {
                savedBooks.map((book, i) => {
                    return <BookSaved 
                        title={book.title}
                        authors={book.authors}
                        infoLink={book.infoLink}
                        imageLink={book.imageLink}
                        desc={book.desc}
                        id={book._id}
                        key={i}
                    />
                })
            }
        </div>
    )
}

export default Saved
