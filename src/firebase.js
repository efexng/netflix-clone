import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB49EtVrv7ZFzScOQ_E-Sdjqjvm3rGQwDQ",
  authDomain: "netflix-clone-efexng.firebaseapp.com",
  projectId: "netflix-clone-efexng",
  storageBucket: "netflix-clone-efexng.appspot.com",
  messagingSenderId: "653522345743",
  appId: "1:653522345743:web:25f457db31c7f87a67e87a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;