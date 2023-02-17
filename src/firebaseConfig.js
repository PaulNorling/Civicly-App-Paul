// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAagF_9ahjBsr-QGHMr0WzZq7_JL-iCg_g",
  authDomain: "civicly-a706b.firebaseapp.com",
  projectId: "civicly-a706b",
  storageBucket: "civicly-a706b.appspot.com",
  messagingSenderId: "449108880437",
  appId: "1:449108880437:web:cf93fae1a6beb66fdb157c",
  measurementId: "G-RKEKF4T8VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = (getStorage(app));
const analytics = getAnalytics(app);

export default storage;

