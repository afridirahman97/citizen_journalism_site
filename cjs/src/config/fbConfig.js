import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyC6TAdaSy5vOM4MVgc6q5e_NW7yCI7FkJ8",
    authDomain: "journalism-e7c1b.firebaseapp.com",
    databaseURL: "https://journalism-e7c1b.firebaseio.com",
    projectId: "journalism-e7c1b",
    storageBucket: "journalism-e7c1b.appspot.com",
    messagingSenderId: "188064962444",
};
firebase.initializeApp(config);
const storage = firebase.storage()
firebase.firestore().settings({ timestampsInSnapshots: true });

export  {
    storage, firebase as default
  } 