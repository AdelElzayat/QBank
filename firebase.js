import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPNFDUOWGGKL-wUNDrSnVOHVyLZ_MuHXQ",
  authDomain: "question-bank-feb38.firebaseapp.com",
  projectId: "question-bank-feb38",
  storageBucket: "question-bank-feb38.firebasestorage.app",
  messagingSenderId: "270772357839",
  appId: "1:270772357839:web:991088310bf5b26eaa45ba",
  measurementId: "G-GBJ4VCGDPY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const ADMIN_EMAIL = "admin@gmail.com";

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Persistence error:", error);
});

export {
  auth,
  db,
  googleProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  serverTimestamp,
  ADMIN_EMAIL,
};
