import React, { useState } from 'react';

const Button = props => {
  const [hover, setHover] = useState(false);
  return (
    <button
      {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? '#0243eb' : props.disabled ? '#dbe9fd' : '#0b6bf2',
        color: '#fff',
        border: 0,
        padding: '5px 10px',
        fontSize: '1.3rem',
        ...props.style
      }}
    >{props.children}</button>
  )
}
Button.defaultProps = {
  disabled: false,
  children: '',
}
export default Button
