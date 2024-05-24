import React from 'react'
import Logo from '../img/logo.png' 

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
        <img src={Logo} alt=""></img>
        </div>
        <div className="links">links</div>
      </div>
    </div>
  )
}

export default Navbar          