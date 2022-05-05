import React from 'react'
import './Main.scss'
import ProjectsList from '../ProjectsList/ProjectsList'

import About from '../About/About'
import Skills from '../Skills/Skills'
import Button from '../Button/Button'
import ExperienceList from '../ExperienceList/ExperienceList'

const Main = () => {
  return (
    <div className='main'>
      <ProjectsList />
      <ExperienceList />
      <Skills />
      <About />
      <Button buttonText="Back to top"/>
    </div>
  )
}

export default Main