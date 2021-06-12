import React from 'react'
import './BookSaved.css'

function BookSaved(props) {

    const handleDelete = () => {
        console.log('deteled!')
    }
    
    return (
        <div className="BookResult">
            <div className="top-half">
                <div className="top-half-left">
                    <h3>{props.title}</h3>
                    <p>{`Written by: ${props.authors}`}</p>
                </div>
                <div className="top-half-right">
                    <button>
                        <a href={props.infoLink} target="_blank">View</a>
                    </button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <div className="bottom-half">
                <img src={props.imageLink} />
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default BookSaved