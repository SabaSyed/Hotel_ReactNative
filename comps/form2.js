import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';
import t from 'tcomb-form-native';
import { Card, SearchBar } from 'react-native-elements';
import '@expo/vector-icons';

// Form
const Form = t.form.Form;

// Form model
const User = t.struct({
    email: t.String,
    password: t.String,
    rememberPassword: t.Boolean,
});

class Form2 extends Component {
    handleSubmit() {
        console.log(this.loginform);
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <SearchBar
                    showLoading
                    platform="ios"
                    cancelButtonTitle="Cancel"
                    placeholder="Search"
                />
                <Text>Login</Text>
                <Form ref={c => (this.loginform = c)} type={User} />
                <Button title="Login" onPress={this.handleSubmit} />
            </KeyboardAvoidingView>
        );
    }
}
export default Form2;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        marginTop: 30,
        padding: 20,
        backgroundColor: '#fff',
    },
});