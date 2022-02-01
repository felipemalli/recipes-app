import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import local from '../services/handleLocal';

function Profile() {
  const dataProfile = local.get.user();
  const { email } = dataProfile;

  const resetLocal = () => localStorage.clear();

  return (
    <div>
      <Header title="Profile" haveSearch={ false } />

      <h1 data-testid="profile-email">{ email }</h1>

      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
      </Link>

      <Link to="/favorite-recipes">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
      </Link>

      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => resetLocal() }
        >
          Logout
        </button>
      </Link>

      <Footer />
    </div>
  );
}

export default Profile;
