import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../../actions/restaurantsActions'
import { addItemToOrder, removeItemFromOrder } from '../../actions/ordersActions'

class Restaurants extends Component {
  componentDidMount() {
    this.props.fetchRestaurants()
  }


  render() {
    console.log("this.props", this.props)
    const currentOrders = this.props.orders.map(item => {
      return(
        <li>{item.name} - ${item.price} x {item.quantity}</li>
      )
    })
    //async
    const restaurantsList = this.props.restaurants ? this.props.restaurants.map(restaurant => {
      return(
          <li key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <h3>menu</h3>
            <ul>
              {restaurant.menu.map(item => {
                return(
                  <li key={item.name}>
                    <p>{item.name}...{item.price}</p>
                    <button onClick={() => this.props.addItemToOrder(item.name, item.price)}>+</button>
                    <button onClick={() => this.props.removeItemFromOrder(item.name, item.price)}>-</button>
                  </li>
                )
              })}
            </ul>
          </li>
      )
    })
    :<span>loading...</span>

    return(
      <div>
        <h1>Restaurants</h1>

        <p>Choose some items from the menu of one of the restaurants below</p>
        <button onClick={() => this.props.changePage()}>Go to My Orders page via redux</button>
        <ul>
        {restaurantsList}
        </ul>
        <h2>Current Order</h2>
        <ul>
          {currentOrders}
        </ul>
      </div>
    )
  }
}

Restaurants.propTypes = {
  fetchRestaurants: PropTypes.func.isRequired,
  restaurants: PropTypes.array
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.items,
  orders: state.orders.orders
})

const mapDispatchToProps = dispatch => bindActionCreators({
  removeItemFromOrder: (item, price) => removeItemFromOrder(item, price),
  addItemToOrder: (item, price) => addItemToOrder(item, price),
  fetchRestaurants: () => fetchRestaurants(),
  changePage: () => push('/my-orders')
}, dispatch)

// const mapStateToProps = state => ({
//   restaurants: fetchRestaurants()
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurants)