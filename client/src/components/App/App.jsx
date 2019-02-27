import React, { Component } from 'react'
import { connect }          from 'react-redux'

import { loadAccessToken } from '../../actions/authActions'
import Landing             from '../Landing/Landing'
import Loading             from '../Loading/Loading'

import './App.css'


export class App extends Component {
  componentDidMount() {
    this.props.loadAccessToken()
  }

  render() {
    return (
      <div className="App">
        { this.props.auth.token ? <Landing /> : <Loading /> }
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
