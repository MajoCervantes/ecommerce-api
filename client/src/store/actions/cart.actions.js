import axios from 'axios'

import { cartActions } from '../slices/cart.slice'

export const fetchCart = () => {
  return async (dispatch) => {
    try {
      // TODO: FETCH DATA FROM API
      const res = axios.get(`http://localhost:400/api/v1/orders//get-cart`)
      dispatch(cartActions.getCart({ cartProducts: [res] }))
    } catch (error) {
      console.log(error)
    }
  }
}
