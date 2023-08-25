import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyAIwhbGTTJPCr-p5cRocpu4KdkEbg1FPlc",
    authDomain: "turkanhasanova-1201c.firebaseapp.com",
    databaseURL: "https://turkanhasanova-1201c-default-rtdb.firebaseio.com",
    projectId: "turkanhasanova-1201c",
    storageBucket: "turkanhasanova-1201c.appspot.com",
    messagingSenderId: "858100779451",
    appId: "1:858100779451:web:67cba47921e1f27d539c9e", 
}

 firebase.initializeApp(firebaseConfig);

 const database = firebase.database();

 export { database as default }