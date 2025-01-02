import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
    onAuthStateChanged
} from 'firebase/auth';
// import { auth, googleProvider, facebookProvider } from "./firebaseService";

const auth = null;

const emailRegisterAction = async (email, password) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result;
    } catch (error) {
        console.error("Error during Email register: ", error);
        throw error;
    }
}

const emailDeleteAction = async (email, password) => {
    try {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                user.delete().then(() => {
                    console.log("User deleted successfully");
                    return true;
                }).catch((error) => {
                    console.error("Error deleting user: ", error);
                    return false;
                });
            })
            .catch((error) => {
                console.error("Error signing in: ", error);
                return false;
            });
    } catch (error) {
        console.error("Error during Email deleting: ", error);
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

const updateProfileAction = async (user, data) => {
    try {
        const result = await updateProfile(user, data);
        return result;
    } catch (error) {
        console.error("Error during User Profile update: ", error);
        throw error;
    }
}

const resetPasswordAction = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return true;
    } catch (error) {
        console.error("Error during Password reset: ", error);
        throw error;
    }
}

const googleLoginAction = async () => {
    try {
        // const result = await signInWithPopup(auth, googleProvider);
        // return result;
        return null;
    } catch (error) {
        console.error("Error during Google login: ", error);
        throw error;
    }
};

const facebookLoginAction = async () => {
    try {
        // const result = await signInWithPopup(auth, facebookProvider);
        // return result;
        return null;
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
    const unsubscribe = await onAuthStateChanged(auth, (user) => {
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

const monitorAuthState = (callback) => {
    return onAuthStateChanged(auth, callback);
};

export { auth, emailRegisterAction, emailLoginAction, emailDeleteAction, updateProfileAction, resetPasswordAction, googleLoginAction, facebookLoginAction, logoutAction, getAuthUserAction, monitorAuthState };