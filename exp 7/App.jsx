import React, { useState } from "react";
import "./App.css";

function App() {
  // Initial list of books
  const [books, setBooks] = useState([
    { title: "Atomic Habits", author: "James Clear" },
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Clean Code", author: "Robert C. Martin" },
  ]);

  // States for search and new book inputs
  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add a new book
  const addBook = (e) => {
    e.preventDefault();
    if (newTitle.trim() === "" || newAuthor.trim() === "") return;
    const newBook = { title: newTitle, author: newAuthor };
    setBooks([...books, newBook]);
    setNewTitle("");
    setNewAuthor("");
  };

  // Remove a book
  const removeBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  // Filter books by search
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>📚 Library Management</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* Add Book Form */}
      <form onSubmit={addBook} className="add-form">
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>

      {/* Book List */}
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div key={index} className="book-card">
              <div>
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
              </div>
              <button onClick={() => removeBook(index)} className="remove-btn">
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="no-books">No books found!</p>
        )}
      </div>
    </div>
  );
}

export default App;

