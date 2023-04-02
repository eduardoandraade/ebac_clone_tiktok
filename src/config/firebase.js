
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAGgDUGtoLSWhtiIvwy2w_2dsVsKym4BnM",
  authDomain: "tiktok---jornada-ebac.firebaseapp.com",
  projectId: "tiktok---jornada-ebac",
  storageBucket: "tiktok---jornada-ebac.appspot.com",
  messagingSenderId: "934491207318",
  appId: "1:934491207318:web:7c9b153ad5345b9498f4b7"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;