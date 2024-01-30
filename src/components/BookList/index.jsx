// src/components/BookList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
 
const truncateText = (text, maxLength) => {
  return text.length <= maxLength ? text : text.slice(0, maxLength) + '...';
};

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchPopularRomanceBooks = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=subject:romance&orderBy=relevance&maxResults=30&key=AIzaSyAeIdizfHx0Td0JpPHcio20F8v7CssB2Kk'
        );

        // Filtrar os livros que têm avaliação
        const booksWithRating = response.data.items.filter(
          (book) => book.volumeInfo.averageRating
        );

        setBooks(booksWithRating);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };

    fetchPopularRomanceBooks();
  }, []);

  return (
    <div>
      <ul className={styles.horizontalRow}>
        {books.map((book) => (
          <li key={book.id}>
            <img
              className={styles.bookCover}
              src={book.volumeInfo.imageLinks?.thumbnail || ''}
              alt={book.volumeInfo.title}
            />
            <div className={styles.infoBook}>
            <p className={styles.bookTitle}>
              {truncateText(book.volumeInfo.title, 30)}
            </p>
            <p>
           {book.volumeInfo.averageRating}
             </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
