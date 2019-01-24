import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class HomeTitle extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.main}>Sayer</Text>
                <Text style={styles.secondary}>World's most used time waster</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      paddingLeft: 35
    },
    main: {
        fontSize: 40,
        color: '#fff',
        fontWeight: '900'
    },
    secondary: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '600'
    }
});
