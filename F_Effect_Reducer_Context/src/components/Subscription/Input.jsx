import React from 'react'

// not used, for demo purpose only !!

const Input = (props) => {
  return (
    <div>
        <label htmlFor={props.id}>{props.label}</label>
        <input ref={props.ref} type={props.type} id={props.id} />
    </div>
  )
}

export default Input