import React from 'react'

const Navbar = (props) => {

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div onClick={() => props.toggler()} className="dark-mode__toggle">
        <div className={props.darkmode ? 'toggle toggled' : 'toggle'} />
      </div>
    </nav>
  )
}
export default Navbar
