import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDeLFe7DCYfq40h96R0B0meoNYVyVDoiE4',
  authDomain: 'would-you-rather-e59e2.firebaseapp.com',
  databaseURL: 'https://duckr-ceeea.firebaseio.com',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
