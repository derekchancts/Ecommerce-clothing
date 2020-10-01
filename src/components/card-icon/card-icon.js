import React from 'react';
import './card-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden} >
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)


const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})


// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce(
//     (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
// })

// const mapStateToProps = (state) => ({
//   itemCount: selectCartItemsCount(state)
// })

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)