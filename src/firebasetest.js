import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhm4hBg06vHpPzSRZ-jckxrDmsGpLLFCc",
  authDomain: "zensolarciti.firebaseapp.com",
  projectId: "zensolarciti",
  storageBucket: "zensolarciti.appspot.com",
  messagingSenderId: "125345590291",
  appId: "1:125345590291:web:4b5b322c05af7ced4fa3e6",
  measurementId: "G-6YW7692WWP",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = app.firestore();
const db = getFirestore();
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export default { app, db, auth, provider };
