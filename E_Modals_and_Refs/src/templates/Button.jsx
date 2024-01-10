import React from 'react'
import './Button.css';

const Button = (props) => {
  console.log(props);
  console.log(props.title);
  console.log(props.type);
  return (
    <button className='button' type={props.type} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button