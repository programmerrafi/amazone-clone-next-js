import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB-p8CaifnFMYgQjHRZHOjY5GWEQ6lb9uQ",
  authDomain: "fir-3200a.firebaseapp.com",
  projectId: "fir-3200a",
  storageBucket: "fir-3200a.appspot.com",
  messagingSenderId: "1019115385385",
  appId: "1:1019115385385:web:4ad659b6a3842e63e0e238",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
