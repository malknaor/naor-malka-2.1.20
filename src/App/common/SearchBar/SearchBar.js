import React from 'react';

import AutoSuggenstionsInput from '../AutoSuggestionsInput/AutoSuggenstionsInput';
import './SearchBar.scss';

const SearchBar = props => {
    const { onSearchChange, onSearchError } = props;

    const onFormSubmit = event => {
        event.preventDefault();
        const { currentSearch, onSearchSubmit } = props;

        if (currentSearch && onSearchSubmit) {
            onSearchSubmit(currentSearch);
        }
    };

    return (
        <div className="searchbar">
            <form className="searchbar__form" onSubmit={onFormSubmit}>
                <AutoSuggenstionsInput onSearchError={onSearchError} onSearchChange={onSearchChange} placeholder="Search Location..."/>
            </form>
        </div>
    );
};

export default SearchBar;
