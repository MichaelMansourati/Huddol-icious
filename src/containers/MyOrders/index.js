import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addItemToPastOrder, removeItemFromPastOrder, submitOrder } from '../../actions/ordersActions'


// how do I edit pastOrders?

class MyOrders extends Component {
  render(){
    const pastOrders = this.props.pastOrders.length ? this.props.pastOrders.map(pastOrder => {
          return(
            <div key={pastOrder.orderId}>
              <h3>{pastOrder.orderId}</h3>
              <ul>
                {pastOrder.order.map(item => {
                  return (
                    <li key={item.name}>
                      {item.name} - ${item.price} x {item.quantity}
                      <button onClick={() => this.props.addItemToPastOrder(item.name, item.price, pastOrder.orderId)}>+</button>
                      <button onClick={() => this.props.removeItemFromPastOrder(item.name, item.price, pastOrder.orderId)}>-</button>
                    </li>)
                })}
              </ul>
            </div>
          )
        })
        :<p>There are currently no orders in your history.</p>

    return(
      <div>
        <h1>My Orders</h1>
        {pastOrders}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.items,
  currentOrder: state.orders.currentOrder,
  pastOrders: state.orders.pastOrders
})

const mapDispatchToProps = dispatch => bindActionCreators({
  removeItemFromPastOrder: (item, price, orderId) => removeItemFromPastOrder(item, price, orderId),
  addItemToPastOrder: (item, price, orderId) => addItemToPastOrder(item, price, orderId),
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyOrders)