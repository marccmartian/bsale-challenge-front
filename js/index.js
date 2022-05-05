import loadProducts from "./api/products.js";
import loadCategories from "./api/categories.js";
import changePaginationUrl from "./helpers.js/changePaginationUrl.js";

// const apiUrl = "http://localhost:5000"; // localhost
const apiUrl = "https://marv-bsale.herokuapp.com"; // production

let productsApiUrl = `${apiUrl}/api/products`;
let categoriesApiUrl = `${apiUrl}/api/categories`;
let jumpPage = 0;
let categoryValue = "0";
let searchValue = "";

const d = document;
let select = d.getElementById("categories");
let input = d.getElementById("input-search");
let p = d.querySelector(".input-error-msg");

// after loading the page call the functions to fetch products and categories
d.addEventListener("DOMContentLoaded", (e) => {
  loadProducts(productsApiUrl);
  loadCategories(categoriesApiUrl);
});

// listener click event
d.addEventListener("click", (e) => {
  e.preventDefault();

  // next button page pagination action
  if (e.target.matches(".next")) {
    jumpPage += 1;
    const url = changePaginationUrl(
      categoryValue,
      searchValue,
      productsApiUrl,
      jumpPage
    );
    loadProducts(url);
  }

  // back button page pagination action
  if (e.target.matches(".back")) {
    jumpPage -= 1;
    const url = changePaginationUrl(
      categoryValue,
      searchValue,
      productsApiUrl,
      jumpPage
    );
    loadProducts(url);
  }

  // especific page pagination number action
  if (e.target.matches(".custom-anchor")) {
    const [, link] = e.target.classList;
    const [, page] = link.split("-");
    jumpPage = parseInt(page);

    const url = changePaginationUrl(
      categoryValue,
      searchValue,
      productsApiUrl,
      jumpPage
    );
    loadProducts(url);
  }

  // search product by name - input
  if (e.target.matches("#search")) {
    jumpPage = 0;
    categoryValue = "0";
    searchValue = input.value.trim();

    if (!searchValue) {
      input.classList.add("input-error");
      p.innerText = "Campo requerido";
    } else {
      input.classList.remove("input-error");
      p.innerText = "";
      loadProducts(`${productsApiUrl}?search=${searchValue}`);
    }
  }
});

// filter by category - select
select.addEventListener("change", () => {
  jumpPage = 0;
  searchValue = "";
  categoryValue = select.options[select.selectedIndex].value;
  loadProducts(`${productsApiUrl}?category=${categoryValue}`);
});
