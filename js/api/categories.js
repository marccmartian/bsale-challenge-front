import showCategoryOption from "../components/category.js";

const d = document;
const select = d.querySelector(".form-select");
const main = d.querySelector("main");

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
