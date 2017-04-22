import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const css = require('./NavBar.css');

export const NavBar = () => (
  <ul className={css.list}>
    <li>
      <Button bsStyle="primary">Primary</Button>
      <NavLink activeClassName='active' exact to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/users-list'>Users List</NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/about'>About</NavLink>
    </li>
  </ul>
);
