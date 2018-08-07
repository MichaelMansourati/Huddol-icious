import {
  ADD_ITEM_TO_ORDER,
  REMOVE_ITEM_FROM_ORDER,
  SUBMIT_ORDER,
  ADD_ITEM_TO_PAST_ORDER,
  REMOVE_ITEM_FROM_PAST_ORDER
} from './types'

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

export const submitOrder = (currentOrder) => (dispatch, getState) => {
  const state = getState()
  dispatch({
    type: SUBMIT_ORDER,
    payload: {state}
  })
}

export const addItemToPastOrder = (name, price, orderId) => (dispatch, getState) => {
  const state = getState()
  dispatch({
    type: ADD_ITEM_TO_PAST_ORDER,
    payload: {name, price, state, orderId}
  })
}

export const removeItemFromPastOrder = (name, price, orderId) => (dispatch, getState) => {
  const state = getState()
  dispatch({
    type: REMOVE_ITEM_FROM_PAST_ORDER,
    payload: {name, price, state, orderId}
  })
}