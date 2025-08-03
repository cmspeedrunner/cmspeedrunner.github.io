document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('searchForm');
  form.addEventListener('submit', handleSearch);
});

function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById('searchInput').value.trim().toLowerCase();

  const categoryMap = {
    'movies and television': 'movies-tv',
    'movies': 'movies-tv',
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

    'literature': 'literature',
    'books': 'literature',
    'ebooks': 'literature',
    'novels': 'literature',

    'vpn': 'vpns',
    'vpns': 'vpns',

    'live tv': 'livetv',
    'sports': 'livetv',
    'football': 'livetv',
    'soccer': 'livetv',
    'stream': 'livetv',
    'live': 'livetv'
  };

  // Try exact match first
  if (categoryMap[query]) {
    window.location.href = `pages/Archive/archive.html#${categoryMap[query]}`;
    return;
  }

  // Try partial/fuzzy match
  for (const keyword in categoryMap) {
    if (query.includes(keyword)) {
      window.location.href = `pages/Archive/archive.html#${categoryMap[keyword]}`;
      return;
    }
  }

  alert("No matching category found.");
}
