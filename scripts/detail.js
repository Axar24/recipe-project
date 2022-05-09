const det = document.querySelector(".detail");
const title = document.querySelector("h2");
const ingrelist = document.querySelector("ul");

//show instruction
const showDets = (data) => {
  const html = `<h3 class="fw-bold">Instructions</h3>
                 <p class ="rep">${data.instructions}</p>`;

  det.innerHTML = html;
  title.textContent = data.title;
};

//show ingredient
const showIngredient = (data) => {
  const ingredients = data.nutrition.ingredients;
  ingredients.forEach((ingredient) => {
    const html = `<li>${ingredient.name}(${ingredient.amount} ${ingredient.unit})</li>`;

    ingrelist.innerHTML += html;
  });
};

//get query string
const params = new URLSearchParams(window.location.search);
for (const param of params) {
  const id = param[1];

  const fetchRep = async (id) => {
    const data = await getRep(id);
    return data;
  };

  fetchRep(id).then((data) => {
    showDets(data);
    showIngredient(data);
  });
}
