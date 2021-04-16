import React, { useState } from 'react'

const SearchBar = (props) => {
    const [searchText, setSearchText] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.onFormSubmit(searchText)
    }

    return (
        <>
            <div className="searchbar ui segment">
                <form onSubmit={handleFormSubmit} className="ui form">
                    <div className="field">
                        <label>
                            Video Search
                <input type="text" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
                        </label>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SearchBar;
