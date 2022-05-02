const getRep = async () => {
  const responce = await fetch(
    "https://api.spoonacular.com/recipes/654959/information?apiKey=45055b7797714f42a6496662cb00415d&includeNutrition=true"
  );
  const data = await responce.json();
  return data;
};

const getId = async () => {
  const responce = await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=45055b7797714f42a6496662cb00415d&query=pasta"
  );
  const data = await responce.json();
  return data;
};

getId().then((data) => {
  console.log(data.results);
});

getRep().then((data) => {
  console.log(data);
});
