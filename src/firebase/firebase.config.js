
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtgq23UlKhwZVso50Vu7BVZdxbpwPZM5g",
    authDomain: "geniuscar-c055b.firebaseapp.com",
    projectId: "geniuscar-c055b",
    storageBucket: "geniuscar-c055b.appspot.com",
    messagingSenderId: "3309592802",
    appId: "1:3309592802:web:1c5ab5ba8416fb3944febb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app