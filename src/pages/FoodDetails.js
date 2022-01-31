import React, { useState, useEffect } from 'react';
// import requestAPI from '../services/requestAPI';

function FoodDetails() {
  // const [details, setDetails] = useState([]);

  useEffect(() => {
    requestapifood();
  }, []);

  /*   function requestApiFood() {
    const detailsFood = requestAPI[get].detailsFood();
  } */

  return (
    <div>
      <h1>FoodDetails</h1>
    </div>
  );
}

export default FoodDetails;
