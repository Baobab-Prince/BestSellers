import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
      );
      console.log(res.data.results.books);
    };
    fetchBooks();
  }, []);
  return (
    <div>
      <h1>Books</h1>
    </div>
  );
};

export default Books;
