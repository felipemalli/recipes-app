import React, { useContext } from 'react';
import RecipeContext from '../context/RecipeContext';

function SearchBar() {
  const contextValue = useContext(RecipeContext);

  // const [radioInput, setRadioInput] = useState([]);

  // const handleChange = ({ target }) => {
  // }

  const onChangeValue = ({ target }) => {
    if (target.value === 'ingredient') contextValue.setFoods();
    console.log(target.value);
    //   // https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}
    // } else if (event.target.value ===) {
    //   console.log(event.target.value);
    // } else {
    //   console.log(event.target.value);
    // }
  };

  const onChangeInput = (event) => {
    console.log(event.target.value);
  };

  const handleClick = (event) => {
    console.log(event.target.value);
  };

  // contextValue.setFoods()

  // contextValue.foods

  return (
    <section>
      <input
        type="text"
        data-testid="search-input"
        onChange={ onChangeInput }
      />
      <div onChange={ onChangeValue }>
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          value="ingredient"
          name="gender"
        />
        Ingredient
        <input
          type="radio"
          data-testid="name-search-radio"
          value="name"
          name="gender"
        />
        Name
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          value="first-letter"
          name="gender"
        />
        First letter
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => handleClick() }
        >
          Search
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
