import React from 'react'
import { Route, Link } from 'react-router-dom'
import Restaurants from '../Restaurants'
import MyOrders from '../MyOrders'

const App = () => (
  <div>
    <header>
      <Link to="/">Resaturants</Link>
      <span> || </span>
      <Link to="/my-orders">MY Orders</Link>
    </header>

    <main>
      <Route exact path="/" component={Restaurants} />
      <Route exact path="/my-orders" component={MyOrders} />
    </main>
  </div>
)

export default App