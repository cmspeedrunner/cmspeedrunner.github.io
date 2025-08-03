function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById('searchInput').value.trim().toLowerCase();

  const categoryMap = {
    'movies': 'movies-tv',
    'movies and television': 'movies-tv',
    'tv': 'movies-tv',
    'television': 'movies-tv',
    "film": "movies-tv",
    "films": "movies-tv",

    'gaming': 'gaming',
    'games': 'gaming',
    "video games": "gaming",

    'music': 'music',
    'podcasts': 'music',
    "songs": "music",

    'education': 'education',
    'courses': 'education',
    "free courses": "education",

    "ebooks": "literature",
    "novels": "literature",
    'literature': 'literature',
    'books': 'literature',

    'vpn': 'vpns',
    'vpns': 'vpns',

    "football": "livetv",
    "soccer": "livetv",
    "stream": "livetv",
    "live": "livetv",
    'live tv': 'livetv',
    'sports': 'livetv'
  };

  const targetId = categoryMap[query];
  if (targetId) {
    window.location.href = `pages/Archive/archive.html#${targetId}`;
  } else {
    alert("No matching category found.");
  }
}
