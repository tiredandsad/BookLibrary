import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Main from './pages/Main';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const [page, setPage] = useState('signIn')
  const [signedIn, setSignedIn] = useState('true') //Set manually until user auth is implemented
  const [headerText, setHeaderText] = useState('Library')
  const [filterPressed, setFilterPressed] = useState(false)
  const [showNewBookModal, setShowNewBookModal] = useState(false)

  const handleNewBook = () => {
    //open the new book menu 
    //This menu should be a modal with a search bar
    //Books should be able to easily be added to library 
    //Books have check boxes like: owned, read, wishlist, etc.
    //once a book is added to a user's libarary it will be stored in our database to limit API fetches.
    //Need to set up an API for this now, dammit.
    //Probably will use Neon to get the 
  }

  useEffect(() => {
    if(signedIn){
      setPage('main');
    }
  }), [signedIn]
  return (
    <View style={styles.container}>
      {/* {showNewBookModal && <NewBookModal/>} Add this when ready to build the new book modal */}
      <View style={styles.header}>
        <View style={styles.headerLeftContent}>
          <Text style={styles.headerText}>{headerText}</Text>
        </View>
        <View style={styles.headerRightContent}>
          <TouchableOpacity style={styles.headerButton}>
            {/* This is for the filter button */}
            <Ionicons name="filter" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            {/* This is for the add book button */}
            <FontAwesome5 name="book-medical" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        {(page === 'signIn') && <SignIn setPage={setPage}/>}
        {(page === 'register') && <Register setPage={setPage}/>}
        {(page === 'main') && <Main setPage={setPage}/>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    height: 100,
    backgroundColor: '#322639',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  headerRightContent:{
    flex: 1,
    flexDirection: 'row',
    marginRight: 10,
    justifyContent: 'flex-end'
  },
  headerButton: {
    padding: 14
  },
  headerText: {
    color: '#fff',
    fontSize: 32,
    paddingBottom: 10,
    paddingLeft: 10
  },
  body: {
    // height: '100%',
    display: 'flex',
    flex: 1,
    backgroundColor: '#adf',
    width: '100%'
  }
});