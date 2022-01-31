import fetchHook from '../hooks/fetchHook';

const requestAPI = {
  getMeals: {
    categories: () => fetchHook('https://www.themealdb.com/api/json/v1/1/list.php?c=list'),

    byNameOrFirst12: (info) => fetchHook('https://www.themealdb.com/api/json/v1/1/search.php?s=', info),

    byIngredient: (info) => fetchHook('https://www.themealdb.com/api/json/v1/1/filter.php?i=', info),

    byFirstLetter: (info) => fetchHook('https://www.themealdb.com/api/json/v1/1/search.php?f=', info),

    byCategory: (info) => fetchHook('https://www.themealdb.com/api/json/v1/1/filter.php?c=', info),

    byNationality: (info) => fetchHook('https://www.themealdb.com/api/json/v1/1/filter.php?a=', info),

    nationalities: () => fetchHook('https://www.themealdb.com/api/json/v1/1/list.php?a=list'),

    detailsFood: () => fetchHook('https://www.themealdb.com/api/json/v1/1/random.php'),
  },

  getDrinks: {
    categories: () => fetchHook('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'),

    byNameOrFirst12: (info) => fetchHook('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=', info),

    byIngredient: (info) => fetchHook('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=', info),

    byFirstLetter: (info) => fetchHook('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=', info),

    byCategory: (info) => fetchHook('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=', info),

    detailsDrinks: () => fetchHook('https://www.thecocktaildb.com/api/json/v1/1/random.php'),
  },
};

export default requestAPI;
