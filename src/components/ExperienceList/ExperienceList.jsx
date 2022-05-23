import React from 'react'
import './ExperienceList.scss'
import PageSeparator from '../PageSeparator/PageSeparator'
import experience from '../../data/experience'
import Experience from '../Experience/Experience'

const ExperienceList = () => {

  const experienceImageArray = experience.map(job => {
    return job.experienceImage;
  })

  const experienceInfoArray = experience.map(job => {
    return job.experienceInfo;
  })
  return (
    <div id="experienceList" className='experienceList'>
      <PageSeparator text="Things I've done:"/>
      <Experience experienceImageArray={experienceImageArray} experienceInfoArray={experienceInfoArray} />
    </div>
  )
}

export default ExperienceList