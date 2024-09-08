import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx0m_4ThbIaSCNB4PK6HNDR2vdM4xRP-c",
  authDomain: "login-authentication-c6a50.firebaseapp.com",
  projectId: "login-authentication-c6a50",
  storageBucket: "login-authentication-c6a50.appspot.com",
  messagingSenderId: "847508686854",
  appId: "1:847508686854:web:46a8a03638d712f80adb87",
  measurementId: "G-M0SEK2V1SN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;