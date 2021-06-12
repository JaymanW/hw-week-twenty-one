import React from 'react'
import './BookResult.css'

function BookResult(props) {
    const title = "Hunger Games"
    const author = `John Arthur`
    const image = "http://books.google.com/books/content?id=mKojrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
    const desc = "In exclusive collaboration with Lionsgate, Assouline presents Tim Palen: Photographs from The Hunger Games. Compiled in one deluxe volume, Palen s portraits capture each character with striking intimacy and transform the high-octane adventure of the films into exquisite visual art. Through Palen s unique lens, characters become icons, immortalized as the beloved characters the world has embraced."
    const viewLink = "http://books.google.com/books?id=mKojrgEACAAJ&dq=Hunger+Games+inauthor&hl=&source=gbs_api"

    const handleView = () => {
        console.log(`VIEWED BOOK`)
    }

    const handleSave = () => {
        console.log(`SAVED BOOK`)
    }
    
    return (
        <div className="BookResult">
            <div className="top-half">
                <div className="top-half-left">
                    <h3>{props.title}</h3>
                    {/* JOIN AUTHORS */}
                    <p>{`Written by: ${props.authors}`}</p>
                </div>
                <div className="top-half-right">
                    <button onClick={handleView}>View</button>
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
