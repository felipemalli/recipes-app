import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../images/profileIcon.svg';
import Search from '../images/searchIcon.svg';

function Header(props) {
  const { title, search } = props;
  console.log(search);
  return (
    <div>
      <header>
        <img src={ Profile } alt="profile" data-testid="profile-top-btn" />
        <h1 data-testid="page-title">{title}</h1>
        {
          search
          && <img src={ Search } alt="search" data-testid="search-top-btn" />
        }
      </header>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};

export default Header;
