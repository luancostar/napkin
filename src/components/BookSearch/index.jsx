/* eslint-disable no-unused-vars */
// BookSearch.js

import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
 

const truncateText = (text, maxLength) => {
  if (typeof text !== 'string') {
    return '';
  }
  return text.length <= maxLength ? text : text.slice(0, maxLength) + '...';
};

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    try {
      setLoading(true); // Inicia o estado de carregamento

      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    } finally {
      setLoading(false); // Conclui o estado de carregamento, independentemente do resultado
    }
  };

  return (
    <>
     {/* Se estiver carregando, exiba o indicador de carregamento */}
     {loading &&
      <div style={{
        backgroundColor:'#fff',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '9999'}} >
    
          <img 
          style={{width: '300px',
          height: '200px'}}
          src="/src/assets/background/loading-book.gif" 
          alt="" />
       
 
         </div>}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.ContainerSearch}>
          <input
            className={styles.InputSearch}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.searchButton} onClick={searchBooks}>
            <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
          </button>
        </div>
      </div>
      <div style={{ marginTop: '80px' }}>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <div className={styles.allContentLi}>
                <img
                  className={styles.bookCover}
                  src={book.volumeInfo.imageLinks?.thumbnail || ''}
                  alt={book.volumeInfo.title}
                />
                <div>
                  <p className={styles.bookTitle}>
                    {truncateText(book.volumeInfo.title, 50)}
                    <FontAwesomeIcon className={styles.starIcon} icon={faStar} />{' '}
                    {book.volumeInfo.averageRating}
                  </p>
                  <p className={styles.authorName}>
                    {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}
                  </p>
                  <p className={styles.descriptionBook}>
                    {truncateText(book.volumeInfo.description, 150)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BookSearch;
