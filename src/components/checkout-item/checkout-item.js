import React from 'react'
import './checkout-item.scss'

// import { connect } from 'react-redux';
// import { selectCartItems} from '../../redux/cart/cart-selectors'
// import { createStructuredSelector } from 'reselect'


const CheckoutItem = ({ cartItem }) => {
// const CheckoutItem = ({ cartItem: { name, imageUrl, quantity, price } }) => {  
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt='item' />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">{cartItem.quantity}</span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
}


export default CheckoutItem
