import React from 'react';
import { connect } from 'react-redux';

import Favorites from './Favorites';
import { bindActionCreators } from 'redux';

const FavoritesContainer = props => {
    return (
        <Favorites />
    );
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
