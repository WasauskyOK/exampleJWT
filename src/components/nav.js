import React, { Component } from 'react'
import {Link} from  'react-router-dom';
export default class nav extends Component {
    render() {
        return (
            <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">Logo</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/regs">Create account</Link></li>
              </ul>
            </div>
          </nav>
        )
    }
}
