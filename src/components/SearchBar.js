import React, { useState, useContext } from 'react';
import RecipeContext from '../context/RecipeContext';
import requestAPI from '../services/requestAPI';

function SearchBar() {
  const { setSearchBarFilter, setMainFilter } = useContext(RecipeContext);

  const [radioInput, setRadioInput] = useState([]);
  const [searchBarInput, setSearchBarInput] = useState([]);

  const handleChange = ({ target }) => {
    setSearchBarInput(target);
    console.log(target.value);
  };

  const onChangeValue = ({ target }) => {
    setRadioInput(target);
    console.log(target.value);
  };

  const handleClick = (event) => {
    const conditionName = 'name';
    const conditionIngredient = 'ingredient';
    const conditionFirstLetter = 'first-letter';

    if (searchBarInput && radioInput && event) {
      if (radioInput === conditionName) {
        requestAPI.getMeals.byNameOrFirst12(searchBarInput);
      } else if
      (radioInput === conditionIngredient) {
        requestAPI.getMeals.byIngredient(searchBarInput);
      } else if
      (radioInput === conditionFirstLetter) {
        requestAPI.getMeals.byFirstLetter(searchBarInput);
      }
    }

    console.log(event);
    console.log(searchBarInput);
    console.log(radioInput);
    setMainFilter('searchBar');
    setSearchBarFilter();
  };

  return (
    <section>
      <input
        type="text"
        data-testid="search-input"
        onChange={ handleChange }
      />
      <div onChange={ onChangeValue }>
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          value="ingredient"
        />
        Ingredient
        <input
          type="radio"
          data-testid="name-search-radio"
          value="name"
        />
        Name
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          value="first-letter"
        />
        First letter
        <button
          type="button"
          data-testid="exec-search-btn"
          value="teste"
          onClick={ () => handleClick() }
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default SearchBar;