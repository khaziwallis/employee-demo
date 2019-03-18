import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  render() {
    return (
      <div>
        <Nav>
          <Nav.Link href="/">Create Employees</Nav.Link>
          <Nav.Link href="/list-employees">List Employees</Nav.Link>
        </Nav>
      </div>
    );
  }
}

export default Header;
