import React from 'react'
import './Search.css'

// COMPONENTS
import SearchBox from '../SearchBox'
import ResultsBox from '../ResultsBox'

function Search() {
    return (
        <div className="Search">
            <SearchBox />
            {/* ResultsBox */}
        </div>
    )
}

export default Search
