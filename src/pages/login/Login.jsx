import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div className="hold-transition login-page">
      <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <h1>ExampleTraining</h1>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form>
              <div className="input-group mb-3">
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            {/* /.social-auth-links */}
            <p className="mb-0">
              <Link to='/register' className="text-center">
                Register a new membership
              </Link>
            </p>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>

    )
  }
}
