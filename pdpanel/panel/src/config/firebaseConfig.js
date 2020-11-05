import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAPMTosWBHTUyel6tqAyZ_kT47WjbTk9sY",
    authDomain: "pdpanel-71341.firebaseapp.com",
    databaseURL: "https://pdpanel-71341.firebaseio.com",
    projectId: "pdpanel-71341",
    storageBucket: "pdpanel-71341.appspot.com",
    messagingSenderId: "947918739622",
    appId: "1:947918739622:web:875f3f3ace5e2ed7163c67"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;