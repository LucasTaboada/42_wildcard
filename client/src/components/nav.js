import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
      console.log(this.props);
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/" >Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">about</Link>
                </li>
              </ul>
              <Link to="/login" className="btn btn-primary">login</Link>
              <Link to="/login" className="btn btn-secondary">signup</Link>  
            </div>
          </div>
        )
    }
}
