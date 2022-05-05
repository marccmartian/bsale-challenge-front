import showCategoryOption from "../components/category.js";

const d = document;
const select = d.querySelector(".form-select");
const main = d.querySelector("main");

/**
 * It fetches the data from the url, parses it to JSON, and then displays it in the select element.
 * @param url - https://marv-bsale.herokuapp.com/api/categories
 */
export default async function loadCategories(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok)
      throw { status: response.status, statusText: response.statusText };

    select.innerHTML = showCategoryOption(data);
  } catch (error) {
    console.log(error);
    let message = error.statusText || "Ocurrió un error";
    main.innerHTML = `<p class="error">Error ${error.status} ${message}</p>`;
  }
}
