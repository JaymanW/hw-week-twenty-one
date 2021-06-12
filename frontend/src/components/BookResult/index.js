import React from 'react'
import './BookResult.css'
import axios from 'axios'

function BookResult(props) {

    const handleSave = () => {
        axios.post('https://hw-week-twenty-one.herokuapp.com/api/books', {
            title: props.title,
            authors: props.authors,
            infoLink: props.infoLink,
            imageLink: props.imageLink,
            desc: props.desc
        })
        console.log('firing!')
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
                    <button onClick={handleSave}>Save</button>
                </div>
            </div>
            <div className="bottom-half">
                <img src={props.imageLink} />
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default BookResult