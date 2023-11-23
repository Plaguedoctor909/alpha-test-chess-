const fetchArtisans = async () => {
  const response = await fetch('http://localhost:<5000>/artisans');
  const artisansData = await response.json();
  console.log('Fetched artisans:', artisansData);

  // Update the front-end interface with artisan data
  const artisansList = document.querySelector('.artisans');
  artisansData.forEach((artisan) => {
    const listItem = document.createElement('li');
    listItem.textContent = artisan.name;
    artisansList.appendChild(listItem);
  });
};
  
fetchArtisans();
  
// Output:
// Fetched artisans: [
  