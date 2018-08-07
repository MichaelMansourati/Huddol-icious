import axios from 'axios'
import { FETCH_RESTAURANTS } from './types'

export const fetchRestaurants = () => dispatch => {
  return axios
  .get("https://huddolapi-next.herokuapp.com/v1/challenge")
  .then(response => {
    dispatch({
      type: FETCH_RESTAURANTS,
      payload: response.data
    })
  })
}