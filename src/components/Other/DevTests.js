import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Divider } from 'antd';

import Sibling1 from './Sibling1';
import Sibling2 from './Sibling2';

import Counter from './Counter';

import Parent from './Parent';

const DevTests = () => {

    const [APIdata, setAPIData] = useState([]);

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => setAPIData(response.data))
    //         .catch(error => console.error(error));
    // }, []);

    return (
        <>
            <div className="grid grid-cols-12 gap-1">
                <ul>
                    {APIdata.slice(0, 5).map((item, index) => (
                        <li key={item.id}>{index} = {item.title}</li>
                    ))}
                </ul>
            </div>

            <Divider />
            <Sibling1 setData={setAPIData} />
            <Sibling2 data={APIdata} />

            <Divider />
            <Counter />

            <Divider />
            <Parent />

            <Divider />
        </>
    );
};

export default DevTests;
