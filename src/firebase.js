import firebase from "firebase/app";
import 'firebase/auth';     
import 'firebase/storage';    
import 'firebase/database';    
import 'firebase/firestore';   
import 'firebase/messaging';   
import 'firebase/functions'; 

const firebaseConfig = {
  apiKey: "AIzaSyACZ-OkdDtY48xCQqofmLSERXsO0pZ0fHQ",
  authDomain: "disneyplus-clone-919e3.firebaseapp.com",
  projectId: "disneyplus-clone-919e3",
  storageBucket: "disneyplus-clone-919e3.appspot.com",
  messagingSenderId: "558402919851",
  appId: "1:558402919851:web:f444962e96d007a333c6ee",
  measurementId: "G-PZF2PVVBHJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
