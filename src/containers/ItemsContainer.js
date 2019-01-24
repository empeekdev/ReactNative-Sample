import React from 'react';
import {connect} from 'react-redux';

import Home from '../components/Home';
import actions from '../actions'

const mapStateToProps = (state) => ({
    items: state.items,
    fetchItems: actions.requestItems,
    deleteItem: actions.deteteItem
});

export default connect(mapStateToProps)(Home)
