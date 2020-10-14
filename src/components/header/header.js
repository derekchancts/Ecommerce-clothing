import React, { useState, useEffect} from 'react'
// import React from 'react'
// import './header.scss'
import { HeaderContainer, LogoContainer , OptionsContainer, OptionLink, OptionDiv } from './header-styles'

// import { Link } from 'react-router-dom'
// import { ReactComponent as Logo } from '../../assets/crown.svg';
// import { auth } from '../../firebase/firebase'
// import logo  from '../../assets/logo.png'
import logo  from '../../assets/crown.svg'

import { connect } from 'react-redux';
import CartIcon from '../card-icon/card-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { selectCartHidden } from '../../redux/cart/cart-selectors'

import { signOutStart } from '../../redux/user/user-actions'


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



const Header = ({ currentUser, hidden, signOutStart }) => {

  const [color, setColor] = useState('white')

  const listenScrollEvent = e => {
    if (window.scrollY > 0) {
      setColor('#fff')
    } else {
      setColor('white')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])
 

//  return (
//   <div className='header' style={{backgroundColor: color}}>
//   {/* <div className='header'> */}
//     <Link className='logo-container' to='/'>
//       {/* <Logo className='logo' /> */}
//       <img src={logo} alt="img" className='logo'></img>
//     </Link>
//     <div className='options'>
//       <Link className='option' to='/'>
//         Home
//       </Link>
//       <Link className='option' to='/shop'>
//         Shop
//       </Link>
//       <Link className='option' to='/contact'>
//         Contact
//       </Link>
//       {/* <Link className='option' to='/signin'>
//         Sign In
//       </Link> */} 
//       <div>   
//         {
//           currentUser ? (
//             <div className='option' onClick={async () => { 
//               await auth.signOut().then(() => console.log('user signed out successfully'))
//               } }>Sign_Out</div>
//           ) : (
//             <Link className='option' to='/signin'>Sign_In</Link>
//           )
//         }
//       </div>
//       <CartIcon />
//       {/* <div onClick={handleClick} >
//         <CartIcon />
//       </div> */}
//       </div>

//       { 
//         hidden ? null :  <CartDropdown /> 
//       }

//   </div>
// )}



return (
  <HeaderContainer style={{backgroundColor: color}}>
    <LogoContainer to='/'>
      <img src={logo} alt="img" ></img>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/'>
        Home
      </OptionLink>
      <OptionLink  to='/shop'>
        Shop
      </OptionLink>
      <OptionLink  to='/contact'>
        Contact
      </OptionLink>
      <div>   
        {
          currentUser ? (
            <OptionDiv  onClick={signOutStart}>SignOut</OptionDiv>
          ) : (
            <OptionLink to='/signin'>SignIn</OptionLink>
          )
        }
      </div>
      <CartIcon />
      </OptionsContainer>

      { 
        hidden ? null :  <CartDropdown /> 
      }

  </HeaderContainer>
  )

}





        // {
        //   currentUser ? (
        //     <OptionDiv  onClick={async () => { 
        //       await auth.signOut().then(() => console.log('user signed out successfully'))
        //       } }>SignOut</OptionDiv>
        //   ) : (
        //     <OptionLink to='/signin'>SignIn</OptionLink>
        //   )
        // }
 




/*
currentUser ? (
            <OptionLink as='div'  onClick={async () => { 
              await auth.signOut().then(() => console.log('user signed out successfully'))
              } }>SignOut</OptionLink>
          ) : (
            <OptionLink to='/signin'>SignIn</OptionLink>
          )

*/



// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden
// })

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden
// })

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})


const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
