import React from 'react'
import './cart-dropdown.scss'
import CustomButton from '../custom-button/custom-button'
// import { connect } from 'react-redux'


const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items" />
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  )
}


// const mapStateToProps = (state) => ({
//   hidden: state.cart.hidden
// })


export default CartDropdown
