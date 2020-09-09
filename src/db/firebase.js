import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjlBvkMUOayIUjk_FP2WixkLFt-_3qTSM",
    authDomain: "todo-app-4644c.firebaseapp.com",
    databaseURL: "https://todo-app-4644c.firebaseio.com",
    projectId: "todo-app-4644c",
    storageBucket: "todo-app-4644c.appspot.com",
    messagingSenderId: "609294690606",
    appId: "1:609294690606:web:d5322fbf0502b7ccf5b2bf",
    measurementId: "G-Y4CPFZ6MZE"
});

const db = firebaseApp.firestore();

export default db;