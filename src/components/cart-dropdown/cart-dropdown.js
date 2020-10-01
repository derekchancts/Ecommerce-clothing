import React from 'react'
import './cart-dropdown.scss'

// import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button'

import CartItem from '../cart-item/cart-item'
import { selectCartItems} from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart-actions';




// const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
// const CartDropdown = ({ cartItems, history, ...otherProps }) => {
const CartDropdown = ({ cartItems, history, dispatch }) => {

  // console.log(otherProps)

  return (
    <div className='cart-dropdown'>
      <div className="cart-items" >
        { cartItems.length ?
          cartItems.map(cartItem => 
         <CartItem key={cartItem.id} item={cartItem} />
        ) :
          <span className="empty-message">Your cart is empty</span>
        }
       </div>
       {/* <Link to='/checkout'> */}
        {/* <CustomButton onClick={async () => await Promise.all([history.push('/checkout'), toggleCartHidden()]) }> */}
        <CustomButton onClick={() => { 
          history.push('/checkout');
          dispatch(toggleCartHidden())
        }}>
        Go to Checkout</CustomButton>
      {/* </Link> */}
    </div>
  )
}


// const mapStateToProps = (state) => ({
//   cartItems: state.cart.cartItems
// })

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// })

// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
//   hidden: selectCartHidden(state)
// }) 


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
}) 

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// }) 


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))
// export default withRouter(connect(mapStateToProps, { toggleCartHidden })(CartDropdown))
export default withRouter(connect(mapStateToProps)(CartDropdown))
