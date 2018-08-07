import { combineReducers } from 'redux'
import restaurantsReducer from './restaurantsReducer'
import ordersReducer from './ordersReducer'

export default combineReducers({
  restaurants: restaurantsReducer,
  orders: ordersReducer
})