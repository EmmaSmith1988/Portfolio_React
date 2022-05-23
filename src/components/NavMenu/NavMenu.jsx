import React from 'react'
import './NavMenu.scss'
// import cross from '../../assets/images/cross.png'

const NavMenu = ({link1, link2, link3, link4, toggleNav}) => {
  return (
    <div className="navMenu">
      <div className="navMenu__content">
        {/* <img src={cross} alt="cross to return" className="navMenu__cross" onClick={toggleNav}/> */}
        <ul className="navMenu__links">
          <a className="navMenu__link" href="#projectsList"><li onClick={toggleNav} >{link1}</li></a>
          <a className="navMenu__link" href="#experienceList"><li onClick={toggleNav}>{link2}</li></a>
          <a className="navMenu__link" href="#skills"><li onClick={toggleNav}>{link3}</li></a>
          <a className="navMenu__link" href="#about"><li onClick={toggleNav}>{link4}</li></a>
        </ul>
      </div>
    </div>
  )
}

export default NavMenu