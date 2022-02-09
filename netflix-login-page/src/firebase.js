import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2ao9VhWc5mBadrNMFYBtkRgJ9w7CEo54",
  authDomain: "cs458-project1.firebaseapp.com",
  databaseURL:
    "https://cs458-project1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cs458-project1",
  storageBucket: "cs458-project1.appspot.com",
  messagingSenderId: "532312157845",
  appId: "1:532312157845:web:7c3a02aecfa76d714db59c",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
