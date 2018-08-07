import { ADD_ITEM_TO_ORDER, REMOVE_ITEM_FROM_ORDER, SUBMIT_ORDER } from '../actions/types.js'

const initialState = {
  currentOrder: [],
  pastOrders: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM_TO_ORDER:
    let ap = action.payload
    let name = action.payload.name
    let price = ap.price
    let currentOrderArr = ap.state.orders.currentOrder
    let itemExistsIndex = currentOrderArr.map(o => o.name).indexOf(name)

      if (itemExistsIndex === -1) {
        console.log('order exists', itemExistsIndex)
        return {
          ...state,
          currentOrder: [...currentOrderArr, {name, price, quantity: 1}]
        }
      } else if (itemExistsIndex > -1) {
        const currentOrderArrClone = currentOrderArr.slice(0)
        currentOrderArrClone[itemExistsIndex].quantity++
        return {
          ...state,
          currentOrder: currentOrderArrClone
        }
      } else {
        return state
      }

    case REMOVE_ITEM_FROM_ORDER:
      ap = action.payload
      name = action.payload.name
      price = ap.price
      currentOrderArr = ap.state.orders.currentOrder
      itemExistsIndex = currentOrderArr.map(o => o.name).indexOf(name)

      if (itemExistsIndex === -1) {
        return state
      } else if (itemExistsIndex > -1) {
        const currentOrderArrClone = currentOrderArr.slice(0)
        if(currentOrderArrClone[itemExistsIndex].quantity === 1) {
          currentOrderArrClone.splice(itemExistsIndex, 1)
        } else if (currentOrderArrClone[itemExistsIndex].quantity > 1) {
          currentOrderArrClone[itemExistsIndex].quantity--
        }
        return {
          ...state,
          currentOrder: currentOrderArrClone
        }
      }

    case SUBMIT_ORDER:
      ap = action.payload
      currentOrderArr = ap.state.orders.currentOrder
      const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      let pastOrdersArr = ap.state.orders.pastOrders
      console.log("pastOrdersArr", pastOrdersArr)
      return {
        ...state,
        pastOrders: [...pastOrdersArr, {id, order: currentOrderArr}],
        currentOrder: []
      }
    default:
      return state
  }
}