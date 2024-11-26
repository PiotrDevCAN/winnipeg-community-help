import React, { useState, useEffect } from 'react';

const styles = {
    banner: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
    },
    button: {
        marginLeft: '10px',
        padding: '5px 10px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
    },
};

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setVisible(false);
    };

    return (
        visible && (
            <div style={styles.banner}>
                <p>This website uses cookies to improve user experience.</p>
                <button onClick={handleAccept} style={styles.button}>Accept</button>
            </div>
        )
    );
};

export default CookieConsent;