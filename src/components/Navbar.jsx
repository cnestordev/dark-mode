import React, { useState } from 'react'


const Navbar = (props) => {


  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={() => props.toggler()}
          className={props.darkmode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};
// test.............................
export default Navbar;
