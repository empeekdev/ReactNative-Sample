/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/configureStore';
import MainContainer from './src/containers/MainContainer'

const store = configureStore();

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <MainContainer/>
            </Provider>
        );
    }
}
