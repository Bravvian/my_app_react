import React, { Component } from 'react'
import styles from './Login.module.css'

export default class Login extends Component {
  render() {
    return (
        <div className={styles['Auth-form-container']}>
          <form className={styles['Auth-form']}>
            <div className={styles['Auth-form-content']}>
              <h3 className={styles['}Auth-form-title']}>Sign In</h3>
              <div className={styles['form-group mt-3']}>
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      )
  }
}
