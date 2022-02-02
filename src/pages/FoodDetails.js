/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import requestAPI from '../services/requestAPI';
import DetailsVideo from '../components/DetailsVideo';
import RecipeCard from '../components/RecipeCard';
import DetailsIngredients from '../components/DetailsIngredients';
// import FavoriteButton from '../components/FavoriteButton';

function FoodDetails(props) {
  const [details, setDetails] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const { match: { params: { recipeId } } } = props;
  const { strMeal, strMealThumb, strCategory, strYoutube } = details;

  useEffect(() => {
    requestAPI.getMeals.infoById(recipeId)
      .then((info) => setDetails(info.meals[0]));
    requestAPI.getDrinks.byNameOrFirst12()
      .then((info) => setRecommendations((info.drinks)));
  }, []);

  const RECOMMENDATION_LIMIT = 6;

  return (
    <main>
      <img
        src={ strMealThumb }
        alt={ strMeal }
        data-testid="recipe-photo"
        width={ 200 }
      />
      <section>
        <h1 data-testid="recipe-title">{ strMeal }</h1>
        <span data-testid="recipe-category">{ strCategory }</span>
        <button type="button" data-testid="share-btn">Compartilhar</button>
        {/* <FavoriteButton details={ details } /> */}
      </section>
      <section>
        <h2>Ingredients</h2>
        <DetailsIngredients details={ details } />
      </section>
      <section>
        <h2>Instructions</h2>
        <p data-testid="instructions">{ details.strInstructions }</p>
      </section>
      <section>
        <h2>Video</h2>
        {details.length !== 0 && <DetailsVideo
          title={ strMeal }
          url={ strYoutube }
        />}
      </section>
      <section>
        <h2>Recommended</h2>
        {recommendations && recommendations
          .filter((_, i) => i < RECOMMENDATION_LIMIT)
          .map(({ idDrink, strDrinkThumb, strDrink, strCategory: drinkCategory }, i) => (
            <RecipeCard
              key={ idDrink }
              img={ strDrinkThumb }
              name={ strDrink }
              index={ i }
              id={ idDrink }
              type="foods"
              category={ drinkCategory }
            />))}
      </section>
      <Link to="/profile">
        <button type="button" data-testid="start-recipe-btn">Start Recipe</button>
      </Link>
    </main>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      recipeId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default FoodDetails;
