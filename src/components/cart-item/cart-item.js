import React from 'react'
import './cart-item.scss'

import { connect } from 'react-redux'
import { removeItem } from '../../redux/cart/cart-actions'



const CartItem = ({ item: { imageUrl, price, name, quantity, id }, removeItem }) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt='item' />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
      <div className="remove-button" onClick={() => { removeItem(id) }} >&#10005;</div>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItem(id))
})


export default connect(null, mapDispatchToProps)(CartItem)
