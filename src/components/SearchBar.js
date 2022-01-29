import React from 'react';

function SearchBar() {
  const onChangeValue = (event) => {
    console.log(event.target.value);
  };

  const handleClick = (event) => {
    console.log(event.target.value);
  };

  return (
    <div onChange={ onChangeValue }>
      <input
        type="text"
        data-testid="search-input"
      />
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
  );
}

export default SearchBar;
