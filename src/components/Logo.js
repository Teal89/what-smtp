import React from 'react';

import './components.css';

import searching from './searching.png';


const Logo = () => {
  return (
  	<div className="logo">

          <img src={searching} width="30%" height="30%"  />
        </div>
    
  );
};

export default Logo;