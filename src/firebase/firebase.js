import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC48i5ZUErpOigxkyRqEhg-VX5mRDht-js",
    authDomain: "proyecto4crud.firebaseapp.com",
    projectId: "proyecto4crud",
    storageBucket: "proyecto4crud.appspot.com",
    messagingSenderId: "636596660144",
    appId: "1:636596660144:web:418344105933c2e1f55875"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);