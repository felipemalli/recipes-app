import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';
import Profile from '../images/profileIcon.svg';
import Search from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import '../style/header.css';

function Header(props) {
  const { title, haveSearch, get } = props;

  const { enableSearch, setEnableSearch } = useContext(RecipeContext);

  return (
    <header className="header">
      <Link to="/profile">
        <img
          src={ Profile }
          alt="profile"
          data-testid="profile-top-btn"
          className="img-profile"
        />
      </Link>
      <h1 data-testid="page-title" className="title">{title}</h1>
      {
        haveSearch
        && (
          <button type="button" onClick={ () => setEnableSearch(!enableSearch) }>
            <img src={ Search } alt="search" data-testid="search-top-btn" />
          </button>
        )
      }
      { enableSearch && <SearchBar get={ get } /> }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  haveSearch: PropTypes.bool.isRequired,
  get: PropTypes.string.isRequired,
};

export default Header;
