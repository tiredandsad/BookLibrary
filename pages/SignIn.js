import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.innerContainer}>
                    <Text style={styles.headerText}>SIGN IN</Text>
                    <Text style={styles.loginText}> USERNAME </Text>
                    <TextInput style={styles.username} placeholder='username' placeholderTextColor={'#63556b'}></TextInput>
                    <Text style={styles.loginText}>PASSWORD</Text>
                    <TextInput style={styles.password} secureTextEntry={true} placeholder='password' placeholderTextColor={'#63556b'}></TextInput>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity><Text style={styles.registerButton}>REGISTER</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#130019",
    },
    headerText: {
        margin: 10,
        fontSize: 32,
        fontWeight: '600',
        color: '#f6e5ff',
        position: 'absolute',
        top: -150
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        margin: 10,
        fontSize: 24,
        fontWeight: '600',
        color: '#f6e5ff'
    },
    username: {
        borderColor: '#fff0ff',
        borderWidth: 1,
        borderRadius: 5,
        height: 36,
        width: 256,
        fontSize: 28,
        paddingLeft: 5,
        color: '#f6e5ff',
    },
    password: {
        borderColor: '#fff0ff',
        borderWidth: 1,
        borderRadius: 5,
        height: 36,
        width: 256,
        fontSize: 28,
        paddingLeft: 5,
        color: '#f6e5ff'
    },
    loginButton: {
        borderColor: '#fff0ff',
        borderWidth: 1,
        borderRadius: 5,
        margin: 15,
        marginBottom: 30
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 24,
        marginLeft: 15,
        marginRight: 15,
        margin: 5,
        color: '#f6e5ff'
    },
    registerButton: {
        color: '#f6e5ff'
    }
})
