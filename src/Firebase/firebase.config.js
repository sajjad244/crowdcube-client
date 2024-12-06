// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5baVWSMJkfn3-YWnBEvTT-Jq3FH1o4hc",
    authDomain: "crowdcube-project-4af20.firebaseapp.com",
    projectId: "crowdcube-project-4af20",
    storageBucket: "crowdcube-project-4af20.firebasestorage.app",
    messagingSenderId: "337013334341",
    appId: "1:337013334341:web:d0bf75907b63e63b829e2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;