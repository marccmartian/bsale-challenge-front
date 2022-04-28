export default function showProductCards(products = []) {
  const cards = products.map((product) => {
    return `
    <div class="card">
      <img src="${product.url_image}" class="card-img-top" alt="imagen no disponible"/>
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">
          Price: <strong>S/.${product.price}</strong> <br>
          Discount: ${product.discount}% <br>
          Category: ${product.categoria.name}
        </p>
        <a href="#" class="btn btn-primary btn-sm">Buy</a>
      </div>
    </div>
    `;
  });

  return cards.join("");
}
