import React, { Component } from 'react'
import { connect }          from 'react-redux'
import * as actions         from '../actions'

class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.props.protectedTest()
  }

  renderContent() {
    if (this.props.content) {
      return (
        <p>{this.props.content}</p>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { content: state.auth.content }
}

//es6 named function would be written like this.

/*
 * let mapStateToProps = (state) =>
 *   { content: state.auth.content }
 */

export default connect(mapStateToProps, actions)(Dashboard)

