import React from 'react';
import styles from "./Statistics.module.scss"

const Statistics = ({ stats }) => {
  return (
      <div className={styles.stats}>
      <h2 className={styles.stats__title}>{'Statistics'.toUpperCase()}</h2>
      <p className={styles.stats__string}>
        <span>Total Bikes:</span>
        <strong className={styles.stats__value}>{` ${stats?.total || 0}`}</strong>
      </p>
      <p className={styles.stats__string}>
        <span>Available Bikes :</span>
        <strong className={styles.stats__value}>{` ${stats?.available || 0}`}</strong>
      </p>
      <p className={styles.stats__string}>
        <span>Booked Bikes:</span>
        <strong className={styles.stats__value}>{` ${stats?.booked || 0}`}</strong>
      </p>
      <p className={styles.stats__string}>
        <span>Average bike cost:</span>
        <strong className={styles.stats__value}>{` ${
          stats?.averagePrice || 0
        } `}</strong>
        <span>UAH/hr.</span>
      </p>
    </div>
  );
};

export default Statistics;
