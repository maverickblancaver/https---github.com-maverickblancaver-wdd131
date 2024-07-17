const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-exterior-1543358-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52050,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-1075606-wallpaper.jpg"
  },
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 21718,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong-kong-china-temple-exterior-1543358-wallpaper.jpg"
  }
];

// Function to create a temple card
function createTempleCard(temple) {
  const gallery = document.getElementById('temple-gallery');
  const templeCard = document.createElement('div');
  templeCard.className = 'temple-card';

  templeCard.innerHTML = `
    <figure>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>${temple.templeName}</figcaption>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq ft</p>
    </figure>
  `;

  gallery.appendChild(templeCard);
}

// Function to display temples
function displayTemples(filteredTemples) {
  const gallery = document.getElementById('temple-gallery');
  gallery.innerHTML = ''; // Clear existing temples
  filteredTemples.forEach(createTempleCard);
}

// Event listeners for filtering
document.getElementById('home').addEventListener('click', () => displayTemples(temples));
document.getElementById('old').addEventListener('click', () => {
  const oldTemples = temples.filter(temple => new Date(temple.dedicated.split(', ')[0]) < new Date('1900'));
  displayTemples(oldTemples);
});
document.getElementById('new').addEventListener('click', () => {
  const newTemples = temples.filter(temple => new Date(temple.dedicated.split(', ')[0]) > new Date('2000'));
  displayTemples(newTemples);
});
document.getElementById('large').addEventListener('click', () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
});
document.getElementById('small').addEventListener('click', () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
});

// Initial display
document.addEventListener('DOMContentLoaded', () => {
  displayTemples(temples);

  // Set footer year and last modified date
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = `Last Modified: ${document.lastModified}`;
});
