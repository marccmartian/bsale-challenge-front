export default function showCategoryOption(categories = []) {
  const defaultOption = "<option hidden selected>Categorías...</option>";

  const options = categories.map(
    (category) => `<option value="${category.id}">${category.name}</option>`
  );

  return defaultOption + options.join("");
}
