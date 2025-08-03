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

input.addEventListener('input', () => {
  const query = input.value.toLowerCase().trim();
  results.innerHTML = '';

  if (!query) return;

  const matches = categories.filter(cat => 
    cat.name.toLowerCase().includes(query) ||
    cat.keywords.some(keyword => keyword.includes(query))
  );

  if (matches.length === 0) {
    results.innerHTML = `<li class="no-results">No matching categories found.</li>`;
  } else {
    matches.forEach(match => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="/pages/Archive/archive.html#${match.id}">${match.name}</a>`;
      results.appendChild(li);
    });
  }
});
