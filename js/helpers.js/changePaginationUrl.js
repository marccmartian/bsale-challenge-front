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
