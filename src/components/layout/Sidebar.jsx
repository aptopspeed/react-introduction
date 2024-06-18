import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <div className="brand-link">
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </div>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                    Home
                  </p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Login
                  </p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Register
                  </p>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/table-page" className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Table-Page
                  </p>
                </Link>
              </li>

            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
