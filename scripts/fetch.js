const api = "1a38a5974e56488bb743670c2ed438f3";

const getRep = async (id) => {
  const host = "https://api.spoonacular.com/recipes/";
  const query = `${id}/information?apiKey=${api}&includeNutrition=true`;
  const responce = await fetch(host + query);
  const data = await responce.json();
  return data;
};

const getId = async (food) => {
  const host = "https://api.spoonacular.com/recipes/complexSearch";
  const query = `?apiKey=${api}&query=${food}`;
  const responce = await fetch(host + query);
  const data = await responce.json();
  return data;
};
