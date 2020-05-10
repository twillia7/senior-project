import React from 'react';
import { Link, NavLink } from 'react-router-dom'

import '../styles/Header.css'

const Header = (props) => {
  return (
    <header className="headerContainer">
      <h1><NavLink to="/" className="headerLink" activeClassName="selectedLink" exact>Home</NavLink></h1>
      <h1><NavLink to="/todo" className="headerLink" activeClassName="selectedLink">To Do</NavLink></h1>
      <h1><NavLink to="/calendar" className="headerLink" activeClassName="selectedLink">Calendar</NavLink></h1>
      <h1><NavLink to="/notes" className="headerLink" activeClassName="selectedLink">Notes</NavLink></h1>
    </header>
  )
}

export default Header;