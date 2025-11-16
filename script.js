fetch("products.json")
  .then(r => r.json())
  .then(products => {
    const div = document.getElementById("catalog");

    products.forEach(p => {
      let item = `
        <div class="card">
          <img src="${p.image}" />
          <h3>${p.name}</h3>
          <p>Rs. ${p.price}</p>
        </div>
      `;
      div.innerHTML += item;
    });
  });
