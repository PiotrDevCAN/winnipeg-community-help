// Child.js
import React, { useState } from 'react';
import Child from './Child';

function Parent() {
    const [data, setData] = useState('');

    const handleData = (childData) => {
        setData(childData);
    };
    return (
        <div>
            <h1>Parent Component</h1>
            <p>Data from Child: {data}</p>
            <Child onSendData={handleData} />
        </div>
    )
}

export default Parent