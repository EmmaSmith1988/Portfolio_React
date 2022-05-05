import React, {useState} from 'react'
import './Experience.scss'
import Button from '../Button/Button'

import leftArrow from "../../assets/images/leftarrow.svg";
import rightArrow from "../../assets/images/rightarrow.svg";

const Experience = ({experienceImageArray, experienceInfoArray}) => {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter === experienceImageArray.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  }

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(experienceImageArray.length - 1);
    } else {
      setCounter(counter - 1);
    }
  }
 

  return (
    <div className='experience'>
      <div className="experience__carousel">
        <img src={leftArrow} alt="left arrow" onClick={handleDecrement} className="experience__arrow experience__arrow--left" />
        <img src={experienceImageArray[counter]} alt="current experience" className="experience__image" />
        <img src={rightArrow} alt="right arrow" onClick={handleIncrement} className="experience__arrow experience__arrow--right" />
      </div>
      <p className="project__info">{experienceInfoArray[counter]}</p>

      <Button buttonText="See my CV for more" />
    </div>
  )
}

export default Experience