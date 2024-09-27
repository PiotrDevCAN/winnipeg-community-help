import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Divider } from 'antd';
import Sibling1 from '../components/Other/Sibling1';
import Sibling2 from '../components/Other/Sibling2';

import Counter from '../components/Other/Counter';

import Parent from '../components/Other/Parent';

const HomePage = () => {

  const [APIdata, setAPIData] = useState([]);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => setAPIData(response.data))
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <div>
      {/* <div className="grid grid-cols-12 gap-1">
        <ul>
          {APIdata.slice(0, 5).map((item, index) => (
            <li key={item.id}>{index} = {item.title}</li>
          ))}
        </ul>
      </div> */}

      {/* <Divider />
      <Sibling1 setData={setAPIData} />
      <Sibling2 data={APIdata} />

      <Divider />
      <Counter />

      <Divider />
      <Parent />

      <Divider /> */}
      <div className="grid grid-cols-3 gap-1">
        <div
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
          <div className="min-h-[256px]">
            <img src="https://readymadeui.com/Imagination.webp" className="w-full" img="" />
          </div>

          <div className="p-6">
            <h3 className="text-gray-800 text-xl font-bold">Ask for help</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Let volunteers in your community know you need their help
            </p>
            <Link to="/request/new">
              <button type="button"
                className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button>
            </Link>
          </div>
        </div>

        <div
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
          <div className="min-h-[256px]">
            <img src="https://readymadeui.com/Imagination.webp" className="w-full" img="" />
          </div>

          <div className="p-6">
            <h3 className="text-gray-800 text-xl font-bold">Offer your help</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Have a look at present needs of your community and repond on them
            </p>
            <Link to="/offer/new">
              <button type="button"
                className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button>
            </Link>
          </div>
        </div>

        <div
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
          <div className="min-h-[256px]">
            <img src="https://readymadeui.com/Imagination.webp" className="w-full" img="" />
          </div>

          <div className="p-6">
            <h3 className="text-gray-800 text-xl font-bold">Communities</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Browse currently registered Communities or add a new one you are a memeber of
            </p>
            <Link to='/community/list'>
              <button type="button"
                className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
