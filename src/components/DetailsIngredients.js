import React from 'react';
import PropTypes from 'prop-types';

export default function DetailsIngredients(props) {
  const { details } = props;

  const ingredientsArray = () => {
    const ingredients = [];
    const MAX = 20;
    for (let i = 1; i <= MAX; i += 1) {
      ingredients
        .push(`${details[`strIngredient${[i]}`]} - ${details[`strMeasure${[i]}`]}`);
    }
    return ingredients.filter((i) => i !== ' -  ' && i !== ' - ');
  };

  return (
    <ul>
      {details.length !== 0 && ingredientsArray().map((i) => (
        <li key={ i } data-testid={ `${i}-ingredient-name-and-measure` }>{i}</li>
      ))}
    </ul>
  );
}

DetailsIngredients.propTypes = {
  details: PropTypes.arrayOf(PropTypes.object).isRequired,
};
