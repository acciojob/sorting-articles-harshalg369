const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
  'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to strip 'a', 'an', 'the' for sorting purposes
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands array by stripped names
const sortedBands = bands.slice().sort((a, b) => {
  const nameA = stripArticle(a).toLowerCase();
  const nameB = stripArticle(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

// Display the sorted band names (with original text)
const ul = document.getElementById('band');
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
