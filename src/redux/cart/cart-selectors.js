import { createSelector } from 'reselect'


// Type 1: example of Input Selector
// usually get the whole state and then get back a slice of it, 1 layer deep usually
const selectCart = state => state.cart;


export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems 
)


export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)
