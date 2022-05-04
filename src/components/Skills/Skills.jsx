import React from 'react'
import PageSeparator from '../PageSeparator/PageSeparator'
import './Skills.scss'
import html_logo from '../../assets/images/html.png'
import css_logo from '../../assets/images/csslogo.png'
import sass_logo from '../../assets/images/sasslogo.png'
import figma_logo from '../../assets/images/figmalogo.png'
import git_logo from '../../assets/images/gitlogo.png'
import javascript_logo from '../../assets/images/jslogo.png'

const Skills = () => {
  return (
    <div className='skills'>
      <PageSeparator text="Skills I have learnt" />
      <p className="skills__para">These are some of the tech stacks I can use:</p>
      <div className="skills_flex">
        <img className="skills__logo" src={html_logo} alt="html logo"></img>
        <img className="skills__logo" src={css_logo} alt="css logo"></img>
        <img className="skills__logo" src={sass_logo} alt="sass logo"></img>
        <img className="skills__logo" src={figma_logo} alt="figma logo"></img>
        <img className="skills__logo" src={git_logo} alt="git logo"></img>
        <img className="skills__logo" src={javascript_logo} alt="javascript logo"></img>
      </div>
      <p className="skills__para">Some of my soft skills are:</p>
      <ul className="skills__list">
        <li className="skills__item">Excellent communication</li>
        <li className="skills__item">Problem-solving</li>
        <li className="skills__item">Work well within a team</li>
        <li className="skills__item">Organisation</li>
        <li className="skills__item">Critical and rational thinking</li>
        <li className="skills__item">Able to make decisions</li>
        <li className="skills__item">Conflict resolution</li>
        <li className="skills__item">Open to criticism</li>
      </ul>
    </div>
  )
}

export default Skills