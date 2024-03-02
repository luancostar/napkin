/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import SessionTitle from '../Title';
 

const truncateText = (text, maxLength) => {
  return text.length <= maxLength ? text : text.slice(0, maxLength) + '...';
};

export default function ThirdRow() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAliceMunroBooks = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=inauthor:"Alice Munro"&orderBy=relevance&maxResults=30&country=BR&key=AIzaSyAeIdizfHx0Td0JpPHcio20F8v7CssB2Kk'
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

    fetchAliceMunroBooks();
  }, []);

  return (
    <div>
      <SessionTitle textSession={'Livros de Alice Munro'} />
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
              <p className={styles.bookTitle}>
                <FontAwesomeIcon className={styles.starIcon} icon={faStar} /> {book.volumeInfo.averageRating}
              </p>
            </div>
            <p className={styles.authorName}>{book.volumeInfo.authors}</p>
    
          </li>
        ))}
      </ul>
    </div>
  );
}
