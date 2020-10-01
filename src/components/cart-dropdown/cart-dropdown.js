import React from 'react'
import './cart-dropdown.scss'

import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/cart/cart-selectors'

import { connect } from 'react-redux'


const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items" >
        {cartItems.map(cartItem => 
          <CartItem key={cartItem.id} item={cartItem} />
        )}
       </div>
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  )
}


// const mapStateToProps = (state) => ({
//   cartItems: state.cart.cartItems
// })

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// })

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})




export default connect(mapStateToProps)(CartDropdown)
