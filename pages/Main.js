import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import BookBox from '../components/BookSquare';

export default function Main() {
    const [books, setBooks] = ([]);

    return(
        <View style={styles.container}>
            <SearchBar></SearchBar>
            <Text style={styles.testText}>Your Library</Text>
            <ScrollView contentContainerStyle={styles.mainScrollView}>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
                <BookBox></BookBox>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    //Styles go here!
    container: {
        flex: 1,
        backgroundColor: "#130019",
    },
    mainScrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
    },
    testText: {
        color: '#fff',
        fontSize: 48,
        alignSelf: 'center',
        paddingBottom: 5
    }
})