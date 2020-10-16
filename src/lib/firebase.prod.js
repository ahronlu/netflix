import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD0fmwrF9MfozM_TtKQ_ToHpUPHr8tYcyc",
  authDomain: "koftov-netflix.firebaseapp.com",
  databaseURL: "https://koftov-netflix.firebaseio.com",
  projectId: "koftov-netflix",
  storageBucket: "koftov-netflix.appspot.com",
  messagingSenderId: "100399744632",
  appId: "1:100399744632:web:8f78760e0e59251657cf8d",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
