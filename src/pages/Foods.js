/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import requestAPI from '../services/requestAPI';
import InitialCategory from '../components/InitialCategory';
import RecipeContext from '../context/RecipeContext';

function Foods() {
  const [firstMeals, setFirstMeals] = useState([]);
  const [firstCategories, setfirstCategories] = useState([]);
  const
    { mainMeals, setMainMeals, mainFilter, categoryFilter, searchBarFilter,
    } = useContext(RecipeContext);

  useEffect(() => {
    requestAPI.getMeals.byNameOrFirst12().then((data) => setFirstMeals(data.meals));
    requestAPI.getMeals.categories().then((data) => setfirstCategories(data.meals));
  }, []);

  const INITIAL_MEAL_LIMIT = 12;
  const INITIAL_CATEGORY_LIMIT = 5;
  const initialMeals = firstMeals.filter((_, i) => i < INITIAL_MEAL_LIMIT);
  const initialCategories = firstCategories.filter((_, i) => i < INITIAL_CATEGORY_LIMIT);

  useEffect(() => {
    if (mainFilter === '') setMainMeals(initialMeals);
    if (mainFilter === 'category') setMainMeals(categoryFilter);
    if (mainFilter === 'searchBar') setMainMeals(searchBarFilter);
  }, [firstMeals, categoryFilter, mainFilter, searchBarFilter]);

  return (
    <div>
      <Header title="Foods" haveSearch />
      <InitialCategory categories={ initialCategories } get="getMeals" type="meals" />
      {mainMeals.map(({ idMeal, strMealThumb, strMeal }, i) => (<RecipeCard
        key={ idMeal }
        img={ strMealThumb }
        name={ strMeal }
        index={ i }
        id={ idMeal }
        type="foods"
      />))}
      <Footer />
    </div>
  );
}

export default Foods;
