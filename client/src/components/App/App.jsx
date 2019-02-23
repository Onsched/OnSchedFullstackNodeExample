import React, { Component } from 'react'
import { connect }          from 'react-redux'

import { loadAccessToken } from '../../actions/authActions'

import './App.css'


export class App extends Component {
  componentDidMount() {
    this.props.loadAccessToken()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            Welcome to OnSched!
          </h2>

          <div> { this.props.auth.token ? this.props.auth.token.access_token : '' } </div>
        </header>
      </div>
    )

  }

}


function mapStateToProps( state ) {
  return {
    auth: state.auth
  }
}


export default connect( mapStateToProps, { loadAccessToken } )( App )
