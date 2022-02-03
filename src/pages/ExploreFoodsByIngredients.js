import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import requestAPI from '../services/requestAPI';

function ExploreFoodsByIngredients() {
  const [dataMeals, setDataMeals] = useState([]);

  useEffect(() => {
    requestAPI.getMeals
      .byIngredientMeals()
      .then((data) => setDataMeals(data.meals));
  }, []);

  const INITIAL_INGREDIENTS_LIMIT = 12;
  const mealsIngredients = dataMeals.filter((_, i) => i < INITIAL_INGREDIENTS_LIMIT);

  return (
    <div>
      <Header title="Explore Ingredients" haveSearch={ false } />
      {mealsIngredients.map((v, index) => (
        <div key={ v.idIngredient } data-testid={ `${index}-ingredient-card"` }>
          <p data-testid={ `${index}-card-name` }>{v.strIngredient}</p>
          <img
            src={ `https://www.themealdb.com/images/ingredients/${v.strIngredient}.png` }
            alt={ v.strIngredient }
            data-testid={ `${index}-card-img` }
          />
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default ExploreFoodsByIngredients;
