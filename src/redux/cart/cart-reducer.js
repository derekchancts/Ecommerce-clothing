import { CartActionTypes } from './cart-types'
import { addItemToCart, reduceItemFromCart } from './cart-utils'


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
    case CartActionTypes.REMOVE_ITEM:
      let newcartItems = state.cartItems.filter(newcartItem => newcartItem.id !== action.payload )

      return {
        ...state,
        cartItems: newcartItems
      }
    case CartActionTypes.REDUCE_ITEM:
      return {
        ...state,
        cartItems: reduceItemFromCart(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state
  }
}


export default cartReducer