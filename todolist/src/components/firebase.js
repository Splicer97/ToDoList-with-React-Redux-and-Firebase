import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAUOjTSArykShM-FMHkzsBQH_CoU-FLxEY",
  authDomain: "todolist-e5950.firebaseapp.com",
  projectId: "todolist-e5950",
  storageBucket: "todolist-e5950.appspot.com",
  messagingSenderId: "883313816970",
  appId: "1:883313816970:web:bc640a0ccfd882c9070473",
  measurementId: "G-3TEPH5MV1G"
};

//feature from Maxim

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();



const db = app.firestore();





// Initialize Firebase
//firebase.initializeApp(firebaseConfig);


export default {db};