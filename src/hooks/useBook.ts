import {useEffect, useState} from 'react';
import {booksList, Book} from '../api/books';

export function useBook(bookId: string): Book {
  const [book, setBook] = useState({} as Book);

  useEffect(() => {
    const bookFound = booksList.find(b => b.id === bookId);
    setBook(bookFound as Book);
  }, [bookId]);

  return book;
}
