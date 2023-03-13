import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDjEgNpnXAzn3m545O4Og1vXMi37EYK3sk",
  authDomain: "clone-eca8d.firebaseapp.com",
  projectId: "clone-eca8d",
  storageBucket: "clone-eca8d.appspot.com",
  messagingSenderId: "574203024080",
  appId: "1:574203024080:web:5092002697100c286d44d5",
  measurementId: "G-485J6T4B9Y",
};

firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
