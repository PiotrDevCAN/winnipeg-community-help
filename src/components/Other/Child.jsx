// Child.js
import React from 'react';

function Child({ onSendData }) {
    const sendData = () => {
        onSendData("Data from Child");
    };

    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={sendData}>Send Data to Parent</button>
        </div>
    );
}

export default Child