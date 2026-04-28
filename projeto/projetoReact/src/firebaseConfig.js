import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXUgHbUJv1uKHOCH8_6jJBQT1WZ3DB1YQ",
  authDomain: "cadastro--login.firebaseapp.com",
  projectId: "cadastro--login",
  storageBucket: "cadastro--login.firebasestorage.app",
  messagingSenderId: "432919474886",
  appId: "1:432919474886:web:1de58c6b62b571557a1dc7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);