const det = document.querySelector(".detail");

const showRep = (data) => {
  const html = `<p class ="rep">${data.instructions}</p>`;

  det.innerHTML = html;
};

const params = new URLSearchParams(window.location.search);
for (const param of params) {
  const id = param[1];

  const fetchRep = async (id) => {
    const data = await getRep(id);
    return data;
  };

  fetchRep(id).then((data) => {
    showRep(data);
  });
}
