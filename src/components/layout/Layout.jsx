import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';

export const Nav = () => {
  return (
    <div className={styles.Nav}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export const Body = ({ children }) => {
  return <div className={styles.Body}>{children}</div>;
};
