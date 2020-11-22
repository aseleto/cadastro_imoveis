import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDcJhRpRc6Ucrpamh0rinJzMpNAQhzsS1E",
    authDomain: "smallaxe-18e79.firebaseapp.com",
    databaseURL: "https://smallaxe-18e79.firebaseio.com",
    projectId: "smallaxe-18e79",
    storageBucket: "smallaxe-18e79.appspot.com",
    messagingSenderId: "7230409936",
    appId: "1:7230409936:web:0583d6242baf0d121422d5",
    measurementId: "G-9L9MC00Z3R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore();