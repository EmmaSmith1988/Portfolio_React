import React from 'react'
import './ProjectsList.scss'
import Projects from '../Projects/Projects'
import PageSeparator from '../PageSeparator/PageSeparator'
import projects from '../../data/projects'

const ProjectsList = () => {
  const projectImagesArray = projects.map(project => {
    return project.projectImage;
  })

  const projectInfoArray = projects.map(project => {
    return project.projectInfo;
  })

  const projectCodeArray = projects.map(project => {
    return project.projectCode;
  })

  const projectSiteArray = projects.map(project => {
    return project.projectSite;
  })
  console.log(projectImagesArray);


  return (
    <div className='projectsList'>
      <PageSeparator text="Things I've made:"/>
      <Projects projectImagesArray={projectImagesArray} projectInfoArray={projectInfoArray} projectCodeArray={projectCodeArray} projectSiteArray={projectSiteArray} />
    </div>
  )
}

export default ProjectsList