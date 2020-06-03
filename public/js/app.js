window.onload = async function() {
  const flowers = (await axios.get("/flowers/all")).data;
  let rows = "";
  for (const flo of flowers) {
    rows += `<div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-0 shadow">
                <img
                  src="${flo.photo}"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">${flo.name}</h5>
                  <div class="card-text text-black-50">${flo.family}</div>
                </div>
              </div>
            </div>`;
  }

  document.querySelector("#flowers").innerHTML += rows;
};
