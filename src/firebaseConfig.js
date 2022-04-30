
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import { getDatabase, ref ,onValue} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI9PjIrMKAUjE-i5frjf-LSgq7SVdS9zo",
  authDomain: "expertkheti.firebaseapp.com",
  projectId: "expertkheti",
  storageBucket: "expertkheti.appspot.com",
  messagingSenderId: "322762089788",
  appId: "1:322762089788:web:b75f951b7560491138ea39",
  measurementId: "G-67K5HKSCE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider;
// console.log(auth)
const login = () => {
  console.log("login")
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      // console.log(user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}


const GooglesignOut = () => {
  console.log("signOut");
  signOut(auth).then(() => {
    console.log("Sign Out Done")
  }).catch((error) => {
    console.log(error)
  })
}


const getData = async (path) => {
  const database = getDatabase(app);

}

export { app, login, auth, GooglesignOut, getDatabase,getData };