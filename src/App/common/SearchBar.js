import React from 'react';

import AutoSuggenstionsInput from './AutoSuggenstionsInput';
import './SearchBar.scss';

const SearchBar = props => {
    const { onSearchChange } = props;

    const onFormSubmit = event => {
        event.preventDefault();
        const { currentSearch, onSearchSubmit } = props;

        if (currentSearch && onSearchSubmit) {
            onSearchSubmit(currentSearch);
        }
    }

    return (
        <div className="searchbar">
            <form className="searchbar__form" onSubmit={onFormSubmit}>
                <AutoSuggenstionsInput onSearchChange={onSearchChange} />
            </form>
        </div>
    );
}

export default SearchBar;
