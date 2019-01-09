import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="logo" to="/landing">
          Prestige Worldwide
        </Link>
        <div className="right">
          <Link to="/login">Log in</Link>
          <text> | </text>
          <Link to="/sign-up">Sign up</Link>
        </div>
      </nav>
    )
  }
}