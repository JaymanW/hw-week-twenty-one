import React from 'react'
import './ResultsBox.css'

import BookResult from '../BookResult'

function ResultsBox(props) {
    console.log(props.data)

    return (
        <div className="ResultsBox">
            <h2>Results</h2>
            {
                props.data.map((book, i) => {
                    return <BookResult 
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        infoLink={book.volumeInfo.infoLink}
                        imageLink={book.volumeInfo.imageLinks.smallThumbnail}
                        desc={book.volumeInfo.description}
                        key={i}
                    />
                })
            }
        </div>
    )
}

export default ResultsBox
