/**
 * It takes in a categoryValue, searchValue, url, and jump and returns a chain.
 * @param categoryValue - the value of the category dropdown
 * @param searchValue - the value of the search input
 * @param url - the url of the page
 * @param jump - the page number you want to jump to
 * @returns the value of the variable chain.
 */
function changePaginationUrl(categoryValue, searchValue, url, jump) {
  let chain = "";

  if (categoryValue === "0" && searchValue === "") {
    chain = `${url}?page=${jump}`;
  } else {
    if (categoryValue !== "0") {
      chain = `${url}?page=${jump}&category=${categoryValue}`;
    }
    if (searchValue !== "") {
      chain = `${url}?page=${jump}&search=${searchValue}`;
    }
  }

  return chain;
}

export default changePaginationUrl;
