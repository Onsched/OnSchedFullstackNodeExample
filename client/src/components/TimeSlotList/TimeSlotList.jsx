import moment               from 'moment'
import React, { Component } from 'react'

import Alert        from '../Alert/Alert'
import Loading      from '../Loading/Loading'
import TimeSlotItem from '../TimeSlotItem/TimeSlotItem'

import './TimeSlotList.css'


class TimeSlotList extends Component {
  renderError( error ) {
    return (
      <div className="TimeSlotList" >
        <Alert error={ error } />
      </div>
    )
  }


  renderLoading() {
    return (
      <div className="TimeSlotList" >
        <Loading />
      </div>
    )
  }


  render() {
    const { isLoading,
            availabilityError,
            availableTimes     } = this.props.availability

    // if an error occurred during the fetch, call renderError and
    // end processing of this method
    if ( availabilityError ) {
      return this.renderError( availabilityError )
    }
    // if availability is loading, call renderLoading and
    // end processing of this method
    else if ( isLoading ) {
      return this.renderLoading()
    }

    // else return the full list
    return (
      <div className="TimeSlotList">

        { Array.isArray(availableTimes) &&    // check if availableTimes exists and is an Array

          availableTimes.map( timeSlot => {
            const key = `${timeSlot.resourceId}-` +
                        moment(timeSlot.startDateTime).unix()

            return <TimeSlotItem key={ key } timeSlot={ timeSlot } />
          })

        }

      </div>
    )

  }

}


export default TimeSlotList
