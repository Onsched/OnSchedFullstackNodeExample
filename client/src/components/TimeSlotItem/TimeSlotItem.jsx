import React from 'react'

import './TimeSlotItem.css'


const TimeSlotItem = ( props ) => {
  const timeSlot = props.timeSlot

  return (
    <div className="TimeSlotItem">

      <h4> { timeSlot.date } - { timeSlot.displayTime } </h4>

      <p> Duration:   { timeSlot.duration } min </p>
      <p> ResourceId: { timeSlot.resourceId } </p>

    </div>
  )

}


export default TimeSlotItem
