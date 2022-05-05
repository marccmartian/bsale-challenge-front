/**
 * It takes an array of categories and returns a string of HTML options
 * @param [categories] - an array of objects, each object has an id and a name property.
 * @returns A string of HTML.
 */
export default function showCategoryOption(categories = []) {
  const defaultOption = "<option hidden selected>Categorías...</option>";

  const options = categories.map(
    (category) => `<option value="${category.id}">${category.name}</option>`
  );

  return defaultOption + options.join("");
}
