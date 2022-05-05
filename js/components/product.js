/**
 * It takes an array of products and returns a string of HTML code that represents a card for each
 * product
 * @param [products] - an array of objects, each object is a product
 * @returns A string with the HTML code of the cards.
 */
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
