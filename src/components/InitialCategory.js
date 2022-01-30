import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';
import requestAPI from '../services/requestAPI';

function InitialCategory(props) {
  const { categories, get } = props;

  const { setMainFilter, setCategoryFilter } = useContext(RecipeContext);

  const [saveLastTarget, setSaveLastTarget] = useState('');
  let enableFilter = true;

  const handleClick = ({ target }) => {
    if (saveLastTarget === target.name) enableFilter = !enableFilter;
    if (enableFilter) {
      requestAPI[get].byCategory(target.name).then((data) => {
        setCategoryFilter(data);
        setMainFilter('category');
      });
    }
    if (!enableFilter) setMainFilter('');
    setSaveLastTarget(target.name);
  };

  const resetFilter = () => {
    setMainFilter('');
    setSaveLastTarget('');
  };

  return (
    <nav>
      <button type="button" onClick={ resetFilter }>
        All
      </button>
      {categories.map(({ strCategory }) => (
        <button
          key={ strCategory }
          name={ strCategory }
          type="button"
          data-testid={ `${strCategory}-category-filter` }
          onClick={ handleClick }
        >
          {strCategory}
        </button>
      ))}
    </nav>
  );
}

InitialCategory.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
  get: PropTypes.string.isRequired,
};

export default InitialCategory;
