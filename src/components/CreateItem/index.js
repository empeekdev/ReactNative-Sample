import React from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {Field, reduxForm} from 'redux-form';

import CreateItemForm from '../forms/CreateItemForm';
import BackButton from '../../components/buttons/BackButton';



export default class CreateItem extends React.Component {
    static navigationOptions = {
        title: 'Create new item',
        headerLeft: props => <BackButton {...props}/>,
        headerTitleStyle: {
            fontSize: 25,
            paddingLeft: 15
        }
    };


    render() {
        const {navigation} = this.props;
        return (
            <CreateItemForm navigation={navigation}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
