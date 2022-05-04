import React, {useState} from 'react'
import './Projects.scss'
import Button from '../Button/Button'

import leftArrow from "../../assets/images/leftarrow.svg";
import rightArrow from "../../assets/images/rightarrow.svg";

const Projects = ({projectImagesArray, projectInfoArray, projectCodeArray, projectSiteArray}) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter === projectImagesArray.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  }

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(projectImagesArray.length - 1);
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <div className='project'>
      <div className="project__carousel">
        <img src={leftArrow} alt="left arrow" onClick={handleDecrement} className="project__arrow project__arrow--left" />
        <img src={projectImagesArray[counter]} alt="current project" className="project__image" />
        <img src={rightArrow} alt="right arrow" onClick={handleIncrement} className="project__arrow project__arrow--right" />
      </div>
      <p className="project__info">{projectInfoArray[counter]}</p>
      <br />
      <Button link={projectCodeArray[counter]} buttonText="See code"/>
      <Button link={projectSiteArray[counter]} buttonText="See website"/>
    </div>
  )
}

export default Projects