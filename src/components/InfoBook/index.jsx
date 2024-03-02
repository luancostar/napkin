import styles from './styles.module.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faFire, faHeart } from '@fortawesome/free-solid-svg-icons'
 
export default function InfoBook() {
  const [heartColor, setHeartColor] = useState('#b8b7b7'); // Cor inicial do ícone de coração

  const handleHeartClick = () => {
    // Se a cor atual for preta, muda para vermelho; caso contrário, volta para a cor preta
    setHeartColor(currentColor => currentColor === '#b8b7b7' ? 'rgb(255 0 0 / 73%)' : '#b8b7b7');
  };

  return (
    <div className={styles.itemsContainerBottom}>
      <a style={{ borderRight: '1px solid #b8b7b7' }} href="#">
        <FontAwesomeIcon icon={faHeart} onClick={handleHeartClick} style={{ color: heartColor }} />
      </a>
      <a href="#"><FontAwesomeIcon icon={faPlus} /></a>
    </div>
  )
}
