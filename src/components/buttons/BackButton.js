import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';


export default CreateItem = props => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <View style={{alignItems: 'center', alignSelf: 'center'   }}>
                <Text style={styles.arrow}>&#8592;</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignContent: 'center',
        lineHeight: 56,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#313464',
        paddingBottom:  19 ,
        marginLeft: 15
    },
    arrow: {
        color: '#b2b3c5',
        fontSize: 40,
    }
});
