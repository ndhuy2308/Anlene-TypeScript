import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  // apiKey: 'AIzaSyBtOVBUJEvKqfPdhUR2_AIghWNPgjgPnYo',
  // authDomain: 'anlene-b4d10.firebaseapp.com',
  // databaseURL: 'https://anlene-b4d10-default-rtdb.asia-southeast1.firebasedatabase.app',
  // projectId: 'anlene-b4d10',
  // storageBucket: 'anlene-b4d10.appspot.com',
  // messagingSenderId: '776815183272',
  // appId: '1:776815183272:web:0ddd801b6e577a979d899d',
  // measurementId: 'G-ZBRGMDTEH1'

  apiKey: 'AIzaSyCA-pPyq7USDZNMMYTPvn1_38WhbOEj3r8',
  authDomain: 'anlenefirestore.firebaseapp.com',
  projectId: 'anlenefirestore',
  storageBucket: 'anlenefirestore.appspot.com',
  messagingSenderId: '535899048204',
  appId: '1:535899048204:web:c2440605f487d4134ea129',
  measurementId: 'G-WPK5XVSZWL'
}

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig)
export default firebaseapp
