const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/auth");


const firebaseConfig = {
    apiKey: "AIzaSyCfznUS4oNC-M45VTc848mm3mvftflFGhM",
    authDomain: "blog-f2e52.firebaseapp.com",
    databaseURL: "https://blog-f2e52.firebaseio.com",
    projectId: "blog-f2e52",
    storageBucket: "blog-f2e52.appspot.com",
    messagingSenderId: "945152279110",
    appId: "1:945152279110:web:f9587de3734dccf99b0047"
  };

if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

module.exports = {db, auth};