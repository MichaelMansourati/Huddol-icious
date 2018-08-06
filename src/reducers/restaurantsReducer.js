import { FETCH_RESTAURANTS } from '../actions/types.js'

const initialState = {
  restaurants: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}