import React from 'react'

const Button = ({text,classType = "primary",onClick}) => {
  return (
    <button className={`btn ${classType}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button