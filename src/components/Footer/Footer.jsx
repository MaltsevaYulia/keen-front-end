import React from 'react'
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p className={styles.footer__text}>Developer: </p>
        <p className={styles.footer__name}>Yuliia Maltseva</p>
      </div>
    </footer>
  );
}

export default Footer