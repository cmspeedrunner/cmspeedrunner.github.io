// --- search.js with autocomplete dropdown and fuzzy search ---

const categories = [
  { name: "Movies and Television", id: "movies-tv", keywords: ["movies", "tv", "television", "film", "shows", "anime"] },
  { name: "Gaming", id: "gaming", keywords: ["games", "gaming", "video games"] },
  { name: "Music and Podcasts", id: "music", keywords: ["music", "songs", "podcasts", "audio"] },
  { name: "Courses and Education", id: "education", keywords: ["education", "courses", "learning", "udemy", "skills"] },
  { name: "Literature", id: "literature", keywords: ["books", "literature", "novels", "ebooks", "reading"] },
  { name: "VPNs", id: "vpns", keywords: ["vpn", "proton", "warp", "bitmask"] },
  { name: "Live TV and Sports", id: "livetv", keywords: ["live tv", "sports", "football", "soccer", "stream", "channels"] }
];

const input = document.getElementById('searchInput');
const results = document.getElementById('searchResults');

// Simple fuzzy matching function
function fuzzyMatch(query, target) {
  query = query.toLowerCase();
  target = target.toLowerCase();

  let queryIndex = 0;
  for (let i = 0; i < target.length; i++) {
    if (target[i] === query[queryIndex]) {
      queryIndex++;
    }
    if (queryIndex === query.length) {
      return true;
    }
  }
  return false;
}

input.addEventListener('input', () => {
  const query = input.value.toLowerCase().trim();
  results.innerHTML = '';
  results.style.display = 'block';

  if (!query) return;

  const matches = categories.filter(cat => 
    fuzzyMatch(query, cat.name) ||
    cat.keywords.some(keyword => fuzzyMatch(query, keyword))
  );

  if (matches.length === 0) {
    const noResult = document.createElement('li');
    noResult.textContent = "No matching categories found.";
    noResult.classList.add('no-results');
    results.appendChild(noResult);
  } else {
    matches.forEach(match => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `/pages/Archive/archive.html#${match.id}`;
      link.textContent = match.name;
      li.appendChild(link);
      results.appendChild(li);
    });
  }
});

// Hide dropdown on outside click
document.addEventListener('click', (e) => {
  if (!document.querySelector('.search-page').contains(e.target)) {
    results.style.display = 'none';
  }
});
