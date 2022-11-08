import React from 'react';

const Contacts = () => {
  return (
    <div className="Posts">
      <div style={{ display: 'flex' }}>
        <div className="envelope"></div>
        <h2 style={{ margin: '20px' }}>XXXXXXXXXX@gmail.com</h2>
      </div>
      <div style={{ display: 'flex' }}>
        <div className="phone"></div>
        <h2 style={{ margin: '20px' }}> +7(XXX)XXXXXXX</h2>
      </div>
    </div>
  );
};

export default Contacts;
