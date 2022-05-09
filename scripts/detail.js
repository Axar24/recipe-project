const det = document.querySelector(".detail");
const title = document.querySelector("h2");

const showDets = (data) => {
  const html = `<h3 class="fw-bold">Instructions</h3>
                 <p class ="rep">${data.instructions}</p>`;

  det.innerHTML = html;
  title.textContent = data.title;
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
  });
}
