
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASn-5PbdaBgkWaJ9bI8eE5zoUmzea4Zzs",
    authDomain: "evaluationassignment-89c3d.firebaseapp.com",
    projectId: "evaluationassignment-89c3d",
    storageBucket: "evaluationassignment-89c3d.appspot.com",
    messagingSenderId: "424445045699",
    appId: "1:424445045699:web:42f682369363e33fb5eb76",
    measurementId: "G-M6LCDLEBGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app