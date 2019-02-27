import moment               from 'moment'
import React, { Component } from 'react'
import { connect }          from 'react-redux'

import { loadAvailability } from '../../actions/availabilityActions'

import Loading      from '../Loading/Loading'
import TimeSlotList from '../TimeSlotList/TimeSlotList'

import './Availability.css'


class Availability extends Component {

  // use arrow function definition to bind
  // 'this' (ie Availability component) to function
  handleGetAvailabilityClick = () => {
    // get a weeks worth of availability starting from tomorrow
    const startDate = moment().add( 1, 'days' ).startOf( 'day' )
    const endDate   = startDate.clone().add( 7, 'days' )

    // pass the access token
    const token = this.props.auth.token

    this.props.loadAvailability( token,
                                 '5',
                                 startDate.format('YYYY-MM-DD'),
                                 endDate.format('YYYY-MM-DD'),
                                 { resourceId: 33, tzOffset: 60 }
                               )
  }

  render() {
    if ( this.props.auth.isLoading ) {
      return <Loading />
    }

    return (
      <div className="Availability">
        <h2> Availability </h2>

        <button
          className="btn btn-primary"
          onClick={ this.handleGetAvailabilityClick }
        >
          Get Availability
        </button>


        <TimeSlotList availability={ this.props.availability } />
      </div>
    )

  }

}


function mapStateToProps( state ) {
  return {
    auth:         state.auth,
    availability: state.availability
  }
}


export default connect( mapStateToProps, { loadAvailability } )( Availability )
