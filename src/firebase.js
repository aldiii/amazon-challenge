import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOGvYxodBZJdRwgPQ5p1ezl_VPkeerqqc",
  authDomain: "e-challenge-9828b.firebaseapp.com",
  databaseURL: "https://e-challenge-9828b.firebaseio.com",
  projectId: "e-challenge-9828b",
  storageBucket: "e-challenge-9828b.appspot.com",
  messagingSenderId: "586157237824",
  appId: "1:586157237824:web:a931cd45216aacb753a1a5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
