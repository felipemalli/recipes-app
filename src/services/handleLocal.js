const local = {
  set: {
    mealsToken: (token) => localStorage
      .setItem('mealsToken', JSON.stringify(token)),
    cocktailsToken: (token) => localStorage
      .setItem('cocktailsToken', JSON.stringify(token)),
    user: (value) => localStorage.setItem('user', JSON.stringify(value)),
  },
  get: {
    mealsToken: () => JSON.parse(localStorage.getItem('mealsToken')),
    cocktailsToken: () => JSON.parse(localStorage.getItem('cocktailsToken')),
    user: () => JSON.parse(localStorage.getItem('user')),
  },
};

export default local;
