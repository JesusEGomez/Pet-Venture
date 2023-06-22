const products = require("./products.json");

function getFakeProducts() {
  return products;
}
function postFakeProduct(product) {
  products.push(product);
  console.log(products);
}

module.exports = { getFakeProducts, postFakeProduct };
