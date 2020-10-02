import React from 'react'
import './checkout-item.scss'

// import { selectCartItems} from '../../redux/cart/cart-selectors'
// import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'
import { removeItem, addItem, reduceItem } from '../../redux/cart/cart-actions'



const CheckoutItem = ({ cartItem, removeItem, addItem, reduceItem }) => {
// const CheckoutItem = ({ cartItem: { name, imageUrl, quantity, price } }) => {  
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt='item' />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceItem(cartItem)}>&#10094;</div>
        <span className="value"> {cartItem.quantity} </span>
        <div className="arrow" onClick={() => addItem(cartItem)} >&#10095;</div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem.id) } >&#10005;</div>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItem(id)),
  addItem: (item) => dispatch(addItem(item)),
  reduceItem: (item) => dispatch(reduceItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem)
