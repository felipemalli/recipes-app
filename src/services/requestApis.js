export const getCategory = async () => {
  try {
    const requestAPI = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const requestJson = await requestAPI.json();
    return requestJson;
  } catch (error) {
    console.error(error);
  }
};

export const getFood = async () => {
  try {
    const requestAPI = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const requestJson = await requestAPI.json();
    return requestJson;
  } catch (error) {
    console.error(error);
  }
};

export const getArea = async () => {
  try {
    const requestAPI = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const requestJson = await requestAPI.json();
    return requestJson;
  } catch (error) {
    console.error(error);
  }
};
