import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoodsByIngredients() {
  return (
    <div>
      <Header title="Explore Ingredients" haveSearch={ false } />
      <h1>ExploreFoodsByIngredients</h1>
      <Footer />
    </div>
  );
}

export default ExploreFoodsByIngredients;
