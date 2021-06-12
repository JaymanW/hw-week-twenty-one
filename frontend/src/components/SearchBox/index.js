import React, { useState, useEffect } from 'react'
import './SearchBox.css'

function SearchBox() {
    const [search, setSearch] = useState('');

    // useEffect(() => {
    //     console.log(search)
    // }, [search])

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = () => {
        // pass up input information to be queried and displayed
    }
    
    return (
        <div className="SearchBox">
            <h2>Book Search</h2>
            <p>Book Title</p>
            <input type="text" value={search} onChange={handleChange} placeholder="ex. Hunger Games..." />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBox
