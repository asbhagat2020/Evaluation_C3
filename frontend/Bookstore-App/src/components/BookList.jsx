// src/components/BookList.jsx
import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/api';
import Pagination from './Pagination';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getBooks = async () => {
      const { data } = await fetchBooks(page, 10);
      setBooks(data.books);
      setTotalPages(data.totalPages);
    };
    getBooks();
  }, [page]);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
      <Pagination currentPage={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default BookList;
