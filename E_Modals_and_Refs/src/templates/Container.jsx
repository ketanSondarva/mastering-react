import './Container.css'

import React from 'react'

const Container = (props) => {
  return (
    <div className={`container ${props.className}`}>{props.children}</div>
  )
}

export default Container