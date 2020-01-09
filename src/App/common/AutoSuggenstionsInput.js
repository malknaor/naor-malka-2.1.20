import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

import appDataprovider from '../../appDataprovider';
import { debounce } from '../../utils';
import './AutoSuggenstionsInput.scss';

const AutoSuggenstionsInput = props => {
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const onChange = (event, { newValue }) => {
        const { onSearchChange } = props;

        if (onSearchChange) {
            onSearchChange(newValue);
        }
        
        setValue(newValue);
    };

    const getSuggestionValue = suggestion => {
        return suggestion.LocalizedName;
    };

    const renderSuggestion = suggestion => {
        return (
            <span>
                {suggestion.LocalizedName}
            </span>
        );
    };

    const onSuggestionsFetchRequested = debounce(({ value }) => {
        appDataprovider.getSearchSuggestions(value)
            .then(({ data }) => {
                setSuggestions(data);
            })
            .catch(error => alert(error));
    }, 500);

    const onSuggestionsClearRequested = async () => {
        setSuggestions([]);
    };

    const inputProps = {
        value: value,
        onChange: onChange
    };

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
        />
    );
};

export default AutoSuggenstionsInput;
