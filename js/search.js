// Function to fetch and search items
async function searchItems() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results
  
    try {
      const response = await fetch('/js/uniqueItems.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const items = await response.json();
  
      const matchingItems = items.filter(item => {
        // Check if any property of the item matches the search input
        return item.props.some(prop => prop.join('').toLowerCase().includes(searchInput));
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
