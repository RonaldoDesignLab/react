// Preloader.js
import React from 'react';

const Preloader = () => {
  return (
    <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000' }}>
      <div>
        Loading...
      </div>
    </div>
  );
};

export default Preloader;
