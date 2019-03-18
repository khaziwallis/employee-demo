import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        Hello World, am from Header....
        <nav>
          <ul>
            <li>
              <Link to="/">Create Employee</Link>
            </li>
            <li>
              <Link to="/list-employees">List Employees</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
