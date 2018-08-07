import React from 'react'
import { connect } from 'react-redux'


const MyOrders = props => (
  <div>
    <h1>My Orders</h1>
    <p>Hello my orders, hello my darling, hello my ragtime lunch</p>
    {props.pastOrders.map(pastOrder => {
      return(
        <div key={pastOrder.id}>
          <h3>{pastOrder.id}</h3>
          <ul>
            {pastOrder.order.map(item => {
              return <li key={item.name}>{item.name} - ${item.price} x {item.quantity}</li>
            })}
          </ul>
        </div>
      )
    })}
  </div>
)

const mapStateToProps = state => ({
  restaurants: state.restaurants.items,
  currentOrder: state.orders.currentOrder,
  pastOrders: state.orders.pastOrders
})

export default connect(
  mapStateToProps,
  null
)(MyOrders)