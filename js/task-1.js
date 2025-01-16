const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;

  const itemsCount = category.querySelectorAll(".item-name .name").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
});
