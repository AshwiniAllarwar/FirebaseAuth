// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcstmReN32EOjuEtgOjPpsv7qyC7xFfdc",
  authDomain: "login-app-6ddf2.firebaseapp.com",
  projectId: "login-app-6ddf2",
  storageBucket: "login-app-6ddf2.appspot.com",
  messagingSenderId: "234111086959",
  appId: "1:234111086959:web:31fbd955cf2cdfe632789a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;