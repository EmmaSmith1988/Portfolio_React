import React from 'react'
import './Main.scss'
import ProjectsList from '../ProjectsList/ProjectsList'
import Experience from '../Experience/Experience'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Button from '../Button/Button'

const Main = () => {
  return (
    <div>
      <ProjectsList />
      <Experience />
      <Skills />
      <About />
      <Button buttonText="Back to top"/>
    </div>
  )
}

export default Main