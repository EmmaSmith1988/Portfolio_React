import React from 'react'
import './Button.scss'

const Button = ({buttonText, className, link}) => {

  return (
    <a href={link} className="button__link">
      <button className={`button ${className}`} >{buttonText}</button>
    </a>
  )
}

export default Button