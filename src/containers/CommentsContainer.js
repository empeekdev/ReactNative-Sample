import React from 'react';
import {connect} from 'react-redux';

import actions from '../actions';

import ItemScreen from '../components/ItemScreen';

const mapStateToProps = (state) => ({
    comments: state.comments,
    fetchComments: actions.requestComments,
    addComment: actions.addComment,
});

export default connect(mapStateToProps)(ItemScreen)
