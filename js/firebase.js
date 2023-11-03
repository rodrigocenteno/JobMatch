// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3YX2IJTtzfPtDi-0d-jCsRsx-KBzhOlM",
  authDomain: "jmatch-9f58c.firebaseapp.com",
  projectId: "jmatch-9f58c",
  storageBucket: "jmatch-9f58c.appspot.com",
  messagingSenderId: "188149385513",
  appId: "1:188149385513:web:bf0224f3c079a561af4f38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)