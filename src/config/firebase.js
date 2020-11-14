import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyBxRSZ0wPAkHI9lCKniwbHT9xnXyi7LiIQ",
    authDomain: "olx-clone-hassan.firebaseapp.com",
    databaseURL: "https://olx-clone-hassan.firebaseio.com",
    projectId: "olx-clone-hassan",
    storageBucket: "olx-clone-hassan.appspot.com",
    messagingSenderId: "532541139571",
    appId: "1:532541139571:web:ac15047b64295aa5651806",
    measurementId: "G-RYPZ7SWXPT"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;