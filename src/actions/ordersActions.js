import { ADD_ITEM_TO_ORDER, REMOVE_ITEM_FROM_ORDER } from './types'

export const addItemToOrder = (name, price) => (dispatch, getState)=> {
  const state = getState()
  dispatch({
    type: ADD_ITEM_TO_ORDER,
    payload: {name, price, state}
  })
}

export const removeItemFromOrder = (name, price) => (dispatch, getState) => {
  const state = getState()
  dispatch({
    type: REMOVE_ITEM_FROM_ORDER,
    payload: {name, price, state}
  })
}