import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.innerContainer}>
                    <Text style={styles.headerText}>REGISTER</Text>
                    <Text style={styles.registerText}> EMAIL </Text>
                    <TextInput style={styles.username} placeholder='email@email.com' placeholderTextColor={'#63556b'}></TextInput>
                    <Text style={styles.registerText}> USERNAME </Text>
                    <TextInput style={styles.username} placeholder='username' placeholderTextColor={'#63556b'}></TextInput>
                    <Text style={styles.registerText}>PASSWORD</Text>
                    <TextInput style={styles.password} secureTextEntry={true} placeholder='password' placeholderTextColor={'#63556b'}></TextInput>
                    <Text style={styles.registerText}>CONFIRM PASSWORD</Text>
                    <TextInput style={styles.password} secureTextEntry={true} placeholder='password' placeholderTextColor={'#63556b'}></TextInput>
                    <TouchableOpacity style={styles.registerButton}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
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
    registerText: {
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
    registerButton: {
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
})
