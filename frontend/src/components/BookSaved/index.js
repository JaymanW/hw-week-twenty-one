import React from 'react'
import './BookSaved.css'
import axios from 'axios'

function BookSaved(props) {

    const handleDelete = () => {
        axios.delete(`https://hw-week-twenty-one.herokuapp.com/api/books/${props.title}`)
        window.location.reload();
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