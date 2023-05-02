// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBtOVBUJEvKqfPdhUR2_AIghWNPgjgPnYo',
  authDomain: 'anlene-b4d10.firebaseapp.com',
  databaseURL: 'https://anlene-b4d10-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'anlene-b4d10',
  storageBucket: 'anlene-b4d10.appspot.com',
  messagingSenderId: '776815183272',
  appId: '1:776815183272:web:0ddd801b6e577a979d899d',
  measurementId: 'G-ZBRGMDTEH1'
}

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig)
export default firebaseapp
