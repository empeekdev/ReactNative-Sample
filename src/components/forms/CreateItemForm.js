import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import {Field, reduxForm} from 'redux-form';

import actions from '../../actions';
import SubmitButton from '../buttons/SubmitButton';
import {minValue} from "./validate";

const renderInput = ({input: {onChange, ...restInput}}) => {
    return <TextInput style={styles.input} onChangeText={onChange} placeholder="Your text here..." {...restInput} />
};


const CreateItem = props => {

    const {handleSubmit} = props;

    return (
        <View style={styles.container}>
            <Field
                validate={[minValue]}
                name="itemTitle"
                component={renderInput}
                type="text"
            />
            <SubmitButton
                disabled={props.invalid}
                onPress={handleSubmit}
            />

        </View>
    )
};


export default reduxForm({
    form: 'item',
    onSubmit: (values, dispatch, props) => {
        dispatch(actions.addItem({title: values.itemTitle}));
        props.navigation.navigate('Home')
    }
})(CreateItem)

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        //backgroundColor: '#F5FCFF',
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        width: '80%',
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#333333'
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
