import React from 'react'

import Availability from '../Availability/Availability'

import './Landing.css'


const Landing = () => {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <h2>
          Welcome to OnSched!
        </h2>
      </header>

      <Availability />

    </div>
  )

}


export default Landing
