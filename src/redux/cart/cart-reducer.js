import { CartActionTypes } from './cart-types'
import { addItemToCart } from './cart-utils'


const Initial_state = {
  hidden: true,
  cartItems: []
}


const cartReducer = (state = Initial_state, action) => {
  switch(action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // cartItems: [...state.cartItems, action.payload]
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}


export default cartReducer