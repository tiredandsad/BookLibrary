import React, { useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {
    const [searchText, setSearchText] = useState('')

    const handleTextChange = (newText) => {
        setSearchText(newText);
        console.log(searchText)
    }
    const clearText = () => {
        setSearchText('')

    }
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.bar}>
                <TextInput 
                style={styles.searchbarText} 
                placeholder={'Search'} 
                onChangeText={handleTextChange}
                value={searchText}></TextInput>
                {searchText != '' && <TouchableOpacity 
                style={styles.textClear}
                onPress={clearText}>
                <AntDesign name="closecircleo" size={22} color="#898987" />
                </TouchableOpacity>}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    //Styles go here!
    container: {
        width: '100%',
        alignItems: 'center',
        padding: 20
    },
    bar: {
        backgroundColor: '#fff',
        width: '90%',
        height: 30,
        borderRadius: 6,
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    searchbarText: {
        fontSize: 22,
        paddingLeft: 10
    },
    textClear: {
        padding: 4,
        marginRight: 6
    }
})