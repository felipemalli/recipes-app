import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import ingredientsArray from '../hooks/ingredientsArray';
import updateLocalInProgress from '../hooks/updateLocalInProgress';
import { ButtonStart } from '../style/recommended';

function StartRecipeButton() {
  /* const { label } = props; */
  const [started, setStarted] = useState(false);

  const handleClick = () => {
    updateLocalInProgress('food',
      recipeId, ingredientsArray(details));
    setStarted(true);
  };

  const handleLabel = () => {
    if (!started) {
      return 'Start Recipe';
    }
    return 'Continue Recipe';
  };

  return (
    <ButtonStart
      type="button"
      data-testid="start-recipe-btn"
      onClick={ () => handleClick() }
    >
      { handleLabel() }
    </ButtonStart>
  );
}

/* StartRecipeButton.propTypes = {
  label: PropTypes.string.isRequired,
}; */

export default StartRecipeButton;
