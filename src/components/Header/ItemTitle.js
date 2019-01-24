import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ItemTitle extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.secondary} numberOfLines={2} ellipsizeMode='tail'>
                    { navigation.state.params.title }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 35
    },
    secondary: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '600'
    }
});
