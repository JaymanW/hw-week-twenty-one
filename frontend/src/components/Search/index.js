import React, { useState } from 'react'
import './Search.css'
import axios from 'axios'

// COMPONENTS
import SearchBox from '../SearchBox'
import ResultsBox from '../ResultsBox'

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
    }

    const getSearchResults = () => {
        let query = searchValue.replace(/\s/g, '+');
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+inauthor`)
            .then(function (response) {
                // handle success
                console.log(response.data.items);
                setSearchResults(response.data.items)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            }
        );
        setSearchValue('');
    }
    
    return (
        <div className="Search">
            <SearchBox searchValue={searchValue} onSearchValue={handleSearchInput} onSearchBtn={getSearchResults}/>
            <ResultsBox data={searchResults} />
        </div>
    )
}

export default Search
