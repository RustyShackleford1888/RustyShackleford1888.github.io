// Function to fetch and search items
async function searchItems() {
  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = ''; // Clear previous results

  try {
    const response = await fetch('js/uniqueItems.json'); // Adjusted URL
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const items = await response.json();

    // Convert search input to a regex pattern
    // Escape special regex characters, replace * with .*, and # with \d+
    let pattern = searchInput.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Escape special characters
                              .replace(/\\\*/g, '.*') // Replace * with .*
                              .replace(/#/g, '\\d+'); // Replace # with \d+
    const regex = new RegExp(pattern, 'i'); // 'i' for case-insensitive

    const matchingItems = items.filter(item => {
      // Check if any property of the item matches the search input using regex
      return item.props.some(prop => regex.test(prop.join('')));
    });

    if (matchingItems.length === 0) {
      searchResults.innerHTML = '<li>No matching items found.</li>';
    } else {
      matchingItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        searchResults.appendChild(listItem);
      });
    }
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    searchResults.innerHTML = '<li>Error loading data.</li>';
  }
}