// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

// Your Firebase configuration object
const apiKey = import.meta.env.VITE_APP_API_KEY;
const authDomain = import.meta.env.VITE_APP_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_APP_PROJECT_ID;
const storageBucket = import.meta.env.VITE_APP_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_APP_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_APP_ID;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Set up Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Set up Facebook Auth Provider
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
