import React from 'react';
import { Link } from 'react-router-dom';
import Drink from '../images/drinkIcon.svg';
import Explore from '../images/exploreIcon.svg';
import Food from '../images/mealIcon.svg';
import '../style/footer.css';

function Footer() {
  return (
    <div data-testid="footer" className="footer">
      <div className="links-footer">
        <Link to="/drinks" data-testid="drinks-bottom-btn">
          <img src={ Drink } alt="Drink" />
        </Link>
        <Link to="/explore" data-testid="explore-bottom-btn">
          <img src={ Explore } alt="Explore" />
        </Link>
        <Link to="/foods" data-testid="food-bottom-btn">
          <img src={ Food } alt="Food" />
        </Link>
      </div>
      <div className="copyright">
        <p> © 2022 Grupo 26 Technologies</p>
      </div>
    </div>
  );
}

export default Footer;
