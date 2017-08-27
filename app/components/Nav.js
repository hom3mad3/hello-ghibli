const React = require('react');
const Link = require('react-router-dom').Link;
const NavLink = require('react-router-dom').NavLink;

const Nav = () => {
  return (
    <ul className="nav">
      <h1>Hello Ghibli</h1>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          All Films
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/directors'>
          Directors
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/cats'>
          Cats
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
