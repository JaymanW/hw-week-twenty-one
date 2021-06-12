import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Saved() {
    
    useEffect(() => {
        axios.get('http://localhost:8080/api/books')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])
    
    return (
        <div className="Saved">
            <h2>Saved Books</h2>
            {
                // props.data.map((book, i) => {
                //     return <BookResult 
                //         title={book.volumeInfo.title}
                //         authors={book.volumeInfo.authors}
                //         infoLink={book.volumeInfo.infoLink}
                //         imageLink={book.volumeInfo.imageLinks.smallThumbnail}
                //         desc={book.volumeInfo.description}
                //         key={i}
                //     />
                // })
            }
        </div>
    )
}

export default Saved
