import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6NRqnejAhvC3VAdX9OnE5QZwdcD4NPQo",
  authDomain: "whatsapp-clone-bd6f7.firebaseapp.com",
  projectId: "whatsapp-clone-bd6f7",
  storageBucket: "whatsapp-clone-bd6f7.appspot.com",
  messagingSenderId: "335591564421",
  appId: "1:335591564421:web:8b0dfdf879043e0f0a35ec",
  measurementId: "G-D2H0ZM0X3G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
