import React, { createContext, useContext, useState } from 'react';
import {
    emailRegisterAction,
    emailLoginAction,
    emailDeleteAction,
    updateProfileAction,
    resetPasswordAction,
    googleLoginAction,
    facebookLoginAction,
    logoutAction,
    getAuthUserAction,
    monitorAuthState
} from '@/services/SupabaseAuthService';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [user, setUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true);
    //     const { subscription } = monitorAuthState((event, session) => {
    //         setUser(user);
    //         if (session?.user) {
    //             setIsAuthenticated(true);
    //         } else {
    //             setIsAuthenticated(false);
    //         }
    //         setLoading(false);
    //     });

    //     return () => subscription.unsubscribe();
    // }, []);

    // Common function to handle errors
    const handleError = (action, error) => {
        console.error(`Error during ${action}:`, error.message || error);
        setIsAuthenticated(false);
    };

    // Login Functions
    const emailLogin = async (email, password) => {
        try {
            const result = await emailLoginAction(email, password);
            return result;
        } catch (error) {
            handleError('email login', error);
        }
    };

    const emailRegister = async (email, password) => {
        try {
            const result = await emailRegisterAction(email, password);
            return result;
        } catch (error) {
            handleError('email registration', error);
        }
    };

    const googleLogin = async () => {
        try {
            const result = await googleLoginAction();
            return result;
        } catch (error) {
            handleError('Google login', error);
        }
    };

    const facebookLogin = async () => {
        try {
            const result = await facebookLoginAction();
            return result;
        } catch (error) {
            handleError('Facebook login', error);
        }
    };

    // Account Management Functions
    const emailDelete = async (email, password) => {
        try {
            const result = await emailDeleteAction(email, password);
            return result;
        } catch (error) {
            handleError('email deletion', error);
        }
    };

    const updateProfile = async (user, data) => {
        try {
            const result = await updateProfileAction(user, data);
            return result;
        } catch (error) {
            handleError('profile update', error);
        }
    };

    const resetPassword = async (email) => {
        try {
            const result = await resetPasswordAction(email);
            return result;
        } catch (error) {
            handleError('password reset', error);
        }
    };

    const logout = async () => {
        try {
            const result = await logoutAction();
            return result;
        } catch (error) {
            handleError('logout', error);
        }
    };

    const getAuthUser = async () => {
        try {
            const result = await getAuthUserAction();
            return result;
        } catch (error) {
            handleError('fetching authenticated user', error);
        }
    };

    const value = {
        isAuthenticated,
        user,
        isAdmin,
        loading,
        emailLogin,
        emailRegister,
        emailDelete,
        updateProfile,
        resetPassword,
        googleLogin,
        facebookLogin,
        logout,
        getAuthUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
