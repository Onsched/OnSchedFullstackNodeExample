import React, { Component } from 'react'
import { connect }          from 'react-redux'

import { initializeAccessToken } from '../../actions/authActions'
import Landing                   from '../Landing/Landing'
import Loading                   from '../Loading/Loading'

import './App.css'


export class App extends Component {
  componentDidMount() {
    this.props.initializeAccessToken()
  }

  render() {
    return (
      <div className="App">
        { this.props.auth.success ? <Landing /> : <Loading /> }
      </div>
    )

  }

}


function mapStateToProps( state ) {
  return {
    auth: state.auth
  }
}


export default connect( mapStateToProps,
                        { initializeAccessToken: initializeAccessToken }
                      )( App )
