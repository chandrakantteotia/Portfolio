// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";


// 🔥 Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA_Cgw6zcuWcv9iwqK7-XDD8HYojupDrCc",
  authDomain: "portfolio-4c453.firebaseapp.com",
  projectId: "portfolio-4c453",
  storageBucket: "portfolio-4c453.appspot.com",  // fixed here
  messagingSenderId: "487299486312",
  appId: "1:487299486312:web:7a26b89e72aa2ddb7721dd",
  measurementId: "G-TWYSKP2ZRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.log('Multiple tabs open, persistence can only be enabled in one tab at a time.');
  } else if (err.code === 'unimplemented') {
    console.log('The current browser does not support all of the features required to enable persistence');
  }
});

export { db, app }; // Export both db and app if needed elsewhere
