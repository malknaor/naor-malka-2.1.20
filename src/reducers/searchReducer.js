import { 
    SET_CURRENT_SEARCH, 
    SET_SEARCH_SUGGESTIONS 
} from '../actions/actionTypes';

const initialSearchState = {
    currentSearch: '',
    suggestions: []
};

const searchReducer = (state = initialSearchState, action) => {
    switch (action.type) {
        case SET_CURRENT_SEARCH:
            return { ...state, currentSearch: action.payload };
        case SET_SEARCH_SUGGESTIONS:
            return { ...state, autoComplete: action.payload };
        default:
            return state;
    };
};

export default searchReducer;