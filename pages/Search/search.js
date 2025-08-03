const archiveCategories = [
  { name: "Movies and Television", id: "movies-tv", keywords: ["movies", "tv", "television", "film", "shows", "anime"] },
  { name: "Gaming", id: "gaming", keywords: ["games", "gaming", "video games"] },
  { name: "Music and Podcasts", id: "music", keywords: ["music", "songs", "podcasts", "audio"] },
  { name: "Courses and Education", id: "education", keywords: ["education", "courses", "learning", "udemy", "skills"] },
  { name: "Literature", id: "literature", keywords: ["books", "literature", "novels", "ebooks", "reading"] },
  { name: "VPNs", id: "vpns", keywords: ["vpn", "proton", "warp", "bitmask"] },
  { name: "Live TV and Sports", id: "livetv", keywords: ["live tv", "sports", "football", "soccer", "stream", "channels"] }
    ];

    const searchInput = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('results');

    searchInput.addEventListener('input', handleSearch);

    function handleSearch() {
      const query = searchInput.value.toLowerCase();
      resultsDiv.innerHTML = '';

      if (!query) return;

      const matches = archiveCategories.filter(cat =>
        cat.keywords.some(k => k.includes(query)) || cat.name.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
      }

      matches.forEach(match => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `<a href="pages/Archive/archive.html#${match.id}">${match.name}</a>`;
        resultsDiv.appendChild(div);
      });
    }