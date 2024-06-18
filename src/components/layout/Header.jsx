import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
  render() {
    return (
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="pushmenu"
              role="button"
            >
              <i className="fas fa-bars" />
            </Link>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/table-page" className="nav-link">
              Table-page
            </Link>
          </li>

        </ul>
       
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" >
              <i className="fas fa-th" />
            </Link>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                15 Notifications
              </span>
              <div className="dropdown-divider" />
              
              <Link className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> Email
                <span className="float-right text-muted text-sm">3 mins</span>
              </Link>

              <div className="dropdown-divider" />

              <Link to="/" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
                <span className="float-right text-muted text-sm">12 hours</span>
              </Link>

              <div className="dropdown-divider" />

              <Link to="/" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
                <span className="float-right text-muted text-sm">2 days</span>
              </Link>
              <div className="dropdown-divider" />
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}