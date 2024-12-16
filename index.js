function fetchBooks() {
  // Fetch data from the API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Convert response to JSON
    .then((books) => renderBooks(books)) // Pass JSON data to renderBooks
    .catch((error) => console.error("Error fetching books:", error)); // Handle errors
}

function renderBooks(books) {
  // Find the container where book titles will be displayed
  const booksList = document.getElementById("books");

  // Iterate over the books array and create list items for each title
  books.forEach((book) => {
    const bookItem = document.createElement("li");
    bookItem.textContent = book.name; // Use the 'name' property for the title
    booksList.appendChild(bookItem); // Append the list item to the container
  });
}

// Call fetchBooks when the page loads
fetchBooks();

