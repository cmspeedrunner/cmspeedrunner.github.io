const categoryMap = {
  'movies': 'movies-tv',
  'movies and television': 'movies-tv',
  'tv': 'movies-tv',
  'television': 'movies-tv',
  'film': 'movies-tv',
  'films': 'movies-tv',
  'gaming': 'gaming',
  'games': 'gaming',
  'video games': 'gaming',
  'music': 'music',
  'podcasts': 'music',
  'songs': 'music',
  'education': 'education',
  'courses': 'education',
  'free courses': 'education',
  'ebooks': 'literature',
  'novels': 'literature',
  'literature': 'literature',
  'books': 'literature',
  'vpn': 'vpns',
  'vpns': 'vpns',
  'football': 'livetv',
  'soccer': 'livetv',
  'stream': 'livetv',
  'live': 'livetv',
  'live tv': 'livetv',
  'sports': 'livetv'
};

const keywords = Object.keys(categoryMap);

const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("autocomplete-list");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  resultsList.innerHTML = "";

  if (!query) return;

  const matches = keywords.filter(keyword => keyword.includes(query));
  const fuzzyMatches = matches.length ? matches : keywords.filter(keyword => keyword.startsWith(query[0]));

  fuzzyMatches.forEach(match => {
    const li = document.createElement("li");
    li.textContent = match;
    li.addEventListener("click", () => {
      const targetId = categoryMap[match];
      if (targetId) {
        window.location.href = `/pages/Archive/archive.html#${targetId}`;
      }
    });
    resultsList.appendChild(li);
  });
});

// Optional: allow Enter to search
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && resultsList.firstChild) {
    resultsList.firstChild.click();
  }
});
