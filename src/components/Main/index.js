import React from 'react';
import {View,} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Home from '../../screens/Home';

export default class Main extends React.Component {
    render() {
        const {appState} = this.props;
        return ( 
            <React.Fragment>
                <Home style={{backgroundColor: '#fff' }}/>
                <Spinner visible={appState.isLoading}/>
            </React.Fragment>
        )
    }
}



