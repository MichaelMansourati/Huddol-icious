import { ADD_ITEM_TO_ORDER, REMOVE_ITEM_FROM_ORDER } from '../actions/types.js'

const initialState = {
  orders: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM_TO_ORDER:
    let ap = action.payload
    let name = action.payload.name
    let price = ap.price
    let ordersArr = ap.state.orders.orders
    let orderExistsIndex = ordersArr.map(o => o.name).indexOf(name)

      if (orderExistsIndex === -1) {
        console.log('order exists', orderExistsIndex)
        return {
          ...state,
          orders: [...ordersArr, {name, price, quantity: 1}]
        }
      } else if (orderExistsIndex > -1) {
        const ordersArrClone = ordersArr.slice(0)
        ordersArrClone[orderExistsIndex].quantity++
        return {
          ...state,
          orders: ordersArrClone
        }
      } else {
        return state
      }

    case REMOVE_ITEM_FROM_ORDER:
      ap = action.payload
      name = action.payload.name
      price = ap.price
      ordersArr = ap.state.orders.orders
      orderExistsIndex = ordersArr.map(o => o.name).indexOf(name)

      if (orderExistsIndex === -1) {
        return state
      } else if (orderExistsIndex > -1) {
        const ordersArrClone = ordersArr.slice(0)
        if(ordersArrClone[orderExistsIndex].quantity === 1) {
          ordersArrClone.splice(orderExistsIndex, 1)
        } else if (ordersArrClone[orderExistsIndex].quantity > 1) {
          ordersArrClone[orderExistsIndex].quantity--
        }
        return {
          ...state,
          orders: ordersArrClone
        }
      }

    default:
      return state
  }
}