import loadProducts from "./api/products.js";
import loadCategories from "./api/categories.js";
import changePaginationUrl from "./helpers.js/changePaginationUrl.js";

const localEnv = "http://localhost:8000";
const prodEnv = "https://marv-bsale.herokuapp.com";

let productsApiUrl = `${prodEnv}/api/products`;
let categoriesApiUrl = `${prodEnv}/api/categories`;
let jumpPage = 0;
let categoryValue = "0";
let searchValue = "";

const d = document;
let select = d.getElementById("categories");
let input = d.getElementById("input-search");

d.addEventListener("DOMContentLoaded", (e) => {
  loadProducts(productsApiUrl);
  loadCategories(categoriesApiUrl);
});

d.addEventListener("click", (e) => {
  e.preventDefault();

  // next page pagination
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

  // back page pagination
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

  // especific page pagination
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

  // search produc by name - input
  if (e.target.matches("#search")) {
    jumpPage = 0;
    categoryValue = "0";
    searchValue = input.value;
    loadProducts(`${productsApiUrl}?search=${searchValue}`);
  }
});

// filter by category - select
select.addEventListener("change", () => {
  jumpPage = 0;
  searchValue = "";
  categoryValue = select.options[select.selectedIndex].value;
  loadProducts(`${productsApiUrl}?category=${categoryValue}`);
});
