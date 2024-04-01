import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function BookBox() {

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.bookBox}>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    //Styles go here...
    container: {
        width: '30%',
        aspectRatio: 1,
        marginTop: 20
    },
    bookBox: {
        flex: 1,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 15
    }
})