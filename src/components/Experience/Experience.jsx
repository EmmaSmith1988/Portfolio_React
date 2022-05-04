import React from 'react'
import './Experience.scss'
import Button from '../Button/Button'
import PageSeparator from '../PageSeparator/PageSeparator'

const Experience = () => {
  return (
    <div className='experience'>
      <PageSeparator text="Things I've done:"/>
      <Button buttonText="See my CV for more" />
    </div>
  )
}

export default Experience