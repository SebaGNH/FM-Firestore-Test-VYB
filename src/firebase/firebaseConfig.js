import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5T9Kso4SetRndpka8wDpiVEZx_HjA6CM",
  authDomain: "vates-react-firebase.firebaseapp.com",
  projectId: "vates-react-firebase",
  storageBucket: "vates-react-firebase.appspot.com",
  messagingSenderId: "173069049659",
  appId: "1:173069049659:web:1be739c3aa4e2b4a22211e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;