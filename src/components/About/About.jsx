import React from 'react'
import PageSeparator from '../PageSeparator/PageSeparator'
import './About.scss'
import github_logo from '../../assets/images/githublogo.png'
import email_logo from '../../assets/images/emaillogo.png'
import linkedin_logo from '../../assets/images/linkedinlogo.png'
import cv_logo from '../../assets/images/cvlogo.png'
import EmmaSmith_CV from "../../assets/images/EmmaSmith_CV.pdf"

const About = () => {
  return (
    <div className='about'>
      <PageSeparator text="About me and how to get in touch" />
      <p className="about__para">I am a hard-working passionate 30-something, who is learning more and more about herself every day. My main hobbies are Lego and modern board games - I've officially ran out of room in my house so I can't buy anything new! I also have 3 children who live with me for half the week. I love to travel, most recently visiting New York before the pandemic, I would love to do some more travelling and visit the 7 wonders of the world in the future. Coding started as a hobby during the lockdown as I found it so interesting and now I'd love to make a career out of it so I can do something I love every day.</p>
      <p className="about__para">Please use the links below to see more of my work, grab a copy of my CV, or to get in contact - I'd love to hear from you:</p>
      <div className="about__buttons">
       <a className="about__link1" href="https://github.com/EmmaSmith1988" target="_blank"><img className="about__github" src={github_logo} alt="github logo"/></a>
       <a className="about__link2" href="#" target="_blank"><img className="about__email" src={email_logo} alt="email envelope"/></a>
       <a className="about__link3" href="https://www.linkedin.com/in/emma-smith-a8b4771a9/" target="_blank"><img className="about__linkedin" src={linkedin_logo} alt="linkedin logo"/></a>
       <a className="about__link4" href={EmmaSmith_CV} target="_blank"><img className="about__cv" src={cv_logo} alt="cv"/></a>
      </div>
    </div>
  )
}

export default About