import React, {/*  useEffect, useState */ } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import local from '../services/handleLocal';

function Profile() {
  // const [email/* , setEmaill */] = useState('teste@gmail.com');
  // const dataProfile = local.get.user();
  // const { email } = dataProfile;
  const resetLocal = () => localStorage.clear();

  /*   async function setEmail() {
    const dataProfile = await local.get.user();
    setEmaill(dataProfile.email);
  }

  useEffect(() => {
    setEmail();
  }, []); */

  return (
    <div>
      <Header title="Profile" haveSearch={ false } />

      <h1 data-testid="profile-email">teste@gmail.com</h1>

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
