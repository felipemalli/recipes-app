const local = {
  set: {
    mealsToken: (token) => localStorage
      .setItem('mealsToken', JSON.stringify(token)),
    cocktailsToken: (token) => localStorage
      .setItem('cocktailsToken', JSON.stringify(token)),
    user: (value) => localStorage.setItem('user', JSON.stringify(value)),
    favoriteRecipes: (value) => localStorage
      .setItem('favoriteRecipes', JSON.stringify(value)),
    inProgressRecipes: (value) => localStorage
      .setItem('inProgressRecipes', JSON.stringify(value)),
  },
  get: {
    mealsToken: () => JSON.parse(localStorage.getItem('mealsToken')),
    cocktailsToken: () => JSON.parse(localStorage.getItem('cocktailsToken')),
    user: () => JSON.parse(localStorage.getItem('user')),
    favoriteRecipes: () => JSON.parse(localStorage.getItem('favoriteRecipes')),
    inProgressRecipes: () => JSON.parse(localStorage.getItem('inProgressRecipes')),
  },
};

export default local;
