import React from 'react'
import './NavMenu.scss'
import cross from '../../assets/images/cross.png'

const NavMenu = ({link1, link2, link3, link4, toggleNav}) => {
  return (
    <div className="navMenu">
      <div className="navMenu__content">
        <img src={cross} alt="cross to return" className="navMenu__cross" onClick={toggleNav}/>
        <ul className="navMenu__links">
            <li className="navMenu__link">{link1}</li>
            <li className="navMenu__link">{link2}</li>
            <li className="navMenu__link">{link3}</li>
            <li className="navMenu__link">{link4}</li>
          </ul>
        </div>
    </div>
  )
}

export default NavMenu