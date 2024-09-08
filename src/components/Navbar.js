import React from 'react';
import '../App.css';

const Navbar = ({ user, handleLogOut }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="user-dropdown">
          <span>{user.email}</span>
          <div className="dropdown-content">
            <button onClick={handleLogOut}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
