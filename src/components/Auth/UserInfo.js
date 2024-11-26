import { useEffect, useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from "../../services/firebaseService";

// import { auth } from "../../services/authService";

const UserInfo = () => {

    const { isAuthenticated, user, getAuthUser } = useAuthContext();

    // console.log(user);
    // console.log(isAuthenticated);

    // useEffect(() => {
    //     console.log('useEffect');
    //     return () => getAuthUser();
    // }, [getAuthUser]);

    return (
        <div>
            {user ? <h2>Welcome, {user.email}</h2> : <h2>Please log in or sign up</h2>}
        </div>
    );
}

export default UserInfo;
