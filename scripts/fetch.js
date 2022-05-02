const api = "8218447e114d4e0f8fecd78087c29ddc";

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
