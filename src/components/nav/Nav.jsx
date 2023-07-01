import './Nav.css';
import React from 'react';
import {Link} from "react-scroll";

function Nav() {
  return (
    <div className="Nav full-bleed">
      <p className="Name">Natasha Rafaela</p>   
      <div className="Navbar">
            <Link className="NavLink" to="about">About</Link>
            <Link className="NavLink" to="projects">Projects</Link>
            <Link className="NavLink">Experience</Link>
            <Link className="NavLink" to="contacts">Contacts</Link>
      </div>
      
    </div>
  );
}

export default Nav;