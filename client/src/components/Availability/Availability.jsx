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

    // pass the required parameters to the availability endpoint
    const requiredParams = {
      serviceId: '5',
      startDate: startDate.format('YYYY-MM-DD'),
      endDate:   endDate.format('YYYY-MM-DD')
    }
    // optional parameters which are added as queryParameters
    const optionalParams = { resourceId: 33, tzOffset: 60 }

    this.props.loadAvailability( requiredParams, optionalParams )
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
