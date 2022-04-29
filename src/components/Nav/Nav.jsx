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
        <li className="nav__link">{link1}</li>
        <li className="nav__link">{link2}</li>
        <li className="nav__link">{link3}</li>
        <li className="nav__link">{link4}</li>
      </ul>
      <img src={hamburger} alt="hamburger drop down menu" className="nav__hamburger" onClick={toggleNav} />
      {showNavMenu && <NavMenu link1="Projects" link2="Experience" link3="Skills" link4="Contact" toggleNav={toggleNav}/>}
    </div>
  )
}

export default Nav