import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Restaurants = props => (
  <div>
    <h1>Restaurants</h1>
    <p>Choose some items from the menu of one of the restaurants below</p>
    <button onClick={() => props.changePage()}>Go to My Orders page via redux</button>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/my-orders')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Restaurants)