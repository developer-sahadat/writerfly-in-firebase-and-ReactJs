// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPfZ4taMbLbsIBQ3RkZWDLsXvwE2mts4o",
  authDomain: "writerfly-e4e13.firebaseapp.com",
  projectId: "writerfly-e4e13",
  storageBucket: "writerfly-e4e13.appspot.com",
  messagingSenderId: "284710810307",
  appId: "1:284710810307:web:7e1883b0c412ae1d2be876",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
