// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv4UyeQ95EZ4sG2tJLdZrqCMSX_-iCat4",
  authDomain: "solar-45590.firebaseapp.com",
  projectId: "solar-45590",
  storageBucket: "solar-45590.appspot.com",
  messagingSenderId: "1044836286874",
  appId: "1:1044836286874:web:8a681774b4df626e1c7a23",
  measurementId: "G-JSN3QWBP49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;

