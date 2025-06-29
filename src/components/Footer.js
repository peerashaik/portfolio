import React from "react";
import { NavLink } from "react-router-dom";
import Resume from './Resume';

const Footer = (props) => {
  return (
    <>
    <div className="resuMe hide relative md:fixed bottom-0 md:bottom-10 w-full md:w-auto pb-5 md:pb-0 text-center">
      <Resume />
    </div>

    <div className="container relative">
      <ul className="nav footerNav hide relative md:fixed pb-5 md:pb-0 flex flex-wrap justify-center items-center">
        <li className="nav-item"><NavLink to="/about" className="nav-link link">About</NavLink></li>
        <li className="nav-item"><NavLink to="/skills" className="nav-link link">Skills</NavLink></li>
        <li className="nav-item"><NavLink to="/experience" className="nav-link link">Experience</NavLink></li>
        <li className="nav-item"><NavLink to="/works" className="nav-link link">Works</NavLink></li>
        <li className="nav-item"><NavLink to="/contact" className="nav-link link">Contact</NavLink></li>
      </ul>
    </div>

    <ul className="nav socialIcons hide fixed bottom-40 z-50">
      <li className="my-2">
        <a href="https://www.linkedin.com/in/peerashaik/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
      </li>
      <li className="my-2">
        <a href="https://www.facebook.com/peera.shaik" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
      </li>
      <li className="my-2">
        <a href="https://www.instagram.com/peerashaik786" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
      </li>
    </ul>

    <div className="copyRight hide relative md:fixed bottom-3 text-xs text-gray-600 text-center w-full md:w-auto">
        © <span className='date'></span> ShaikPeera. All rights reserved.
    </div>
    
    <NavLink to="#" className="backtoTop hide fixed right-4 md:right-5"><i className="bi bi-arrow-up-circle-fill"></i></NavLink>
    </>
  );
}

export default Footer;