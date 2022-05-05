import showSpinner from "../components/spinner.js";
import showPagination from "../components/pagination.js";
import showProductCards from "../components/product.js";

const d = document,
  $main = d.querySelector("main"),
  $ul = d.querySelector(".pagination");

export default async function loadProducts(url) {
  try {
    $main.innerHTML = showSpinner();

    const response = await fetch(url);
    const { totalItems, totalPages, currentPage, products } =
      await response.json();

    if (!response.ok)
      throw { status: response.status, statusText: response.statusText };

    if (totalItems === 0) {
      return ($main.innerHTML = `<p class="error">No hay resultados de la busqueda</p>`);
    }

    $ul.innerHTML = showPagination(totalPages);

    // toggle to arrow buttons pagination status
    const backBtn = d.getElementById("back");
    const nextBtn = d.getElementById("next");
    currentPage === 0
      ? backBtn.classList.add("disabled")
      : backBtn.classList.remove("disabled");
    currentPage === totalPages - 1
      ? nextBtn.classList.add("disabled")
      : nextBtn.classList.remove("disabled");

    // active especific page button
    d.querySelector(`.tab-${currentPage}`).classList.add("active");

    $main.innerHTML = showProductCards(products);
  } catch (error) {
    console.log(error);
    let message = error.statusText || "Ocurrió un error";
    $main.innerHTML = `<p class="error">Error ${error.status} ${message}</p>`;
  }
}
