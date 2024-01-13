import React from 'react'

const Button = (props) => {
  console.log("Button component");
  return (
    <button type={props.type} onClick={props.onClick}>{props.name}</button>
  )
}

export default React.memo(Button);

// export default Button;