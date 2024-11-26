import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from "./firebaseService";

const emailRegisterAction = async (email, password) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result;
    } catch (error) {
        console.error("Error during Email register: ", error);
        throw error;
    }
}

const emailLoginAction = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result;
    } catch (error) {
        console.error("Error during Email login: ", error);
        throw error;
    }
}

const googleLoginAction = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result;
    } catch (error) {
        console.error("Error during Google login: ", error);
        throw error;
    }
};

const facebookLoginAction = async () => {
    try {
        const result = await signInWithPopup(auth, facebookProvider);
        return result;
    } catch (error) {
        console.error("Error during Facebook login: ", error);
        throw error;
    }
};

const logoutAction = async () => {
    try {
        const result = await signOut(auth);
        return result;
    } catch (error) {
        console.error("Error during logout: ", error);
        throw error;
    }
};

const getAuthUserAction = async () => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
            console.log("User is signed in: ", user);
            return user;
        } else {
            console.log("No user is signed in.");
            return null;
        }
    });

    return () => unsubscribe();
};

// Fetch users when the component mounts
// useEffect(() => {
//     const fetchUsers = async () => {
//         try {
//             const userList = await getUsers();
//             setUsers(userList);
//         } catch (err) {
//             setError('Failed to fetch users');
//         }
//     };

//     fetchUsers();
// }, []);

export { auth, emailRegisterAction, emailLoginAction, googleLoginAction, facebookLoginAction, logoutAction, getAuthUserAction };