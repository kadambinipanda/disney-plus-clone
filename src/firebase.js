import firebase from "firebase/app";
import 'firebase/auth';     
import 'firebase/storage';    
import 'firebase/database';    
import 'firebase/firestore';   
import 'firebase/messaging';   
import 'firebase/functions'; 

const firebaseConfig = {
  apiKey: "<>",
  authDomain: "<>",
  projectId: "<>",
  storageBucket: "<>",
  messagingSenderId: "<>",
  appId: "<>",
  measurementId: "<>"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
