// src/components/Footer.jsx
import React from 'react';
import styles from '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Work Over Wish Fitness. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

