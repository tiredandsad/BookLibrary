import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Main from './pages/Main';

export default function App() {
  const [page, setPage] = useState('signIn')
  const [signedIn, setSignedIn] = useState('true') //Set manually until user auth is implemented

  useEffect(() => {
    if(signedIn){
      setPage('main');
    }
  }), [signedIn]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Library</Text>
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
    justifyContent: 'flex-end'
    
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