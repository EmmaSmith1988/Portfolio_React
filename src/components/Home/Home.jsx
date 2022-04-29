import React from 'react'
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Intro from '../Intro/Intro'

const Home = () => {
  return (
    <div className='home'>
      <Nav name="Emma Smith" link1="Projects" link2="Experience" link3="Skills" link4="Contact"/>
      <Intro />
      <Main />
    </div>
  )
}

export default Home