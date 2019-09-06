import React from 'react'

import Spinner from './Spinner.svg';
import './Loading.css'


const Loading = () => {
  return (
    <div className="Loading">
      <img src={Spinner} alt="Loading..."/>
    </div>
  )

}


export default Loading
