import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArBCpLZE2DdaHoZyuPRO-I7QZ6OWs5cNw",
  authDomain: "reactjs-1288d.firebaseapp.com",
  projectId: "reactjs-1288d",
  storageBucket: "reactjs-1288d.appspot.com",
  messagingSenderId: "850947179803",
  appId: "1:850947179803:web:29f95da1e192c10116ffbe",
  measurementId: "G-DH8590SFXM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);