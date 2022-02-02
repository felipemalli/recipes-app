const requestImage = (value) => {
  const url = `https://www.themealdb.com/images/ingredients/${value}.png`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
};

export default requestImage;
