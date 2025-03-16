import React from 'react'
import "./navigation.css"
import { Link, useLocation } from 'react-router-dom';


const Navigation = () => {
  const currentPage = useLocation().pathname;

  return (
        <nav>
            <ul className='nav-links'>
                <li>
                  <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                  >
                      About Me
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Portfolio"
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                  >
                      Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Contact"
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                  >
                      Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Resume"
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                  >
                      Resume
                  </Link>
                </li>
            </ul>
        </nav>
  )
}

export default Navigation