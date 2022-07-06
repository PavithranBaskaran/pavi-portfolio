import React, { useState } from 'react'
import {VscThreeBars} from 'react-icons/vsc'

function Navbar({data}) {
    
  
  return (
    <>
    
    <nav
          className={`navbar fixed-top navbar-expand-lg ${
            data ? "bg-dark bg-opacity-75" : "bg-light bg-opacity-75"
          }`}
        >
          <div className="container-fluid">
            <a
              className={`navbar-brand ${
                data ? "text-light" : "text-dark"
              } fingerpaint fs-3  fs-md-6`}
              href="#"
            >
              {`<PAVITHRAN/>`}
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon d-flex align-items-center">
                <VscThreeBars size={'40px'}/>
              </span>
            </button>
            <div
              className="collapse navbar-collapse nav trispace justify-content-lg-end "
              id="navbarNavAltMarkup"
            >
              <ul className={`navbar-nav  flex-lg-row flex-sm-column `}>
                <li
                  className={`nav-link ${
                    data ? "text-light" : "text-dark"
                  } active `}
                  aria-current="page"
                  action="#home"
                >
                  Home
                </li>
                <li
                  className={`nav-link ${
                    data ? "text-light" : "text-dark"
                  } `}
                  action="#about"
                >
                  About
                </li>
                <li
                  className={`nav-link ${
                    data ? "text-light" : "text-dark"
                  } `}
                  action="#skills"
                >
                  Skills
                </li>
                <li
                  className={`nav-link ${
                    data ? "text-light" : "text-dark"
                  } `}
                  action="#project"
                >
                  Project
                </li>
                <li
                  className={`nav-link ${
                    data ? "text-light" : "text-dark"
                  } `}
                  action="#contact"
                >
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        </>
  )
}

export default Navbar