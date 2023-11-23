const fetchProducts = async () => {
  const response = await fetch('http://localhost:<5000>/products');
  const productsData = await response.json();
  console.log('Fetched products:', productsData);

  // Update the front-end interface with product data
  const productsList = document.querySelector('.product');
  productsData.forEach((product) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - $${product.price}`;
    productsList.appendChild(listItem);
  });
};
