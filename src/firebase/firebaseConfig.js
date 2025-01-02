// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBwoRNsXm599ENGfMEYb2rCLCts4eb8H0g",
    authDomain: "winnipeg-cares.firebaseapp.com",
    projectId: "winnipeg-cares",
    storageBucket: "winnipeg-cares.firebasestorage.app",
    messagingSenderId: "91752818094",
    appId: "1:91752818094:web:0d2c6ff0a9281852a4143f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
