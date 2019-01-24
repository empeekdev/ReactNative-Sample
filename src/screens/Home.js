import React from 'react';
import {Dimensions} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import ItemsContainer from '../containers/ItemsContainer';
import CreateItem from '../components/CreateItem';
import CommentsContainer from '../containers/CommentsContainer';

const height = Dimensions.get('window').height;

export default createStackNavigator(
    {
        Home: {
            screen: ItemsContainer
        },
        Create: {
            screen: CreateItem
        },
        Item: {
            screen: CommentsContainer
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#0e1d3c',
                height: height * 0.2,
                borderBottomWidth: 1,
                borderBottomColor: '#4a566d'

            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    });
