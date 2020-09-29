import React from 'react'
import { Link } from 'react-router-dom'
// import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase'
import logo  from '../../assets/logo.png'
import './header.scss'
import { connect } from 'react-redux';



const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      {/* <Logo className='logo' /> */}
      <img src={logo} alt="img" className='logo'></img>
    </Link>
    <div className='options'>
      <Link className='option' to='/'>
        Home
      </Link>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
      {/* <Link className='option' to='/signin'>
        Sign In
      </Link> */} 
      <div>
        {
          currentUser ? (
            <div className='option' onClick={async () => { 
              await auth.signOut().then(() => console.log('user signed out successfully'))
              } }> Sign Out</div>
          ) : (
            <Link className='option' to='/signin'> Sign In</Link>
          )
        }
      </div>

    </div>
  </div>
)


const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser 
})


export default connect(mapStateToProps)(Header)
