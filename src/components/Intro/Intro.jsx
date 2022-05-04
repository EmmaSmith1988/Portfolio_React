import React from 'react'
import './Intro.scss'
import Button from '../Button/Button'
import profile from "../../assets/images/profile.jpg"

const Intro = () => {
  return (
    <div className='intro'>
      <img src={profile} alt="close up of Emma Smith" className="intro__image" />
      <h1 className="intro__heading">Hi. I'm Emma.<br></br>A Software Developer<br></br> from Gloucester, UK</h1>
      <p className="intro__text">Fresh out of a tech consultancy with Nology, I'm ready to take on new challenges and push myself to my limits. Hard working and eager to learn - have a look at my projects below and get in touch if you think we could work together.</p>
      <Button className="intro__button" buttonText="See projects"/>
    </div>
  )
}

export default Intro