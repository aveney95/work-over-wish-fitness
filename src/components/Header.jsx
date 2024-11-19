import React from 'react';
import logo from '../assets/logo.png'
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="App Logo" className="logo" />
      <h1 className="app-title">Work Over Wish Fitness</h1>
    </header>
  );
};

export default Header;