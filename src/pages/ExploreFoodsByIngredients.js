import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import requestAPI from '../services/requestAPI';

function ExploreFoodsByIngredients() {
  useEffect(() => {
    requestAPI.getMeals
      .byIngredient('list').then((data) => console.log(data.meals));
  }, []);

  return (
    <div>
      <Header title="Explore Ingredients" haveSearch={ false } />
      {/*       {dataIng.map((v) => (
        <div key={ v.idMeal }>
          <p>{ v.strMeal }</p>
          <img src={ v.strMealThumb } alt="test" />
        </div>
      ))} */}
      <h1>xablau</h1>
      <Footer />
    </div>
  );
}

export default ExploreFoodsByIngredients;
