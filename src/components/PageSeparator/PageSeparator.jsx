import React from 'react'
import './PageSeparator.scss'
import page_separator from '../../assets/images/page_separator.svg'

const PageSeparator = ({text}) => {
  return (
    <div>
      <h1 className="heading">{text}</h1>
      <img src={page_separator} alt="page separating double ended arrow" className="line" />
    </div>
  )
}

export default PageSeparator