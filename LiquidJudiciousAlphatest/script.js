const artisans = document.querySelector('artisans.json');
const products = document.querySelector('product.json');

artisans.addEventListener('click', (event) => {
  event.preventDefault();
  const artisanName = event.target.textContent;
  console.log(`Artisan selected: ${artisanName}`);
});

products.addEventListener('click', (event) => {
  event.preventDefault();
  const productName = event.target.textContent;
  console.log(`Product selected: ${productName}`);
});
