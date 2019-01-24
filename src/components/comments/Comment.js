import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export default class Screen extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <View style={styles.commentBlock}>
                <View style={styles.avatar}/>
                <Text>{item.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    commentBlock: {
        width: width,
        textAlign: 'left',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 20,
        marginBottom: 30,
        backgroundColor: 'pink',
    }
});
