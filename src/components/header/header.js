import React from 'react'
import { Link } from 'react-router-dom'
// import { ReactComponent as Logo } from '../../assets/crown.svg';
import logo  from '../../assets/logo.png'
import './header.scss'


const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      {/* <Logo className='logo' /> */}
      <img src={logo} alt="img" className='logo'></img>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
      {/* <Link className='option' to='/'>
        <img src={logo} alt="img"></img>
      </Link> */}
    </div>
  </div>
)


export default Header
