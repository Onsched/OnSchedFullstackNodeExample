import React from 'react'

import './Alert.css'


const Alert = ( props ) => {
  const { status, statusText } = props.error.response
  const message                = props.error.message

  return (
    <div className="Alert">
      <h4>
        { status }: { statusText }
        <br/>
        <small> { message } </small>
      </h4>
    </div>
  )

}


export default Alert
