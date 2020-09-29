import React from 'react'
import { Link } from 'react-router-dom'
// import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase'
import logo  from '../../assets/logo.png'
import './header.scss'
import { connect } from 'react-redux';
import CartIcon from '../card-icon/card-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'


// const handleClick = (e) => {
//   const display = document.querySelector(".cart-dropdown");

//   if (display.classList) { 
//     display.classList.toggle("active");
//   } else {
//     var classes = display.className.split(" ");
//     var i = classes.indexOf("active");

//     if (i >= 0) 
//       classes.splice(i, 1);
//     else 
//       classes.push("active");
//       display.className = classes.join(" "); 
//   }
// }


const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
      {/* <div onClick={handleClick} >
        <CartIcon />
      </div> */}
      </div>

      { 
        hidden ? null :  <CartDropdown /> 
      }

  </div>
)


// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden
// })

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})


export default connect(mapStateToProps)(Header)
