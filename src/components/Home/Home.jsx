import React from 'react'
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Intro from '../Intro/Intro'
import './Home.scss'

const Home = () => {
  return (
    <div id="home" className='home'>
      <Nav name="Emma Smith" link1="Projects" link2="Experience" link3="Skills" link4="Contact"/>
      <Intro />
      <Main />
    </div>
  )
}

export default Home