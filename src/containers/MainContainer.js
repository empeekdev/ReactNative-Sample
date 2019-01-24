import React from 'react';
import {connect} from 'react-redux';

import Main from '../components/Main';

const mapStateToProps = (state) => ({
    appState: state.appState,
});

export default connect(mapStateToProps)(Main)
