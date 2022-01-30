import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFoods() {
  return (
    <div>
      <Header title="Explore Foods" haveSearch={ false } />
      <h1>ExploreFoods</h1>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
