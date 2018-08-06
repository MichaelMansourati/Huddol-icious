import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchRestaurants } from '../../actions/restaurantsActions'

class Restaurants extends Component {
  componentDidMount() {
    this.props.fetchRestaurants()
  }


  render() {
    const restaurantsList = this.props.restaurants ? this.props.restaurants.map(restaurant => {
      return(
        <ul key={restaurant.id}>
          <li>
            <h2>{restaurant.name}</h2>
            <h3>menu</h3>
            <ul>
              {restaurant.menu.map(item => {
                return(
                  <li key={item.name}>
                    <p>{item.name}...{item.price}</p>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      )
    })
    :<span>loading..</span>

    return(
      <div>
        <h1>Restaurants</h1>
        <p>Choose some items from the menu of one of the restaurants below</p>
        <button onClick={() => this.props.changePage()}>Go to My Orders page via redux</button>
        {restaurantsList}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.items
})

const mapDispatchToProps = dispatch => bindActionCreators({
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