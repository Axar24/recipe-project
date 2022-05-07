const foodForm = document.querySelector("form");
const row = document.querySelector(".card-section");

const fetchId = async (food) => {
  const data = await getId(food);
  return data;
};

//showcard function
function showCards(data) {
  let html = `<div class="col col-lg-3" id ="rep">
        <div class="card bg-light">
          <img src="${data.image}"  class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title display-6">${data.title}</h5>
            <p class="card-text">${data.summary}</p>
            <a href="detail.html?id=${data.id}" class="btn btn-success">To Recipes</a>
          </div>
        </div>
      </div>`;

  if (row.childElementCount == 10) {
    const element = document.getElementById("rep");
    element.remove();
    row.innerHTML += html;
  } else {
    row.innerHTML += html;
  }
}

//when submit
foodForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const food = foodForm.food.value.trim().toLowerCase();
  foodForm.reset();

  fetchId(food).then((data) => {
    const results = data.results; //results has 10 arrays

    //add 10 id with loop
    results.forEach((result) => {
      const id = result.id;
      const fetchRep = async (id) => {
        const data = await getRep(id);
        return data;
      };

      fetchRep(id).then((data) => {
        showCards(data);
      });
    });
  });
  localStorage.setItem("food", food);
});

//for reload
if (localStorage.getItem("food")) {
  fetchId(localStorage.getItem("food")).then((data) => {
    const results = data.results; //results has 10 arrays

    //add 10 id with loop
    results.forEach((result) => {
      const id = result.id;
      const fetchRep = async (id) => {
        const data = await getRep(id);
        return data;
      };

      fetchRep(id).then((data) => {
        showCards(data);
      });
    });
  });
}
