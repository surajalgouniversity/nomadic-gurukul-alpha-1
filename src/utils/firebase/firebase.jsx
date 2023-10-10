import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2QW6ZbbwYy_RhU4HnnBIplpYItVj6HWs",
    authDomain: "nomadic-gurukul.firebaseapp.com",
    projectId: "nomadic-gurukul",
    storageBucket: "nomadic-gurukul.appspot.com",
    messagingSenderId: "741021143799",
    appId: "1:741021143799:web:2960d220e01b0bb5ae39f2"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {app, db, auth, provider};