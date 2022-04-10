// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZUIWUVWqD6jX-z4NdMDIkrfqVx9FyCAQ",
    authDomain: "ema-john-simple-f3049.firebaseapp.com",
    projectId: "ema-john-simple-f3049",
    storageBucket: "ema-john-simple-f3049.appspot.com",
    messagingSenderId: "429939017071",
    appId: "1:429939017071:web:07a1666fc269d1fd1b949a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;