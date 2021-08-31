import React from 'react';
import ToDoApp from "./components/ToDoApp"
import firebase from 'firebase';

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAUOjTSArykShM-FMHkzsBQH_CoU-FLxEY",
    authDomain: "todolist-e5950.firebaseapp.com",
    projectId: "todolist-e5950",
    storageBucket: "todolist-e5950.appspot.com",
    messagingSenderId: "883313816970",
    appId: "1:883313816970:web:bc640a0ccfd882c9070473",
    measurementId: "G-3TEPH5MV1G"
  };

  const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

  const db = app.firestore();

  // Add a new document in collection "cities"
  db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });

  return (
    <ToDoApp/>
  );
}

export default App;
