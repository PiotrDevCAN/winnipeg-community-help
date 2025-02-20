
// Sibling1.js
import React from 'react';

function Sibling1({ setData }) {

  const sendData = () => {
    setData("Data from SiblingOne");
  };

  const cleanData = () => {
    setData("");
  }

  return (
    <div>
      <h2>Sibling One</h2>
      <p>
        <button onClick={sendData}>Send Data to Sibling Two</button>
      </p>
      <p>
        <button onClick={cleanData}>Clean Data</button>
      </p>
    </div>
  );
}

export default Sibling1;