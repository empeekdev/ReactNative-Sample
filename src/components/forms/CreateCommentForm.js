import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import {Field, reduxForm} from 'redux-form';

import SubmitButton from '../buttons/SubmitButton';
import {minValue} from "./validate";

const renderInput = ({input: {onChange, ...restInput}}) => {
    return <TextInput style={styles.input} onChangeText={onChange} {...restInput} placeholder="Your text here..." blurOnSubmit={false}/>
};

const CreateComment = props => {
    const {handleSubmit} = props;
    return (
        <View style={styles.container}>
            <Field
                validate={[minValue]}
                name="commentText"
                component={renderInput}
                type="text"
            />
            <SubmitButton
                disabled={props.invalid}
                keyboardShouldPersistTaps="always"
                keyboardDismissMode="on-drag"
                onPress={handleSubmit}
            />
        </View>
    )
};


export default reduxForm({
    form: 'comment',
})(CreateComment)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e6e6e6',
        padding: 7,
        paddingLeft: 7,
        paddingRight: 15
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        width: '80%',
        backgroundColor: '#fff',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#cccccc',
        paddingLeft: 15
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
