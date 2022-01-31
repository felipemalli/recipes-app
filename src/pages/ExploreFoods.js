import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFoods({ history }) {
  return (
    <div>
      <Header title="Explore Foods" haveSearch={ false } />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </div>
  );
}

ExploreFoods.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ExploreFoods;
