import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import requestAPI from '../services/requestAPI';

function ExploreFoodsByIngredients() {
  const [data, setData] = useState([]);

  useEffect(() => {
    requestAPI.getMeals
      .byIngredientMeals().then((v) => setData(v.meals));
  }, []);
  console.log(data);
  return (
    <div>
      <Header title="Explore Ingredients" haveSearch={ false } />
      {data.map((idIngredient, strIngredient) => (
        <div key={ idIngredient }>
          <p>{ strIngredient }</p>
          {/* <img src={ v.strMealThumb } alt="test" /> */}
        </div>
      ))}
      <h1>fadfadfadfaf</h1>
      <Footer />
    </div>
  );
}

export default ExploreFoodsByIngredients;
