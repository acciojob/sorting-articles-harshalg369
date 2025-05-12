const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean',
  'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans',
  'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to strip leading articles
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort ignoring 'a', 'an', 'the'
const sortedBands = bands.sort((a, b) => {
  const bandA = stripArticle(a).toLowerCase();
  const bandB = stripArticle(b).toLowerCase();
  return bandA.localeCompare(bandB);
});

// Display sorted list
const ul = document.getElementById('band');
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
