import React, {useState} from 'react'
import './Nav.scss'
import NavMenu from '../NavMenu/NavMenu'
import hamburger from '../../assets/images/hamburger_button.svg'

const Nav = ({name, link1, link2, link3, link4}) => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleNav = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <div className='nav'>
      <h1 className='nav__title'>{name}</h1>
      <ul className="nav__links">
        <a className="nav__link" href="#projectsList"><li>{link1}</li></a>
        <a className="nav__link" href="#experienceList"><li>{link2}</li></a>
        <a className="nav__link" href="#skills"><li>{link3}</li></a>
        <a className="nav__link" href="#about"><li>{link4}</li></a>
      </ul>
      <img src={hamburger} alt="hamburger drop down menu" className="nav__hamburger" onClick={toggleNav} />
      {showNavMenu && <NavMenu link1="Projects" link2="Experience" link3="Skills" link4="Contact" toggleNav={toggleNav}/>}
    </div>
  )
}

export default Nav