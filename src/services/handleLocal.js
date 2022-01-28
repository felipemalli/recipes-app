const TOKEN = 1;

const local = {
  set: {
    mealsToken: () => localStorage.setItem('mealsToken', JSON.stringify(TOKEN)),
    cocktailsToken: () => localStorage.setItem('cocktailsToken', JSON.stringify(TOKEN)),
    user: (value) => localStorage.setItem('user', JSON.stringify(value)),
  },
  get: {
    mealsToken: () => JSON.parse(localStorage.getItem('mealsToken')),
    cocktailsToken: () => JSON.parse(localStorage.getItem('cocktailsToken')),
    user: () => JSON.parse(localStorage.getItem('user')),
  },
};

export default local;
