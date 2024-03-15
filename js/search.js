// Function to fetch and search items
async function searchItems() {
  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  const searchResultsContainer = document.getElementById('searchResults');
  searchResultsContainer.innerHTML = ''; // Clear previous results

  try {
    const response = await fetch('js/uniqueItems.json'); // Adjusted URL
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const items = await response.json();

    const matchingItems = items.filter(item => {
      // Check if any property of the item matches the search input
      return item.props.some(prop => prop.join('').toLowerCase().includes(searchInput));
    });

    if (matchingItems.length === 0) {
      searchResultsContainer.innerHTML = '<div class="no-matching">No matching items found.</div>';
    } else {
      matchingItems.forEach(item => {
        const html = generateItemHTML(item);
        searchResultsContainer.innerHTML += html;
      });
    }
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    searchResultsContainer.innerHTML = '<div class="error">Error loading data.</div>';
  }
}

// Function to generate HTML for each item
function generateItemHTML(item) {
  let html = '';
  html += '<div class="item row">';
  html += '<div class="row">';
  html += '<ul class="upgradeItems">';
  html += `<li><a onclick="$('[id^=\\'${item.index.substring(0, item.index.length-4)}\\'').hide();$('[id=\\'${item.index}\\']').show();">${item.name}</a><br />${item.tier}</li>`;
  html += '</ul>';
  html += '</div>';

  // Print the left side of the item info
  html += `<div class="row" id="${item.index}">`;
  html += '<div class="item-left four columns">';
  html += `<span class="item-graphic"><img src="/images/items/${item.imageFile}"></span>`;
  if (item.version === "108") {
    html += `<span class="item-name diablo_unique">${item.name} (1.08 relic)</span>`;
  } else {
    html += `<span class="item-name diablo_unique">${item.name}</span>`;
  }
  html += `<span class="item-type">${item.item}</span>`;
  if (item.code) {
    html += `<span class="gray" onclick="copyToClipboard(event)">${item.code}</span>`;
  }
  html += '</div>';

  // Print the right side of the item info
  html += '<div class="item-right eight columns">';
  html += printItem(html, item);
  html += '</div></div>';
  
  return html;
}

// Function to print additional item details
function printItem(html, item) {
  // Add your logic to print additional item details
  // This is just a placeholder
  html += '<p>Additional details here</p>';
  return html;
}
