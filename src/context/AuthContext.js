import React, { createContext, useContext, useState } from 'react';
import { emailLoginAction, googleLoginAction, facebookLoginAction, logoutAction, getAuthUserAction } from '../services/authService';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const [user, setUser] = useState(null);
    // const [isAdmin, setIsAdmin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [user, setUser] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);

    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = async () => {
        if (loading) return; // Prevent multiple popups

        setLoading(true);
        try {
            await googleLogin();
            // Handle successful login
        } catch (error) {
            console.error('Error during login:', error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFacebookLogin = async () => {
        if (loading) return; // Prevent multiple popups

        setLoading(true);
        try {
            await facebookLogin();
            // Handle successful login
        } catch (error) {
            console.error('Error during login:', error.message);
        } finally {
            setLoading(false);
        }
    };



    const emailLogin = async (email, password) => {
        try {
            const result = await emailLoginAction(email, password);
            setUser(result.user); // Save user info in the state
            setIsAuthenticated(true);
            console.log("User Info: ", result.user);
        } catch (error) {
            console.error("Error during Email login: ", error);
            setIsAuthenticated(false);
        }
    }

    const googleLogin = async () => {
        try {
            const result = await googleLoginAction();
            setUser(result.user); // Save user info in the state
            setIsAuthenticated(true);
            console.log("User Info: ", result.user);
        } catch (error) {
            console.error("Error during Google login: ", error);
            setIsAuthenticated(false);
        }
    };

    const facebookLogin = async () => {
        try {
            const result = await facebookLoginAction();
            setUser(result.user); // Save user info in the state
            setIsAuthenticated(true);
            console.log("User Info: ", result.user);
        } catch (error) {
            console.error("Error during Facebook login: ", error);
            setIsAuthenticated(false);
        }
    };

    const logout = async () => {
        try {
            const result = await logoutAction();
            setUser(null); // Clear user info
            setIsAuthenticated(false);
            console.log("User logged out");
        } catch (error) {
            console.error("Error during logout: ", error);
        }
    };

    const getAuthUser = async () => {
        try {
            const result = await getAuthUserAction();
            setUser(result.user); // Save user info in the state
            setIsAuthenticated(true);
            console.log("User auth - auth context");
        } catch (error) {
            console.error("Error during User auth: ", error);
        }
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            user,
            isAdmin,
            emailLogin,
            googleLogin,
            handleGoogleLogin,
            facebookLogin,
            handleFacebookLogin,
            logout,
            getAuthUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};
