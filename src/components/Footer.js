import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../images/profileIcon.svg';

function Footer() {
  return (
    <div data-testid="footer">
      <Link to="/drinks" data-testid="drinks-bottom-btn">
        <img src={ Profile } alt="Profile" />
      </Link>
      <Link to="/explore" data-testid="explore-bottom-btn">
        <img src={ Profile } alt="Profile" />
      </Link>
      <Link to="/foods">
        <img src={ Profile } alt="Profile" data-testid="food-bottom-btn" />
      </Link>
    </div>
  );
}

export default Footer;
