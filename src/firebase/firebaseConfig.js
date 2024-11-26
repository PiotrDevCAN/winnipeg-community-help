// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyChNbD1bySZI6maJSLE7MlduO2oWhReZKM",
    authDomain: "winnipeg-help.firebaseapp.com",
    projectId: "winnipeg-help",
    storageBucket: "winnipeg-help.firebasestorage.app",
    messagingSenderId: "258822501876",
    appId: "1:258822501876:web:2493be94b0bccbed6675a1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
