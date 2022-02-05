import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import requestAPI from '../services/requestAPI';

function ExploreFoodsByNationalities() {
  const LIMIT = 12;
  const [dataNationalities, setDataNationalities] = useState([]);
  const [valueRecipe, setValueRecipe] = useState('');
  const [filterRecipe, setFilterRecipe] = useState([]);
  const [limit] = useState(LIMIT);

  useEffect(() => {
    requestAPI.getMeals
      .byNationalityAll().then((data) => setDataNationalities(data.meals));
  }, []);

  useEffect(() => {
    requestAPI.getMeals
      .byNationality(valueRecipe).then((data) => setFilterRecipe(data.meals));
  }, [valueRecipe]);

  function handleChange(event) {
    setValueRecipe(event.target.value);
  }

  return (
    <>
      <Header title="Explore Nationalities" haveSearch />
      <select
        id="nationalities"
        value={ valueRecipe }
        data-testid="explore-by-nationality-dropdown"
        onChange={ (event) => handleChange(event) }
      >
        {dataNationalities
          .map(({ strArea }, index) => (
            <option
              key={ index }
              value={ strArea }
              data-testid={ `${strArea}-option` }
            >
              {strArea}
            </option>
          ))}
      </select>
      {filterRecipe && filterRecipe
        .filter((_, i) => i < limit)
        .map(({ strMeal, strMealThumb }, i) => (
          <button
            type="button"
            key={ strMeal }
            data-testid={ `${i}-recipe-card` }
          >
            <p data-testid={ `${i}-card-name` }>{strMeal}</p>
            <img
              src={ strMealThumb }
              alt={ strMeal }
              data-testid={ `${i}-card-img` }
            />
          </button>
        )) }
      <Footer />
    </>
  );
}

export default ExploreFoodsByNationalities;
