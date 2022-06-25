import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>Movie App</div>
      <div className='menu'>
        <ul className='menu'>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/watchlist'>Watchlist</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
