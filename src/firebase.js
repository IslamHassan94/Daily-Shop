import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyChpNPva-DN7zBlzApXHeeFX_D7GA-ytRo",
  authDomain: "daily-shop-a03a1.firebaseapp.com",
  databaseURL: "https://daily-shop-a03a1.firebaseio.com",
  projectId: "daily-shop-a03a1",
  storageBucket: "daily-shop-a03a1.appspot.com",
  messagingSenderId: "849516435184",
  appId: "1:849516435184:web:ae8e5a2b063b36373c5435",
  measurementId: "G-H78FKVW2S3",
});

const auth = firebase.auth();

export {auth};
