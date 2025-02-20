import { supabase } from "./supabaseService";

const emailRegisterAction = async (email, password) => {
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: 'http://localhost:3000',
            },
        })

        if (error) {
            console.error('Error signing up user:', error.message);
            return { success: false, message: error.message };
        }

        return { success: true, user: data.user, message: 'User registered successfully!' };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { success: false, message: 'Unexpected error occurred.' };
    }
};

const emailDeleteAction = async (userId) => {
    try {
        const { error } = await supabase.auth.admin.deleteUser(userId);

        if (error) {
            console.error('Error deleting user:', error.message);
            return { success: false, message: error.message };
        }

        return { success: true, message: 'User successfully deleted' };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { success: false, message: 'Unexpected error occurred' };
    }
};

const emailLoginAction = async (email, password) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            console.error('Error logging in:', error.message);
            return { success: false, message: error.message };
        }

        console.log('Login successful:', data);
        return { success: true, user: data.user, message: 'User logged in successfully!' };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { success: false, message: 'Unexpected error occurred' };
    }
};

const updateProfileAction = async (user, data) => {
    // try {
    // const result = await updateProfile(user, data);
    // return result;
    return true;
    // } catch (error) {
    //     console.error("Error during User Profile update: ", error);
    //     throw error;
    // }
}

const resetPasswordAction = async (email) => {
    try {
        const { data, error } = await supabase.auth.resetPasswordForEmail({
            email,
            options: {
                redirectTo: 'http://localhost:3000/update-password',
            },
        });

        if (error) {
            console.error('Error sending password reset email:', error.message);
            return { success: false, message: error.message };
        }

        console.log('Password reset email sent:', data);
        return { success: true, message: 'Password reset email sent successfully' };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { success: false, message: 'Unexpected error occurred.' };
    }
};

const googleLoginAction = async () => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });

        if (error) {
            console.error('Error logging in via Google:', error.message);
            return { success: false, message: error.message };
        }

        console.log('Login successful:', data);
        return { success: true, user: data.user };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { success: false, message: 'Unexpected error occurred.' };
    }
};

const facebookLoginAction = async () => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'facebook',
        });

        if (error) {
            console.error('Error logging in via Facebook:', error.message);
            return { success: false, message: error.message };
        }

        console.log('Login successful:', data);
        return { success: true, user: data.user };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { success: false, message: 'Unexpected error occurred.' };
    }
};

const logoutAction = async () => {
    try {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error('Error logging out user:', error.message);
            return { success: false, message: error.message };
        }

        return { success: true, message: 'User successfully logged out' };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { success: false, message: 'Unexpected error occurred.' };
    }
};

const getAuthUserAction = async () => {
    try {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
            console.error('Error getting user info:', error.message);
            return { success: false, message: error.message };
        }

        return { success: true, user: data.user, message: 'User found successfully' };
    } catch (err) {
        console.error('Unexpected error:', err);
        return { success: false, message: 'Unexpected error occurred.' };
    }
};

const monitorAuthState = (callback) => {
    const { data } = supabase.auth.onAuthStateChange(callback);
    return data;
}

export { emailRegisterAction, emailLoginAction, emailDeleteAction, updateProfileAction, resetPasswordAction, googleLoginAction, facebookLoginAction, logoutAction, getAuthUserAction, monitorAuthState };