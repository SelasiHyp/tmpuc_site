import React, {useState, useRef, useEffect}  from 'react'
// import {Button } from './Button.js';
import { Link } from 'react-router-dom';
import './Button.js';
import '../Styles/TopNavLMS.css';

// import { useNavigate } from 'react-router-dom';


function TopNavLMS(){
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    }, []);

  // const showButton = () => {
  //   if(window.innerWidth <= 960){
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect (() => {
  //   showButton()
  // }, []);

  // window.addEventListener('resize', showButton);  

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className='logo-area'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              TMPUC <i className="fab fa-typo3"/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/StudentDashboard' className="nav-links" onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/StudentDashboard' className="nav-links" onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/StudentDashboard' className="nav-links" onClick={closeMobileMenu}>
                Courses
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to='/StudentDashboard' className="nav-links" onClick={closeMobileMenu}>
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/StudentDashboard' className="nav-links" onClick={closeMobileMenu}>
                Assignments
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/StudentDashboard' className="nav-links" onClick={closeMobileMenu}>
                Quizzes
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to='/StudentDashboard' className="nav-links" onClick={closeMobileMenu}>
                Gradebook
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/StudentDashboard' className="nav-links" onClick={closeMobileMenu}>
                Announcements
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/StudentDashboard' className="nav-links" onClick={closeMobileMenu}>
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/StudentDashboard' className="nav-links" onClick={closeMobileMenu}>
                Help
              </Link>
            </li>
            {/* <li style={{width: '30px'}} className="profile">
              <img className="profile-pic" src="/logo512.png" alt="profile" />
            </li> */}
          </ul>



          <div className="dropdown" ref={dropdownRef}>
            <img className="profile-pic" src="/logo512.png" alt="profile" />
            <img className="profile-pic" src="/logo512.png" alt="profile" />
            <button className="dropdown-button" onClick={toggleDropdown}>
            <img className="profile-pic" src="/logo512.png" alt="profile" />
            </button>
            {isOpen && (
              <div className="dropdown-menu">
                <a href="/profile" className="dropdown-item">Profile</a>
                <a href="/settings" className="dropdown-item">Settings</a>
                <a href="/logout" className="dropdown-item">Logout</a>
          </div>
      )}
    </div>
          
        </div>
      </nav>
    </>
  )
}

export default TopNavLMS;