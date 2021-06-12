import React, { useState, useEffect } from 'react'
import './SearchBox.css'

function SearchBox(props) {
    return (
        <div className="SearchBox">
            <h2>Book Search</h2>
            <p>Book Title</p>
            <input type="text" value={props.searchValue} onChange={props.onSearchValue} placeholder="ex. Hunger Games..." />
            <button onClick={props.onSearchBtn}>Search</button>
        </div>
    )
}

export default SearchBox
