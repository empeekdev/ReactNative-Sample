import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Dimensions} from 'react-native';

import Item from '../Item'
import Header from '../Header';
import actions from '../../actions';

const width = Dimensions.get('window').width;
const buttonWidth = width * 0.17;
const buttonMargin = width * 0.08;

export default class Screen extends React.Component {
    static navigationOptions = {
        headerTitle: <Header/>,
    };
    state = {
        currentlyOpenSwipeable: null
    };

    handleScroll = () => {
        const {currentlyOpenSwipeable} = this.state;

        if (currentlyOpenSwipeable) {
            currentlyOpenSwipeable.recenter();
        }
    };

    componentDidMount() {
        this.props.navigation.addListener('didFocus', this._loadItems)
    }

    componentWillUnmount() {
        this.props.navigation.removeListener('didFocus');
    }

    _loadItems = () => {
        const {dispatch, fetchItems} = this.props;
        dispatch(fetchItems());
    };

    render() {
        const {currentlyOpenSwipeable} = this.state;
        const {navigation, items, dispatch} = this.props;

        const itemProps = {
            onOpen: (event, gestureState, swipeable) => {
                if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
                    currentlyOpenSwipeable.recenter();
                }

                this.setState({currentlyOpenSwipeable: swipeable});
            },
            onClose: () => this.setState({currentlyOpenSwipeable: null}),
            deleteItem: itemId => { dispatch(actions.deleteItem(itemId)) },
            navigation,
            dispatch

        };
        return (
            <ScrollView style={styles.container} onScroll={this.handleScroll}>
                {
                    items.map((item) => {
                        return (
                            <Item key={item.id} item={item} {...itemProps}/>
                        )
                    })
                }
                <TouchableOpacity
                    style={styles.button}
                    title="Create item"
                    onPress={() => this.props.navigation.navigate('Create')}
                >
                    <Text style={styles.buttonInner}>+</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: buttonWidth,
        width: buttonWidth,
        alignSelf: 'center',
        backgroundColor: '#d4145a',
        borderRadius: buttonWidth / 2,
        marginTop: buttonMargin,
        marginBottom: buttonMargin ,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonInner: {
        color: '#f5a8f0',
        fontSize: 50,
        fontWeight: '700'

    },
    container: {
        flex: 1,
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
