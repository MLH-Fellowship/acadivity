import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #4A6FDC;
    position: fixed; 
    width: 1700px;
    height: 75px;
    top:0;
    z-index: 1; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); }
  a, .navbar-nav, .navbar-light .nav-link {
 
    color: #9FFFCB;
    &:hover { color: ; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover { color: #CED1DB; }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Acadivity</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)