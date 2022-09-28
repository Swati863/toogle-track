// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA1AswgslRqhuGLUnvjK7pxs2QlCAoYtdQ",
    authDomain: "toggl-fe02b.firebaseapp.com",
    projectId: "toggl-fe02b",
    storageBucket: "toggl-fe02b.appspot.com",
    messagingSenderId: "230119673171",
    appId: "1:230119673171:web:dabb6158fab49e031865a6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)