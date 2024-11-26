import React, { useState } from 'react';
import { authenticate, apiCall } from './authService';

const App = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // Handle user login
    const handleLogin = async () => {
        try {
            await authenticate('piotr', 'M1IHGcYiuj8Vg3eKm2G08kQqly_g2snkk_hFCzOgPvo');
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    // Fetch protected data
    const fetchProtectedData = async () => {
        try {
            const result = await apiCall('/protected-resource', { method: 'GET' });
            setData(result);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>React OAuth with Fetch API</h1>
            <button onClick={handleLogin}>Log In</button>
            <button onClick={fetchProtectedData}>Fetch Protected Data</button>

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

export default App;
