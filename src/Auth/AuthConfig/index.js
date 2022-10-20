// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmerBIWQx_sVrfIklwIQRnDDujZ9iLlVI",
  authDomain: "sociala-app-dae0c.firebaseapp.com",
  projectId: "sociala-app-dae0c",
  storageBucket: "sociala-app-dae0c.appspot.com",
  messagingSenderId: "196736921900",
  appId: "1:196736921900:web:e1597560103f181c413c89",
  measurementId: "G-1RJEL20WWE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);
// .firestore();
export { app, auth, db, storage, ref, uploadBytes };
