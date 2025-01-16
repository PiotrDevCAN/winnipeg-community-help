import React, { useState } from 'react';
import { useAuthContext } from '@/context/AuthContext';

const Login = () => {

    const { emailLogin } = useAuthContext();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await emailLogin(email, password);
            alert('User logged in successfully!');
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    return (
        <div>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
