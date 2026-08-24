import React from "react";
import { NavLink } from "react-router-dom";
import logoUrl from '../assets/logo.svg';

function Header() {
  return (
    <>
    <div className="header flex flex-col justify-center items-center my-8">
        <a href="" rel="noreferrer">
            <img src={logoUrl} alt="Peera Shaik" />
        </a>
      <p className="small m-0 mt-4">VISUALIZATION <span className="m-3 mt-0">|</span> DESIGN <span className="m-3 mt-0">|</span> DEVELOPMENT <span className="m-3 mt-0">|</span> INTERACTION</p>
    </div>

    <div className="navToggle">
      <label>Hamburger</label>
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul className="menu fixed top-0 right-0 flex flex-wrap flex-col justify-center items-center w-full">
        <li>
            <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li>
            <NavLink to="/skills" className="nav-link">Skills</NavLink>
        </li>
        <li>
            <NavLink to="/experience" className="nav-link">Experience</NavLink>
        </li>
        <li>
            <NavLink to="/works" className="nav-link">Works</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Header;
